import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { PublicJWK } from "@driten/accounts-protobuf/dist/protobuf/core/PublicJWK";

export const addJwkToClient: AccountHandlers["AddJWKToClient"] = async (
  call,
  callback
) => {
  try {
    const updated = await client.client.update({
      where: {
        id: call.request.clientId,
      },
      include: {
        jwks: true,
      },
      data: {
        jwks: {
          create: {
            id: call.request.jwk?.kid,
            jwk: call.request.jwk as any,
          },
        },
        jwksUri: null,
        tokenEndpointAuthMethod: "private_key_jwt",
      },
    });

    callback(null, {
      id: updated.id,
      userId: updated.userId,
      contacts: [],
      description: updated.description!,
      grantTypes: updated.grantTypes || [],
      isFirstParty: updated.isFirstParty,
      jwks: {
        keys: updated.jwks.map((jwk) => jwk.jwk as PublicJWK),
      },
      jwksUri: updated.jwksUri!,
      logoUri: updated.logoUri!,
      name: updated.name! || "",
      policyUri: updated.policyUri!,
      redirectUris: updated.redirectUris || [],
      responseTypes: updated.responseTypes || [],
      scope: "",
      secret: updated.secret!,
      softwareId: updated.softwareId!,
      softwareVersion: updated.softwareVersion!,
      tokenEndpointAuthMethod: updated.tokenEndpointAuthMethod!,
      tosUri: updated.tosUri!,
      type: updated.type!,
      uri: updated.uri!,
      refreshTokenRotationType: updated.refreshTokenRotationType as string,
      createdAt: updated.createdAt.toISOString(),
      deletedAt: updated.deletedAt?.toISOString(),
      updatedAt: updated.updatedAt.toISOString(),
    });
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
