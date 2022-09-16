import * as yup from 'yup';
import { client } from '@dritelabs/accounts-db';
import {
  InvalidClientError,
  InvalidGrantError,
  InvalidRequestError,
  InvalidScopeError
} from '@dritelabs/accounts-errors';
import { verifyToken, codeChallenge } from '@dritelabs/accounts-utils';
import { CreateTokenWithAuthorizationCodeRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/CreateTokenWithAuthorizationCodeRequest';
import { client as cache } from '../lib/cache';
import { config } from '../config';

export async function validateAuthorizationCodeGrantRequest(
  request: CreateTokenWithAuthorizationCodeRequest
) {
  const validation = await authorizationCodeGrantRequestSchema.validate(request).catch((err) => {
    throw new InvalidRequestError(err.message);
  });

  const verifyResult = await verifyToken(validation.code!, {
    typ: 'ac+jwt',
    issuer: config.authorizationServerIssuerBaseUrl,
    audience: config.authorizationServerIssuerBaseUrl,
    jwks: {
      keys: [config.publicKey]
    }
  }).catch((err) => {
    throw new InvalidGrantError(err.message);
  });

  const scope = verifyResult?.payload.scope as string;

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

  const scopes = await client.scope.findMany({
    where: {
      name: {
        in: scope.split(' ')
      }
    }
  });

  if (scopes.length !== scope.split(' ').length) {
    throw new InvalidScopeError(
      'The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.'
    );
  }

  return verifyResult;
}

export const authorizationCodeGrantRequestSchema = yup.object({
  code: yup.string().required(),
  codeVerifier: yup.string().required(),
  redirectUri: yup.string().required()
});
