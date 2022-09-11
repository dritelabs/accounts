import { InvalidClientError, InvalidGrantError } from '@dritelabs/accounts-errors';
import { verifyToken, codeChallenge } from '@dritelabs/accounts-utils';
import { CreateTokenRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenRequest';
import { config } from '../config';
import { client as cache } from '../lib/cache';

export async function validateAuthorizationCodeGrantRequest(request: CreateTokenRequest) {
  const verifyResult = await verifyToken(request.code!, {
    typ: 'ac+jwt',
    issuer: config.authorizationServerIssuerBaseUrl,
    audience: config.authorizationServerIssuerBaseUrl,
    jwks: {
      keys: [config.publicKey]
    }
  });

  const { value: cached } = await cache.get(verifyResult.payload?.jti!);

  if (cached) {
    throw new InvalidGrantError('The grant is invalid or used');
  }

  await cache.set(verifyResult.payload?.jti!, request.code!, {
    expires: config.authorizationCodeExpirationTime as number
  });

  if (verifyResult.payload.client_id !== request.clientId) {
    throw new InvalidClientError('The provided authorization grant was issued to another client.');
  }

  const _codeChallenge = codeChallenge(
    request.codeVerifier!,
    verifyResult.payload.code_challenge_method as 'plain' | 'S256'
  );

  if (verifyResult.payload.code_challenge !== _codeChallenge) {
    throw new InvalidGrantError(
      'The provided authorization grant does not match the code_challenge used in the authorization request'
    );
  }

  if (verifyResult.payload.redirect_uri !== request.redirectUri) {
    throw new InvalidGrantError(
      'The provided authorization grant does not match the redirect_uri used in the authorization request'
    );
  }

  return verifyResult;
}
