import { importJWK, signToken } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { config } from '../config';

export const createAccessToken: AccountHandlers['CreateAccessToken'] = async (call, callback) => {
  try {
    const privatekey = await importJWK(config.privateKey);

    const token = await signToken({
      audience: call.request.aud,
      exp: config.accessTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: 'at+jwt',
      subject: call.request.sub,
      client_id: call.request.clientId,
      scope: call.request.scope
    });

    callback(null, {
      expiresIn: config.accessTokenExpirationTime as number,
      token,
      tokenType: 'Bearer'
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
