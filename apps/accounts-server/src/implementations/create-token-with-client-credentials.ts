import { importJWK, signToken } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { config } from '../config';
import { validateClientCredentialsGrantRequest, validateTokenRequest } from '../utils';

export const createTokenWithClientCredentials: AccountHandlers['CreateTokenWithClientCredentials'] = async (
  call,
  callback
) => {
  try {
    const privatekey = await importJWK(config.privateKey);
    const tokenRequestValidation = await validateTokenRequest(call.request);
    const clientCredentialsGrantRequestValidation = await validateClientCredentialsGrantRequest(call.request);
    const scope = clientCredentialsGrantRequestValidation.scope;

    const accessToken = await signToken({
      audience: clientCredentialsGrantRequestValidation.resource as string[],
      exp: config.accessTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: 'at+jwt',
      subject: tokenRequestValidation.client.userId as string,
      client_id: tokenRequestValidation.client.id,
      scope
    });

    callback(null, {
      accessToken,
      expiresIn: config.accessTokenExpirationTime as number,
      scope,
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
