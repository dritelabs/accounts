import { extendType, list, nonNull } from 'nexus';

import { client } from './client';
import { getClientArgs } from './get-client-args';

export const clientQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('client', {
      type: client,
      args: getClientArgs,
      resolve(_, args, context) {
        return context.dataSources.clientAPI.getClient(args.id);
      }
    });

    t.field('clients', {
      type: nonNull(list(client)),
      resolve(_, __, context) {
        return context.dataSources.clientAPI.listClients();
      }
    });
  }
});
