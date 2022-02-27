import { useBody } from "h3";
import {
  InvalidClientError,
  InvalidGrantError,
  InvalidRequestError,
  ServerError,
} from "@driten/accounts-errors";
import { codeChallenge } from "@driten/accounts-utils";
import { verify } from "@driten/accounts-jwt-verifier";
import { withIronSession } from "~/lib/session";
import {
  ValidationError,
  tokenRequestSchema,
  authorizationCodeGrantTokenRequestSchema,
  clientCredentialsGrantTokenRequestSchema,
} from "~/schemas";
import {
  client as clientService,
  token as tokenService,
  metadata as metadataService,
} from "~/services";

export default withIronSession(async (req, res) => {
  try {
    const body = await useBody(req);
    const params = new URLSearchParams(body);
    const jsonParams = Object.fromEntries(params);
    const metadata = await metadataService.get();
    const tokenRequest = await tokenRequestSchema.validate(jsonParams);

    const client = req.headers.authorization
      ? await clientService.authenticateWithBasic(req.headers.authorization)
      : await clientService.authenticateWithPrivateKey(
          tokenRequest?.client_assertion
        );

    if (tokenRequest.grant_type === "authorization_code") {
      const authorizationCodeGrantTokenRequest =
        await authorizationCodeGrantTokenRequestSchema.validate(jsonParams);

      const code = await verify(
        authorizationCodeGrantTokenRequest.code,
        metadata.jwks_uri,
        {
          issuer: metadata.issuer,
          audience: metadata.issuer,
        }
      ).catch((err) => {
        throw new InvalidGrantError(err?.message);
      });

      const areClientIdsEqual = code.payload.client_id === client.client_id;

      if (!areClientIdsEqual) {
        throw new InvalidClientError(
          "The provided authorization grant was issued to another client."
        );
      }

      const calculatedCodeChallenge = codeChallenge(
        authorizationCodeGrantTokenRequest.code_verifier,
        {
          codeChallengeMethod: code.payload.code_challenge_method as
            | "plain"
            | "S256",
        }
      );

      const areCodeChallengesEqual =
        code.payload.code_challenge === calculatedCodeChallenge;

      if (!areCodeChallengesEqual) {
        throw new InvalidGrantError(
          "The provided authorization grant does not match the code_challenge used in the authorization request"
        );
      }

      const areRedirectUrisEqual =
        code.payload.redirect_uri ===
        authorizationCodeGrantTokenRequest.redirect_uri;

      if (!areRedirectUrisEqual) {
        throw new InvalidGrantError(
          "The provided authorization grant does not match the redirect_uri used in the authorization request"
        );
      }

      const token = await tokenService.create({
        clientId: authorizationCodeGrantTokenRequest.client_id,
        scope: code.payload.scope as string,
        sub: code.payload.sub,
        audList: code.payload.aud as string[],
      });

      return {
        access_token: token,
        token_type: "Bearer",
        expires_in: 3600,
        scope: code.payload.scope,
        // refresh_token: "",
      };
    }

    if (tokenRequest.grant_type === "client_credentials") {
      const clientCredentialsGrantTokenRequest =
        await clientCredentialsGrantTokenRequestSchema.validate(jsonParams);

      const token = await tokenService.create({
        clientId: client.client_id,
        scope: clientCredentialsGrantTokenRequest.scope,
        sub: client.client_id,
        audList: undefined,
      });

      return {
        access_token: token,
        token_type: "Bearer",
        expires_in: 3600,
        scope: clientCredentialsGrantTokenRequest.scope,
      };
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      const e = new InvalidRequestError(error?.errors?.[0]);

      res.statusCode = 400;

      return {
        error: e.error,
        error_description: e.error_description,
      };
    }

    if (
      error instanceof InvalidRequestError ||
      error instanceof InvalidClientError ||
      error instanceof InvalidGrantError
    ) {
      res.statusCode = error.code;

      return {
        error: error.error,
        error_description: error.error_description,
      };
    }

    res.statusCode = 500;

    return new ServerError(error?.message);
  }
});
