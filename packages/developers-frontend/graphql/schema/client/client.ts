import { objectType } from "nexus";

export const client = objectType({
  name: "Client",
  definition(t) {
    t.string("id");
    t.string("type");
    t.string("uri");
    t.string("createdAt");
    t.string("description");
    t.list.string("grantTypes");
    t.boolean("isFirstParty");
    t.string("logoUri");
    t.string("jwksUri");
    t.string("name");
    t.string("policyUri");
    t.string("publicKeysConfiguration");
    t.list.string("redirectUris");
    t.list.string("responseTypes");
    t.string("scope");
    t.string("secret");
    t.string("softwareId");
    t.string("softwareVersion");
    t.string("tokenEndpointAuthMethod");
    t.string("tosUri");
    t.string("updatedAt");
    t.string("userId");
    t.list.string("contacts");
    t.string("refreshTokenRotationType");
    t.jsonObject("jwks");
  },
});
