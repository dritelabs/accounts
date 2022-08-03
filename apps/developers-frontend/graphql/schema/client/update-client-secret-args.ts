import { inputObjectType } from 'nexus';

const updateClientSecretInput = inputObjectType({
  name: 'UpdateClientSecretInput',
  definition(t) {
    t.nonNull.string('id');
  }
});

export const updateClientSecretArgs = {
  input: updateClientSecretInput
};
