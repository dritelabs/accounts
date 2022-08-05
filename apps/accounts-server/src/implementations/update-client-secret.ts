import { client, prisma } from '@dritelabs/accounts-db';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { randomBytes } from '@dritelabs/accounts-utils';
import { PublicJWK } from '@dritelabs/accounts-protobuf/dist/protobuf/core/PublicJWK';
import { withAuth } from '../lib/with-auth';

export const updateClientSecret = withAuth<AccountHandlers['UpdateClientSecret']>(
  ['clients:read'],
  async (call, callback) => {
    try {
      // const metadata = call.metadata.getMap();

      const updated = await client.client.update({
        where: {
          id: call.request.id
        },
        include: {
          jwks: true
        },
        data: {
          secret: randomBytes(32).toString('hex')
        }
      });

      callback(null, {
        id: updated.id,
        userId: updated.userId,
        contacts: [],
        description: updated.description!,
        grantTypes: updated.grantTypes || [],
        isFirstParty: updated.isFirstParty,
        jwks: {
          keys: updated.jwks.map((jwk) => jwk.jwk as PublicJWK)
        },
        jwksUri: updated.jwksUri!,
        logoUri: updated.logoUri!,
        name: updated.name! || '',
        policyUri: updated.policyUri!,
        publicKeysConfiguration: updated.publicKeysConfiguration as string,
        redirectUris: updated.redirectUris || [],
        responseTypes: updated.responseTypes || [],
        scope: '',
        secret: updated.secret!,
        softwareId: updated.softwareId!,
        softwareVersion: updated.softwareVersion!,
        tokenEndpointAuthMethod: updated.tokenEndpointAuthMethod!,
        tosUri: updated.tosUri!,
        type: updated.type!,
        uri: updated.uri!,
        refreshTokenRotationType: updated.refreshTokenRotationType as string,
        createdAt: updated.createdAt.toISOString(),
        deletedAt: updated.deletedAt?.toISOString(),
        updatedAt: updated.updatedAt.toISOString()
      });
    } catch (e) {
      const error = e as Error;

      console.log(error);

      callback({
        ...error,
        code: grpc.status.UNKNOWN
      });
    }
  }
);
