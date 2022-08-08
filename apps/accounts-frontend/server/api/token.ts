import { ValidationError } from 'yup';
import { InvalidClientError, InvalidRequestError, UnauthorizedClientError } from '@dritelabs/accounts-errors';
import { Client } from '@dritelabs/accounts-protobuf/dist/protobuf/core/Client';
import { withIronSession } from '~/lib/session';

import {
  authorizationCode as authorizationCodeService,
  client as clientService,
  metadata as metadataService,
  token as tokenService,
  user as userService
} from '~/services';

export default withIronSession(async (event) => {
  try {
    // appendHeader(event, 'Cache-Control', 'no-store');

    const body = await useRawBody(event);
    const params = new URLSearchParams(body as string);
    const jsonBody = Object.fromEntries(params);
    const isAuthenticated = !!event.req.headers.authorization || !!jsonBody?.client_assertion;

    let client: Client;

    const tokenRequest = await tokenService.validateTokenRequest(jsonBody as tokenService.TokenRequest, {
      context: { isAuthenticated }
    });

    if (event.req.headers.authorization && tokenRequest?.client_assertion) {
      throw new UnauthorizedClientError('The authentication method is invalid');
    }

    if (!isAuthenticated && !tokenRequest?.client_id) {
      throw new InvalidClientError('The client_id is required field');
    }

    if (!isAuthenticated) {
      client = await clientService.getClient({ id: tokenRequest.client_id });
    }

    if (isAuthenticated && event.req.headers.authorization) {
      client = await clientService.authenticateWithBasic(event.req.headers.authorization);
    }

    if (isAuthenticated && tokenRequest?.client_assertion) {
      client = await clientService.authenticateWithPrivateKey(tokenRequest?.client_assertion);
    }

    if (!client.grantTypes.includes(tokenRequest.grant_type)) {
      throw new UnauthorizedClientError(
        'The authenticated client is not authorized to use this authorization grant type'
      );
    }

    if (!isAuthenticated && tokenRequest.grant_type === 'client_credentials') {
      throw new UnauthorizedClientError('The client is not authenticated ');
    }

    const metadata = await metadataService.getAuthorizationServerMetadata();

    if (tokenRequest.grant_type === 'authorization_code') {
      const request = {
        ...jsonBody,
        client_id: client.id
      } as authorizationCodeService.AuthorizationCodeGrantRequest;

      await authorizationCodeService.validateAuthorizationCodeGrantRequest(request);

      const decoded = await authorizationCodeService.validateAuthorizationCode(request.code);

      await authorizationCodeService.invalidateAuthorizationCode(request.code);

      const payload = {
        clientId: decoded.client_id as string,
        scope: decoded.scope as string,
        sub: decoded.sub,
        aud: decoded.aud as string[]
      };

      const createAccessTokenResponse = await tokenService.createAccessToken({
        ...payload,
        aud: payload.aud.filter((resource) => resource !== metadata.issuer)
      });

      const createRefreshTokenResponse = await tokenService.createRefreshToken(payload);

      const tokenResponse: tokenService.TokenResponse = {
        access_token: createAccessTokenResponse.token,
        token_type: createAccessTokenResponse.tokenType,
        expires_in: createAccessTokenResponse.expiresIn,
        scope: decoded.scope as string,
        refresh_token: createRefreshTokenResponse.token
      };

      if ((decoded.scope as string).includes('openid')) {
        const createIDTokenResponse = await tokenService.createIDToken(payload);

        tokenResponse.id_token = createIDTokenResponse.token;
      }

      return tokenResponse;
    }

    if (tokenRequest.grant_type === 'client_credentials') {
      const request = jsonBody as tokenService.ClientCredentialsGrantRequest;

      await tokenService.validateClientCredentialsGrantRequest(request);

      const createAccessTokenResponse = await tokenService.createAccessToken({
        clientId: request.client_id,
        scope: request.scope,
        sub: client.userId,
        aud: Array.isArray(request.resource) ? request.resource : [request.resource]
      });

      return {
        access_token: createAccessTokenResponse.token,
        token_type: createAccessTokenResponse.tokenType,
        expires_in: createAccessTokenResponse.expiresIn,
        scope: request.scope
      };
    }

    if (tokenRequest.grant_type === 'refresh_token') {
      const request = jsonBody as tokenService.RefreshTokenGrantRequest;

      const validation = await tokenService.validateRefreshTokenGrantRequest(request);

      const decoded = await tokenService.validateRefreshToken(validation.refresh_token);

      const approval = await userService.verifyClientApproval({
        clientId: decoded.clientId as string,
        userId: decoded.sub
      });

      if (!approval) {
        throw new InvalidClientError('The client is not authorized to refresh tokens');
      }

      const payload = {
        clientId: decoded.clientId as string,
        scope: decoded.scope as string,
        sub: decoded.sub,
        aud: decoded.aud as string[]
      };

      const createAccessTokenResponse = await tokenService.createAccessToken({
        ...payload,
        aud: payload.aud.filter((resource) => resource !== metadata.issuer)
      });

      let refreshToken = request.refresh_token;

      if (client.refreshTokenRotationType === 'rotate') {
        await tokenService.invalidateToken({
          token: refreshToken,
          tokenTypeHint: 'refresh_token'
        });

        const createRefreshTokenResponse = await tokenService.createRefreshToken(payload);

        refreshToken = createRefreshTokenResponse.token;
      }

      const tokenResponse: tokenService.TokenResponse = {
        access_token: createAccessTokenResponse.token,
        token_type: createAccessTokenResponse.tokenType,
        expires_in: createAccessTokenResponse.expiresIn,
        scope: payload.scope,
        refresh_token: refreshToken
      };

      if (payload.scope.includes('openid')) {
        const createIDTokenResponse = await tokenService.createIDToken(payload);

        tokenResponse.id_token = createIDTokenResponse.token;
      }

      return tokenResponse;
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      const e = new InvalidRequestError(error?.errors?.[0]);

      event.res.statusCode = e.code;

      return {
        error: e.error,
        error_description: e.error_description
      };
    }

    event.res.statusCode = error.code;

    return {
      error: error?.error || 'server_error',
      error_description: error?.error_description || error?.message
    };
  }
});
