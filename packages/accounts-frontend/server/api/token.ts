import {
  InvalidClientError,
  UnauthorizedClientError,
} from "@driten/accounts-errors";
import { withIronSession } from "~/lib/session";
import { withError } from "~/lib/with-error";
import { useRuntimeConfig } from "#imports";

import {
  authorizationCode as authorizationCodeService,
  client as clientService,
  metadata as metadataService,
  token as tokenService,
} from "~/services";

const config = useRuntimeConfig();

export default withError(
  withIronSession(async (event) => {
    appendHeader(event, "Cache-Control", "no-store");

    const body = await useRawBody(event);
    const params = new URLSearchParams(body as string);
    const jsonBody = Object.fromEntries(params);
    const isAuthenticated =
      !!event.req.headers.authorization || !!jsonBody?.client_assertion;

    let client: clientService.Client | undefined;

    const tokenRequest = await tokenService.validateTokenRequest(
      jsonBody as tokenService.TokenRequest,
      {
        context: { isAuthenticated },
      }
    );

    if (event.req.headers.authorization && tokenRequest?.client_assertion) {
      throw new UnauthorizedClientError("The authentication method is invalid");
    }

    if (!isAuthenticated && !tokenRequest?.client_id) {
      throw new InvalidClientError("The client_id is required field");
    }

    if (!isAuthenticated) {
      client = await clientService.get(tokenRequest.client_id);
    }

    if (isAuthenticated && event.req.headers.authorization) {
      client = await clientService.authenticateWithBasic(
        event.req.headers.authorization
      );
    }

    if (isAuthenticated && tokenRequest?.client_assertion) {
      client = await clientService.authenticateWithPrivateKey(
        tokenRequest?.client_assertion
      );
    }

    if (!client.grant_types.includes(tokenRequest.grant_type)) {
      throw new UnauthorizedClientError(
        "The authenticated client is not authorized to use this authorization grant type"
      );
    }

    if (!isAuthenticated && tokenRequest.grant_type === "client_credentials") {
      throw new UnauthorizedClientError("The client is not authenticated ");
    }

    if (tokenRequest.grant_type === "authorization_code") {
      const request = {
        ...jsonBody,
        client_id: client.client_id,
      } as authorizationCodeService.AuthorizationCodeGrantRequest;

      return tokenService.createTokenResponse(request.code);
    }

    if (tokenRequest.grant_type === "client_credentials") {
      const request = jsonBody as tokenService.ClientCredentialsGrantRequest;

      await tokenService.validateClientCredentialsGrantRequest(
        jsonBody as tokenService.ClientCredentialsGrantRequest
      );

      return tokenService.createClientCredentialsGrantResponse({
        client_id: client.client_id,
        user_id: client.user_id,
        resource: request.resource,
        grant_type: request.grant_type,
        scope: request.scope,
      });
    }

    if (tokenRequest.grant_type === "refresh_token") {
      const request = jsonBody as tokenService.RefreshTokenRequest;
      const decoded = await tokenService.validateRefreshToken(request);
      const metadata = await metadataService.get();

      const token = await tokenService.create({
        typ: "at+jwt",
        clientId: decoded?.payload.clientId as string,
        scope: decoded?.payload.scope as string,
        sub: decoded?.payload.sub,
        aud: [...(decoded?.payload.aud as string[])].filter(
          (resource) => resource !== metadata.issuer
        ),
        exp: `${config.accessTokenExpirationTime}s`,
      });

      let refreshToken = request.refresh_token;

      if (client.refresh_token_rotation_type === "rotate") {
        refreshToken = await tokenService.create({
          typ: "rt+jwt",
          clientId: decoded.payload.clientId as string,
          scope: decoded.payload.scope as string,
          sub: decoded.payload.sub,
          aud: [...decoded.payload.aud],
          exp: `${config.refreshTokenExpirationTime}s`,
        });
      }

      return {
        access_token: token,
        token_type: "Bearer",
        expires_in: config.accessTokenExpirationTime,
        scope: decoded.payload.scope,
        refresh_token: refreshToken,
      };
    }
  })
);
