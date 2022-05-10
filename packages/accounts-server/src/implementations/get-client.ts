import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { Jwks } from "@driten/accounts-protobuf/dist/protobuf/core/Jwks";

export const getClient: AccountHandlers["GetClient"] = async (
  call,
  callback
) => {
  try {
    const found = await client.client.findFirst({
      where: { id: call.request.id },
    });

    if (!found) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: "Client does not exist",
        details: "Client does not exist",
      });
    }

    callback(null, {
      applicationType: found.application_type!,
      clientUri: found.client_uri!,
      contacts: found.contacts,
      createdAt: found.created_at.toISOString(),
      description: found.description!,
      grantTypes: found.grant_types,
      id: found.id,
      isFirstParty: found.is_first_party,
      jwks: found.jwks as Jwks,
      jwksUri: found.jwks_uri!,
      logoUri: found.logo_uri!,
      name: found.name!,
      policyUri: found.policy_uri!,
      redirectUris: found.redirect_uris,
      responseTypes: found.response_types,
      scope: "",
      secret: found.secret!,
      softwareId: found.software_id!,
      softwareVersion: found.software_version!,
      tokenEndpointAuthMethod: found.token_endpoint_auth_method!,
      tosUri: found.tos_uri!,
      updatedAt: found.updated_at.toISOString(),
      userId: found.user_id,
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
