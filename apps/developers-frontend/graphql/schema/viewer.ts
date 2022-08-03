import { extendType, objectType, stringArg } from 'nexus';

export const viewer = objectType({
  name: 'Viewer',
  definition(t) {
    t.string('id');
  }
});

export const viewerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('viewer', {
      type: viewer
    });
  }
});
