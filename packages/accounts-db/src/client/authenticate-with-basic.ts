import { decodeBasic } from '@dritelabs/accounts-utils';
import { client } from '../prisma';

export async function authenticateWithBasic(authorization: string) {
  const decoded = decodeBasic(authorization);

  if (!decoded) {
    return null;
  }

  const found = await client.client.findFirst({
    where: {
      id: decoded.clientId
    }
  });

  if (!found) {
    return null;
  }

  if (found.secret !== decoded.clientSecret) {
    return null;
  }

  return found;
}
