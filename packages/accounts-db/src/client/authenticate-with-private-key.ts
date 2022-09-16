import { InvalidClientError } from '@dritelabs/accounts-errors';
import { decodeToken, verifyToken } from '@dritelabs/accounts-utils';
import { getAuthorizationServerMetadata } from '../metadata/get-authorization-server-metadata';
import { client } from '../prisma';

export async function authenticateWithPrivateKey(authorization: string) {
  const decoded = await decodeToken(authorization);

  const found = await client.client.findFirst({
    where: {
      id: decoded.sub
    },
    include: {
      jwks: true
    }
  });

  if (!found) {
    throw new InvalidClientError('The authentication method is invalid');
  }

  const metadata = await getAuthorizationServerMetadata();

  await verifyToken(authorization, {
    issuer: found.uri!,
    audience: metadata.issuer,
    jwks: found.publicKeysConfiguration === 'local' ? found.jwks : undefined,
    jwksUri: found.publicKeysConfiguration === 'remote' ? found.jwksUri! : undefined
  }).catch((err) => {
    throw new InvalidClientError(err.message);
  });

  return found;
}
