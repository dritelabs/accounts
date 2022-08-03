import { extendType } from 'nexus';

import { client } from './client/client';
import { createClientArgs } from './client/create-client-args';

export const mutation = extendType({
  type: 'Mutation',
  definition(t) {}
});
