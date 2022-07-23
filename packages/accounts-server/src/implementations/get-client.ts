import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { PublicJWK } from "@driten/accounts-protobuf/dist/protobuf/core/PublicJWK";

export const getClient: AccountHandlers["GetClient"] = async (
  call,
  callback
) => {
  try {
    const found = await client.client.findFirst({
      where: { id: call.request.id },
      include: {
        jwks: true,
      },
    });

    if (!found) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: "Client does not exist",
        details: "Client does not exist",
      });
    }

    callback(null, {
      id: found.id,
      userId: found.userId,
      contacts: [],
      description: found.description!,
      grantTypes: found.grantTypes || [],
      isFirstParty: found.isFirstParty,
      jwks: found?.jwks?.length
        ? {
            keys: found?.jwks?.map((jwk) => jwk?.jwk as PublicJWK),
          }
        : undefined,
      jwksUri: found.jwksUri!,
      logoUri: found.logoUri!,
      name: found.name! || "",
      policyUri: found.policyUri!,
      publicKeysConfiguration: found.publicKeysConfiguration as string,
      redirectUris: found.redirectUris || [],
      responseTypes: found.responseTypes || [],
      scope: "",
      secret: found.secret!,
      softwareId: found.softwareId!,
      softwareVersion: found.softwareVersion!,
      tokenEndpointAuthMethod: found.tokenEndpointAuthMethod!,
      tosUri: found.tosUri!,
      type: found.type!,
      uri: found.uri!,
      refreshTokenRotationType: found.refreshTokenRotationType as string,
      createdAt: found.createdAt.toISOString(),
      deletedAt: found.deletedAt?.toISOString(),
      updatedAt: found.updatedAt.toISOString(),
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
