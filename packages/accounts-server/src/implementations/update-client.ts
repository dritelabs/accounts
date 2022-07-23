import { client, prisma } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { PublicJWK } from "@driten/accounts-protobuf/dist/protobuf/core/PublicJWK";
import { withAuth } from "../utils/with-auth";

export const updateClient = withAuth<AccountHandlers["UpdateClient"]>(
  ["clients"],
  async (call, callback) => {
    try {
      const updated = await client.client.update({
        where: {
          id: call.request.id,
        },
        include: {
          jwks: true,
        },
        data: {
          description: call.request?.description || undefined,
          grantTypes: call.request?.grantTypes?.length
            ? (call.request?.grantTypes as prisma.GrantType[])
            : undefined,
          // jwks: {
          //   deleteMany: {
          //     clientId: call.request.id,
          //   },
          // },
          jwksUri: call.request?.jwksUri || undefined,
          logoUri: call.request?.logoUri || undefined,
          name: call.request?.name || undefined,
          policyUri: call.request?.policyUri || undefined,
          publicKeysConfiguration:
            (call.request
              ?.publicKeysConfiguration as prisma.PublicKeysConfiguration) ||
            undefined,
          redirectUris: call.request?.redirectUris?.length
            ? call.request?.redirectUris
            : undefined,
          refreshTokenRotationType:
            (call.request
              ?.refreshTokenRotationType as prisma.RefreshTokenRotationType) ||
            undefined,
          responseTypes: call.request?.responseTypes.length
            ? (call.request?.responseTypes as prisma.ResponseType[])
            : undefined,
          softwareId: call.request?.softwareId || undefined,
          softwareVersion: call.request?.softwareVersion || undefined,
          tokenEndpointAuthMethod:
            (call.request
              ?.tokenEndpointAuthMethod as prisma.TokenEndpointAuthMethod) ||
            undefined,
          tosUri: call.request?.tosUri || undefined,
          uri: call.request?.uri || undefined,
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
        publicKeysConfiguration: updated.publicKeysConfiguration as string,
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
  }
);
