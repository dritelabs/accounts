import { client, prisma } from '@dritelabs/accounts-db';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';

export const listScopes: AccountHandlers['ListScopes'] = async (call, callback) => {
  try {
    const metadata = call.metadata.getMap();
    const filter = new URLSearchParams(metadata?.filter as string);

    let where: prisma.Prisma.ScopeWhereInput = {};

    if (filter.getAll('names')?.length) {
      where = {
        ...where,
        name: {
          in: filter.getAll('names')
        }
      };
    }

    const found = await client.scope.findMany({
      where
    });

    callback(null, {
      scopes: found.map((item) => ({
        id: item.id,
        description: item.description,
        displayName: item.displayName,
        name: item.name,
        createdAt: item.createdAt.toISOString(),
        deletedAt: item.deletedAt?.toISOString(),
        updatedAt: item.updatedAt.toISOString()
      })),
      nextPageToken: ''
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
