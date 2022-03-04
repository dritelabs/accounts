import { useBody } from "h3";
import {
  InvalidClientError,
  InvalidGrantError,
  InvalidRequestError,
  ServerError,
  UnauthorizedClientError,
} from "@driten/accounts-errors";
import { codeChallenge } from "@driten/accounts-utils";
import { withIronSession } from "~/lib/session";
import {
  ValidationError,
  tokenRequestSchema,
  authorizationCodeGrantTokenRequestSchema,
  clientCredentialsGrantTokenRequestSchema,
  refreshTokenGrantTokenRequestSchema,
} from "~/schemas";
import {
  client as clientService,
  token as tokenService,
  metadata as metadataService,
  authorizationCode as authorizationCodeService,
} from "~/services";

export default withIronSession(async (req, res) => {
  try {
    const body = await useBody(req);
    const params = new URLSearchParams(body);
    const jsonBody = Object.fromEntries(params);
    const metadata = await metadataService.get();
    const tokenRequest = await tokenRequestSchema.validate(jsonBody);

    const client = req.headers.authorization
      ? await clientService.authenticateWithBasic(req.headers.authorization)
      : await clientService.authenticateWithPrivateKey(
          tokenRequest?.client_assertion
        );

    if (!client.grant_types.includes(tokenRequest.grant_type)) {
      throw new UnauthorizedClientError(
        "The authenticated client is not authorized to use this authorization grant type"
      );
    }

    if (tokenRequest.grant_type === "authorization_code") {
      const authorizationCodeGrantTokenRequest =
        await authorizationCodeGrantTokenRequestSchema.validate(jsonBody);

      const code = await authorizationCodeService.verify(
        authorizationCodeGrantTokenRequest.code
      );

      if (code.payload.client_id !== client.client_id) {
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

      if (code.payload.code_challenge !== calculatedCodeChallenge) {
        throw new InvalidGrantError(
          "The provided authorization grant does not match the code_challenge used in the authorization request"
        );
      }

      if (
        code.payload.redirect_uri ===
        authorizationCodeGrantTokenRequest.redirect_uri
      ) {
        throw new InvalidGrantError(
          "The provided authorization grant does not match the redirect_uri used in the authorization request"
        );
      }

      const token = await tokenService.create({
        clientId: client.client_id,
        scope: code.payload.scope as string,
        sub: code.payload.sub,
        audList: code.payload.aud as string[],
        exp: "1h",
      });

      const refreshToken = await tokenService.create({
        clientId: authorizationCodeGrantTokenRequest.client_id,
        scope: code.payload.scope as string,
        sub: code.payload.sub,
        audList: [...code.payload.aud, metadata.issuer],
        exp: "30days",
      });

      return {
        access_token: token,
        token_type: "Bearer",
        expires_in: 3600,
        scope: code.payload.scope,
        refresh_token: refreshToken,
      };
    }

    if (tokenRequest.grant_type === "client_credentials") {
      const clientCredentialsGrantTokenRequest =
        await clientCredentialsGrantTokenRequestSchema.validate(jsonBody);

      const token = await tokenService.create({
        clientId: client.client_id,
        scope: clientCredentialsGrantTokenRequest.scope,
        sub: client.client_id,
        audList: Array.isArray(clientCredentialsGrantTokenRequest.resource)
          ? clientCredentialsGrantTokenRequest.resource
          : [clientCredentialsGrantTokenRequest.resource],
        exp: "1m",
      });

      return {
        access_token: token,
        token_type: "Bearer",
        expires_in: 3600,
        scope: clientCredentialsGrantTokenRequest.scope,
      };
    }

    if (tokenRequest.grant_type === "refresh_token") {
      const refreshTokenGrantTokenRequest =
        await refreshTokenGrantTokenRequestSchema.validate(jsonBody);

      const refreshToken = await tokenService.verifyRefreshToken(
        refreshTokenGrantTokenRequest.refresh_token
      );

      const token = await tokenService.create({
        clientId: client.client_id,
        scope: refreshToken.payload.scope as string,
        sub: refreshToken.payload.sub,
        audList: refreshToken.payload.aud as string[],
        exp: "1h",
      });

      return {
        access_token: token,
        token_type: "Bearer",
        expires_in: 3600,
        scope: refreshToken.payload.scope,
        refresh_token: refreshToken,
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
      error instanceof InvalidGrantError ||
      error instanceof UnauthorizedClientError
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
