import { extendType } from 'nexus';

import { addJWKToClientArgs } from './add-jwk-to-client-args';
import { client } from './client';
import { createClientArgs } from './create-client-args';
import { deleteClientArgs } from './delete-client-args';
import { updateClientArgs } from './update-client-args';
import { updateClientSecretArgs } from './update-client-secret-args';

export const clientMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('addJWKToClient', {
      type: client,
      args: addJWKToClientArgs,
      async resolve(_, args, ctx) {
        const client = await ctx.dataSources.clientAPI.addJWKToClient(args.input);

        return {
          ...client
        };
      }
    });

    t.field('createClient', {
      type: client,
      args: createClientArgs,
      async resolve(_, args, ctx) {
        const client = await ctx.dataSources.clientAPI.createClient(args.input);

        return {
          ...client
        };
      }
    });

    t.field('deleteClient', {
      type: client,
      args: deleteClientArgs,
      async resolve(_, args, ctx) {
        const client = await ctx.dataSources.clientAPI.deleteClient(args.id!);

        return {
          ...client
        };
      }
    });

    t.field('updateClient', {
      type: client,
      args: updateClientArgs,
      async resolve(_, args, ctx) {
        const client = await ctx.dataSources.clientAPI.updateClient(args.input);

        return {
          ...client
        };
      }
    });

    t.field('updateClientSecret', {
      type: client,
      args: updateClientSecretArgs,
      async resolve(_, args, ctx) {
        const client = await ctx.dataSources.clientAPI.updateClientSecret(args.input);

        return {
          ...client
        };
      }
    });
  }
});
