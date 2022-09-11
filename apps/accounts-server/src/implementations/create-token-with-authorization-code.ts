import { client } from '@dritelabs/accounts-db';
import { importJWK, signToken } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { validateTokenRequest, validateAuthorizationCodeGrantRequest, idTokenClaimsReducer } from '../utils';
import { config } from '../config';

export const CreateTokenWithAuthorizationCode: AccountHandlers['CreateTokenWithAuthorizationCode'] = async (
  call,
  callback
) => {
  try {
    const privatekey = await importJWK(config.privateKey);
    const tokenRequestValidation = await validateTokenRequest(call.request);
    const authorizationCodeGrantRequestValidation = await validateAuthorizationCodeGrantRequest({
      ...call.request,
      clientId: tokenRequestValidation.client.id
    });

    const scope = authorizationCodeGrantRequestValidation.payload.scope as string;

    let idToken: string | undefined;

    const accessToken = await signToken({
      audience: (authorizationCodeGrantRequestValidation.payload.aud as string[]).filter(
        (aud) => aud !== config.authorizationServerIssuerBaseUrl
      ),
      exp: config.accessTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: 'at+jwt',
      subject: authorizationCodeGrantRequestValidation.payload?.sub as string,
      client_id: authorizationCodeGrantRequestValidation.payload.client_id,
      scope
    });

    const refreshToken = await signToken({
      audience: authorizationCodeGrantRequestValidation.payload?.aud as string[],
      exp: config.refreshTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: 'rt+jwt',
      subject: authorizationCodeGrantRequestValidation.payload.sub!,
      client_id: authorizationCodeGrantRequestValidation.payload.client_id,
      scope
    });

    if (scope?.includes('openid')) {
      const includesProfile = scope?.includes('profile');
      const includesAddress = scope?.includes('address');
      const includesEmail = scope?.includes('email');
      const includesPhone = scope?.includes('phone');

      const found = await client.user.findFirst({
        where: { id: authorizationCodeGrantRequestValidation.payload.sub },
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
        audience: authorizationCodeGrantRequestValidation.payload.client_id,
        exp: config.accessTokenExpirationTime,
        issuer: config.authorizationServerIssuerBaseUrl,
        key: privatekey,
        subject: authorizationCodeGrantRequestValidation.payload.sub,
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
    const error = e as Error;

    const codes = {
      400: grpc.status.INVALID_ARGUMENT,
      401: grpc.status.UNAUTHENTICATED,
      500: grpc.status.INTERNAL
    };

    callback({
      ...error,
      // @ts-ignore
      code: codes?.[error.code] || grpc.status.UNKNOWN
    });
  }
};
