import { importJWK, signToken } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { config } from '../config';
import { authenticateClient, validateClientCredentialsGrantRequest, validateTokenRequest } from '../utils';
import { OAuthError } from '@dritelabs/accounts-errors';

export const createTokenWithClientCredentials: AccountHandlers['CreateTokenWithClientCredentials'] = async (
  call,
  callback
) => {
  try {
    const privatekey = await importJWK(config.privateKey);
    const authenticatedClient = await authenticateClient(call.request);
    await validateTokenRequest(call.request);
    const clientCredentialsGrantRequestValidation = await validateClientCredentialsGrantRequest({
      ...call.request,
      clientId: authenticatedClient.id
    });

    const scope = clientCredentialsGrantRequestValidation.scope;

    const accessToken = await signToken({
      audience: clientCredentialsGrantRequestValidation.resource as string[],
      exp: config.accessTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: 'at+jwt',
      subject: authenticatedClient.userId as string,
      client_id: authenticatedClient.id,
      scope
    });

    callback(null, {
      accessToken,
      expiresIn: config.accessTokenExpirationTime as number,
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
