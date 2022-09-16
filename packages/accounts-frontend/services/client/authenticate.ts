import { InvalidClientError, InvalidRequestError } from '@dritelabs/accounts-errors';
import { authenticateWithPrivateKey } from './authenticate-with-private-key';
import { getClient } from './get-client';

interface Credentials {
  authorization?: string;
  clientId?: string;
  clientAssertion?: string;
}

export async function authenticate(credentials: Credentials) {
  const hasClientCredentials = !!credentials.authorization || !!credentials?.clientAssertion;

  if (credentials.authorization && credentials?.clientAssertion) {
    throw new InvalidRequestError('The authentication method is invalid');
  }

  if (!hasClientCredentials && !credentials?.clientId) {
    throw new InvalidClientError('The client_id is required field');
  }

  if (!hasClientCredentials) {
    return await getClient({ id: credentials.clientId });
  }

  if (credentials?.authorization) {
    return await authenticateWithPrivateKey(credentials.authorization);
  }

  if (credentials?.clientAssertion) {
    return await authenticateWithPrivateKey(credentials?.clientAssertion);
  }
}
