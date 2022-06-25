import { inputObjectType } from "nexus";

const updateClientInput = inputObjectType({
  name: "UpdateClientInput",
  definition(t) {
    t.nonNull.string("id");
    t.string("uri");
    t.string("description");
    t.list.string("grantTypes");
    t.string("logoUri");
    t.string("jwksUri");
    t.string("name");
    t.string("policyUri");
    t.string("publicKeysConfiguration");
    t.list.string("redirectUris");
    t.list.string("responseTypes");
    t.string("softwareId");
    t.string("softwareVersion");
    t.string("tokenEndpointAuthMethod");
    t.string("tosUri");
    t.list.string("contacts");
    t.string("refreshTokenRotationType");
  },
});

export const updateClientArgs = {
  input: updateClientInput,
};
