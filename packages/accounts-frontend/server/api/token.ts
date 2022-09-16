import { withIronSession } from '~/lib/session';
import { token as tokenService } from '~/services';

const grants = {
  authorization_code: tokenService.createTokenWithAuthorizationCode,
  client_credentials: tokenService.createTokenWithClientCredentials,
  refresh_token: tokenService.refreshToken
};

export default withIronSession(async (event) => {
  try {
    const body = await readRawBody(event);
    const params = new URLSearchParams(body as string);
    const grantType = params.get('grant_type') as tokenService.GrantType;
    const grantParams = {
      // common params
      clientId: params.get('client_id'),
      clientAssertion: params.get('client_assertion'),
      clientAssertionType: params.get('client_assertion_type'),
      clientCredentials: event.req.headers.authorization,
      grantType: params.get('grant_type'),
      scope: params.get('scope'),
      // authorization code grant params
      code: params.get('code'),
      codeVerifier: params.get('code_verifier'),
      redirectUri: params.get('redirect_uri'),
      // client credentials grant params
      resource: params.getAll('resource'),
      // refresh token grant params
      refreshToken: params.get('refresh_token')
    };

    const grantHandler = grants[grantType];
    const tokenResponse = await grantHandler(grantParams);

    return tokenResponse;
  } catch (e) {
    const metadata = e.metadata.getMap();

    event.res.statusCode = parseInt(metadata?.code) || 500;

    return {
      error: metadata?.error || 'server_error',
      error_description: metadata?.error_description
    };
  }
});
