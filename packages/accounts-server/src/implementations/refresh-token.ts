import { client } from '@dritelabs/accounts-db';
import { OAuthError } from '@dritelabs/accounts-errors';
import { importJWK, signToken } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import {
  validateRefreshTokenGrantRequest,
  validateTokenRequest,
  idTokenClaimsReducer,
  authenticateClient
} from '../utils';
import { config } from '../config';

export const refreshToken: AccountHandlers['RefreshToken'] = async (call, callback) => {
  try {
    const privatekey = await importJWK(config.privateKey);
    const authenticatedClient = await authenticateClient(call.request);
    await validateTokenRequest(call.request);
    const refreshTokenGrantRequestValidation = await validateRefreshTokenGrantRequest({
      ...call.request,
      clientId: authenticatedClient.id
    });

    const scope = refreshTokenGrantRequestValidation.payload.scope as string;

    let idToken: string | undefined;
    let refreshToken = call.request.refreshToken || undefined;

    const accessToken = await signToken({
      audience: (refreshTokenGrantRequestValidation.payload.aud as string[]).filter(
        (aud) => aud !== config.authorizationServerIssuerBaseUrl
      ),
      exp: config.accessTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: 'at+jwt',
      subject: refreshTokenGrantRequestValidation.payload.sub as string,
      client_id: authenticatedClient.id,
      scope
    });

    if (authenticatedClient.refreshTokenRotationType === 'rotate') {
      refreshToken = await signToken({
        audience: refreshTokenGrantRequestValidation.payload.aud as string[],
        exp: config.refreshTokenExpirationTime,
        issuer: config.authorizationServerIssuerBaseUrl,
        key: privatekey,
        typ: 'rt+jwt',
        subject: refreshTokenGrantRequestValidation.payload.sub as string,
        client_id: authenticatedClient.id,
        scope
      });
    }

    if (scope.includes('openid')) {
      const includesProfile = scope.includes('profile');
      const includesAddress = scope.includes('address');
      const includesEmail = scope.includes('email');
      const includesPhone = scope.includes('phone');

      const found = await client.user.findFirst({
        where: { id: refreshTokenGrantRequestValidation.payload.sub },
        select: {
          id: true,
          username: includesProfile,
          addresses: includesAddress,
          email: includesEmail,
          emailVerified: includesEmail,
          phoneNumber: includesPhone,
          phoneNumberVerified: includesPhone,
          profile: includesProfile
        }
      });

      if (!found) {
        return callback({
          code: grpc.status.NOT_FOUND,
          message: 'User does not exist',
          details: 'User does not exist'
        });
      }

      const claims = idTokenClaimsReducer(found, scope);

      idToken = await signToken({
        audience: call.request.clientId,
        exp: config.accessTokenExpirationTime,
        issuer: config.authorizationServerIssuerBaseUrl,
        key: privatekey,
        subject: refreshTokenGrantRequestValidation.payload.sub,
        ...claims
      });
    }

    callback(null, {
      accessToken,
      expiresIn: config.accessTokenExpirationTime as number,
      idToken,
      refreshToken,
      scope,
      tokenType: 'Bearer'
    });
  } catch (e) {
    const error = e as OAuthError;
    const metadata = new grpc.Metadata();

    metadata.set('error', error.error);
    metadata.set('error_description', error.error_description);
    metadata.set('code', error.code.toString());

    callback({
      code: grpc.status.INTERNAL,
      message: error.message,
      details: error.error_description,
      metadata
    });
  }
};
