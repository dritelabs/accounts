import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { makeSchema } from 'nexus';
import * as typeDefs from '~/graphql/schema/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const schema = makeSchema({
  types: typeDefs,
  outputs: {
    schema: join(__dirname, '../../schema.graphql'),
    typegen: join(__dirname, '../../typegen.ts')
  },
  contextType: {
    module: join(__dirname, '../../graphql/context.ts'),
    export: 'Context'
  }
});
