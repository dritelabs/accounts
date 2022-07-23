import { InvalidClientError } from "@driten/accounts-errors";
import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";

export const AuthenticateClientWithBasic: AccountHandlers["AuthenticateClientWithBasic"] =
  async (call, callback) => {
    try {
      const found = await client.client.authenticateWithBasic(
        call.request.credential
      );

      callback(null, {
        id: found.id,
        userId: found.userId,
        contacts: [],
        description: found.description!,
        grantTypes: found.grantTypes || [],
        isFirstParty: found.isFirstParty,
        jwks: found?.jwks?.length
          ? {
              keys: found?.jwks?.map((jwk) => jwk?.jwk as any),
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
      if (e instanceof InvalidClientError) {
        return callback({
          code: grpc.status.INVALID_ARGUMENT,
          message: e.error,
          details: e.error_description,
        });
      }

      callback({
        ...(e as Error),
        code: grpc.status.UNKNOWN,
      });
    }
  };
