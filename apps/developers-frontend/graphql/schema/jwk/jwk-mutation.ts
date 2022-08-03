import { extendType } from 'nexus';

import { jwkPair } from './jwk';

export const jwkMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createJWKPair', {
      type: jwkPair,
      async resolve(_, __, ctx) {
        const jwkPair = await ctx.dataSources.clientAPI.createJWKPair();

        return {
          ...jwkPair
        };
      }
    });
  }
});
