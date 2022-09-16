import { client, prisma } from '@dritelabs/accounts-db';
import { InvalidClientError, InvalidRequestError, UnauthorizedClientError } from '@dritelabs/accounts-errors';
import { TokenRequest } from './validate-token-request';

export async function authenticateClient(request: TokenRequest) {
  const hasClientCredentials = !!request.clientCredentials || !!request.clientAssertion;

  if (request?.clientCredentials && request?.clientAssertion) {
    throw new InvalidRequestError('The authentication method is invalid');
  }

  if (request.grantType === 'client_credentials' && !hasClientCredentials) {
    throw new InvalidClientError('Client authentication failed');
  }

  let found: prisma.Client | undefined | null;

  if (request?.clientCredentials) {
    found = await client.client.authenticate('client_secret_basic', request?.clientCredentials);
  }

  if (request?.clientAssertion) {
    found = await client.client.authenticate('private_key_jwt', request?.clientAssertion);
  }

  if (!hasClientCredentials) {
    found = await client.client.authenticate('none', request.clientId!);
  }

  if (!found) {
    throw new InvalidClientError('Client authentication failed');
  }

  if (found.type === 'web' && !hasClientCredentials) {
    throw new InvalidClientError('Client authentication failed');
  }

  if (!found.grantTypes.includes(request.grantType as prisma.GrantType)) {
    throw new UnauthorizedClientError(
      'The authenticated client is not authorized to use this authorization grant type'
    );
  }

  return found;
}
