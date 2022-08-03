import { client } from '@drite/accounts-db';
import { grpc } from '@drite/accounts-protobuf';
import { importJWK, signToken } from '@drite/accounts-utils';
import { AccountHandlers } from '@drite/accounts-protobuf/dist/protobuf/accounts/Account';
import { config } from '../config';

export const authenticateUser: AccountHandlers['AuthenticateUser'] = async (call, callback) => {
  try {
    const found = await client.user.authenticate(call.request);
    const privatekey = await importJWK(config.privateKey);

    const accessToken = await signToken({
      audience: config.authorizationServerIssuerBaseUrl,
      exp: config.accessTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: 'at+jwt',
      subject: found.id,
      scope: ''
    });

    const refreshToken = await signToken({
      audience: config.authorizationServerIssuerBaseUrl,
      exp: config.refreshTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: 'rt+jwt',
      subject: found.id,
      scope: ''
    });

    callback(null, {
      id: found.id,
      email: found.email,
      accessToken: accessToken,
      refreshToken: refreshToken,
      tokenType: 'Bearer',
      expiresIn: config.accessTokenExpirationTime as number
    });
  } catch (e) {
    const error = e as Error;
    if (error?.message.includes('Invalid email or password')) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Invalid email or password'
      });
    }

    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
