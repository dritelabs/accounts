import * as yup from 'yup';
import { verifyToken } from '@dritelabs/accounts-utils';
import { InvalidClientError, InvalidGrantError } from '@dritelabs/accounts-errors';
import { RefreshTokenRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/RefreshTokenRequest';
import { client as cache } from '../lib/cache';
import { config } from '../config';

export async function validateRefreshTokenGrantRequest(request: RefreshTokenRequest) {
  const validation = await refreshTokenGrantRequestSchema.validate(request);

  const verifyResult = await verifyToken(validation.refreshToken, {
    typ: 'rt+jwt',
    issuer: config.authorizationServerIssuerBaseUrl,
    audience: config.authorizationServerIssuerBaseUrl,
    jwks: {
      keys: [config.publicKey]
    }
  }).catch((err) => {
    throw new InvalidGrantError(err.message);
  });

  const { value: cached } = await cache.get(verifyResult.payload?.jti!);

  if (cached) {
    throw new InvalidGrantError('The grant is invalid or used');
  }

  if (verifyResult.payload.client_id !== request.clientId) {
    throw new InvalidClientError('The provided authorization grant was issued to another client.');
  }

  return verifyResult;
}

export const refreshTokenGrantRequestSchema = yup.object({
  refreshToken: yup.string().required()
});
