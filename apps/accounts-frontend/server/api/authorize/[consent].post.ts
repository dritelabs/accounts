import { sendRedirect } from 'h3';
import { AccessDeniedError, ServerError } from '@dritelabs/accounts-errors';
import { useRuntimeConfig } from '#imports';
import { withIronSession } from '~/lib/session';
import { authorizationCode as authorizationCodeService, metadata as metadataService } from '~/services';

export default withIronSession(async (event) => {
  const config = useRuntimeConfig();

  const body = await readRawBody(event.req);

  const consent = event.context.params.consent;
  const request = new URLSearchParams(body as string);

  const metadata = await metadataService.getAuthorizationServerMetadata();

  try {
    if (!consent || consent === 'cancel') {
      throw new AccessDeniedError('The resource owner or authorization server denied the request.');
    }

    const createAuthorizationCodeResponse = await authorizationCodeService.createAuthorizationCode({
      clientId: request.get('client_id'),
      codeChallenge: request.get('code_challenge'),
      codeChallengeMethod: request.get('code_challenge_method') || 'plain',
      redirectUri: request.get('redirect_uri'),
      scope: request.get('scope') || '',
      sub: event.req?.session?.user?.id,
      aud: [metadata.issuer, ...request.getAll('resource')],
      exp: `${config.authorizationCodeExpirationTime}s`
    });

    const params = new URLSearchParams({
      code: createAuthorizationCodeResponse.code,
      iss: metadata.issuer
    });

    if (request.get('state')) {
      params.set('state', request.get('state'));
    }

    const redirectUri = `${request.get('redirect_uri')}?${params.toString()}`;

    return sendRedirect(event, redirectUri);
  } catch (error) {
    if (error instanceof AccessDeniedError) {
      const params = new URLSearchParams({
        error: error.error,
        error_description: error.error_description,
        iss: metadata.issuer
      });

      if (request.get('state')) {
        params.set('state', request.get('state'));
      }

      const redirectUri = `${request.get('redirect_uri')}?${params.toString()}`;

      return sendRedirect(event, redirectUri);
    }

    return new ServerError(error?.message);
  }
});
