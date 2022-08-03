import { prisma } from '@drite/accounts-db';

type Payload = prisma.Client & {
  jwks?: prisma.JWK[];
};

export function clientMessageReducer(payload: Payload) {
  return {
    id: payload.id,
    userId: payload.userId,
    contacts: [],
    description: payload.description!,
    grantTypes: payload.grantTypes || [],
    isFirstParty: payload.isFirstParty,
    jwks: {
      keys: payload?.jwks?.map((jwk: any) => jwk.jwk)
    },
    jwksUri: payload.jwksUri!,
    logoUri: payload.logoUri!,
    name: payload.name! || '',
    policyUri: payload.policyUri!,
    redirectUris: payload.redirectUris || [],
    responseTypes: payload.responseTypes || [],
    scope: '',
    secret: payload.secret!,
    softwareId: payload.softwareId!,
    softwareVersion: payload.softwareVersion!,
    tokenEndpointAuthMethod: payload.tokenEndpointAuthMethod!,
    tosUri: payload.tosUri!,
    type: payload.type!,
    uri: payload.uri!,
    refreshTokenRotationType: payload.refreshTokenRotationType as string,
    createdAt: payload.createdAt.toISOString(),
    deletedAt: payload.deletedAt?.toISOString(),
    updatedAt: payload.updatedAt.toISOString()
  };
}
