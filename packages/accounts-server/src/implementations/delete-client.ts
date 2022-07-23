import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";

export const deleteClient: AccountHandlers["DeleteClient"] = async (
  call,
  callback
) => {
  try {
    const deleted = await client.client.delete({
      where: { id: call.request.id },
      include: {
        jwks: true,
      },
    });

    callback(null, {
      id: deleted.id,
      userId: deleted.userId,
      contacts: [],
      description: deleted.description!,
      grantTypes: deleted.grantTypes || [],
      isFirstParty: deleted.isFirstParty,
      jwks: JSON.stringify({
        keys: deleted.jwks.map((jwk) => jwk.jwk),
      }) as any,
      jwksUri: deleted.jwksUri!,
      logoUri: deleted.logoUri!,
      name: deleted.name! || "",
      policyUri: deleted.policyUri!,
      redirectUris: deleted.redirectUris || [],
      responseTypes: deleted.responseTypes || [],
      scope: "",
      secret: deleted.secret!,
      softwareId: deleted.softwareId!,
      softwareVersion: deleted.softwareVersion!,
      tokenEndpointAuthMethod: deleted.tokenEndpointAuthMethod!,
      tosUri: deleted.tosUri!,
      type: deleted.type!,
      uri: deleted.uri!,
      refreshTokenRotationType: deleted.refreshTokenRotationType as string,
      createdAt: deleted.createdAt.toISOString(),
      deletedAt: deleted.deletedAt?.toISOString(),
      updatedAt: deleted.updatedAt.toISOString(),
    });
  } catch (e) {
    console.log(e);

    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
