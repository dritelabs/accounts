import { inputObjectType } from "nexus";

const createClientInput = inputObjectType({
  name: "CreateClientInput",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("description");
    t.nonNull.string("type");
  },
});

export const createClientArgs = {
  input: createClientInput,
};
