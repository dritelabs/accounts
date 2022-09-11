import { InvalidClientError } from '@dritelabs/accounts-errors';
import { client } from '../prisma';

export async function authenticateWithNone(clientId: string) {
  const found = await client.client.findFirst({
    where: {
      id: clientId
    }
  });

  if (!found) {
    throw new InvalidClientError('The client_id is invalid');
  }

  return found;
}
