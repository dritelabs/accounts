import { objectType } from 'nexus';

export const jwkPair = objectType({
  name: 'JWKPair',
  definition(t) {
    t.jsonObject('publicKey');
    t.jsonObject('privateKey');
  }
});
