import { grpc } from '@dritelabs/accounts-protobuf';
import { InvalidClientError, InvalidRequestError, ServerError } from '@dritelabs/accounts-errors';
import { withIronSession } from '~/lib/session';
import { token as tokenService } from '~/services';

export default withIronSession(async (event) => {
  try {
    const body = await readRawBody(event);
    const params = new URLSearchParams(body as string);
    const grantType = params.get('grant_type') as tokenService.GrantType;
    const commonParams = {
      clientId: params.get('client_id'),
      clientAssertion: params.get('client_assertion'),
      clientAssertionType: params.get('client_assertion_type'),
      clientCredentials: event.req.headers.authorization,
      grantType: params.get('grant_type'),
      scope: params.get('scope')
    };

    const grants = {
      authorization_code: {
        handler: tokenService.createTokenWithAuthorizationCode,
        params: {
          ...commonParams,
          code: params.get('code'),
          codeVerifier: params.get('code_verifier'),
          redirectUri: params.get('redirect_uri')
        }
      },
      client_credentials: {
        handler: tokenService.createTokenWithClientCredentials,
        params: {
          ...commonParams,
          resource: params.getAll('resource')
        }
      },
      refresh_token: {
        handler: tokenService.refreshToken,
        params: {
          ...commonParams,
          refreshToken: params.get('refresh_token')
        }
      }
    };

    const grantHandler = grants[grantType].handler;
    const grantParams = grants[grantType].params;
    const tokenResponse = await grantHandler(grantParams);

    return tokenResponse;
  } catch (e) {
    const codes = {
      [grpc.status.INVALID_ARGUMENT]: new InvalidRequestError(e.message),
      [grpc.status.UNAUTHENTICATED]: new InvalidClientError(e.message),
      [grpc.status.INTERNAL]: new ServerError(e.message)
    };

    const error = codes[e.code];

    event.res.statusCode = error?.code || 500;

    return {
      error: error?.error || 'server_error',
      error_description: error?.error_description || error?.message
    };
  }
});
