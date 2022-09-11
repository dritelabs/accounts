import { InvalidClientError } from '@dritelabs/accounts-errors';
import { decodeBasic } from '@dritelabs/accounts-utils';
import { client } from '../prisma';

export async function authenticateWithBasic(authorization: string) {
  const decoded = decodeBasic(authorization);

  if (!decoded) {
    throw new InvalidClientError('The authentication method is invalid');
  }

  const found = await client.client.findFirst({
    where: {
      id: decoded.clientId
    }
  });

  if (!found) {
    throw new InvalidClientError('The authentication method is invalid');
  }

  if (found.secret !== decoded.clientSecret) {
    throw new InvalidClientError('The authentication method is invalid');
  }

  return found;
}
