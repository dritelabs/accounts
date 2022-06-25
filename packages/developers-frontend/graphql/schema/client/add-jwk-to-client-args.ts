import { inputObjectType } from "nexus";

const addJWKToClientInput = inputObjectType({
  name: "AddJWKToClientInput",
  definition(t) {
    t.nonNull.string("clientId");
    t.nonNull.jsonObject("jwk");
  },
});

export const addJWKToClientArgs = {
  input: addJWKToClientInput,
};
