import { client, prisma } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { PublicJWK } from "@driten/accounts-protobuf/dist/protobuf/core/PublicJWK";
import { withAuth } from "../utils/with-auth";

export const listClients = withAuth<AccountHandlers["ListClients"]>(
  ["clients"],
  async (call, callback) => {
    try {
      const metadata = call.metadata.getMap();
      const filter = new URLSearchParams(metadata?.filter as string);

      let where: prisma.Prisma.ScopeWhereInput = {};

      if (filter.getAll("names")?.length) {
        where = {
          ...where,
          name: {
            in: filter.getAll("names"),
          },
        };
      }

      const found = await client.client.findMany({
        where: {
          deletedAt: null,
        },
        include: {
          jwks: true,
        },
      });

      callback(null, {
        clients: found.map((item) => ({
          id: item.id,
          userId: item.userId,
          contacts: item.contacts,
          description: item.description!,
          grantTypes: item.grantTypes,
          isFirstParty: item.isFirstParty,
          jwks: {
            keys: item.jwks.map((jwk) => jwk.jwk as PublicJWK),
          },
          jwksUri: item.jwksUri!,
          logoUri: item.logoUri!,
          name: item.name!,
          policyUri: item.policyUri!,
          publicKeysConfiguration: item.publicKeysConfiguration as string,
          redirectUris: item.redirectUris,
          responseTypes: item.responseTypes,
          scope: "",
          secret: item.secret!,
          softwareId: item.softwareId!,
          softwareVersion: item.softwareVersion!,
          tokenEndpointAuthMethod: item.tokenEndpointAuthMethod!,
          tosUri: item.tosUri!,
          type: item.type!,
          uri: item.uri!,
          refreshTokenRotationType: item.refreshTokenRotationType as string,
          createdAt: item.createdAt.toISOString(),
          deletedAt: item.deletedAt?.toISOString(),
          updatedAt: item.updatedAt.toISOString(),
        })),
        nextPageToken: "",
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
