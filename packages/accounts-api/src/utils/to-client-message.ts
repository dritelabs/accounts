import { getTime } from "date-fns";
import { prisma } from "@driten/accounts-db";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import { Client } from "@driten/accounts-protobuf/generated/core_pb";

export function toClientMessage(payload: prisma.Client) {
  const response = new Client();
  const jwks = Struct.fromJavaScript(payload.jwks as any);

  response
    .setApplicationType(payload.application_type!)
    .setClientUri(payload.client_uri!)
    .setContactList(payload.contacts)
    .setCreatedAt(getTime(payload.created_at))
    .setDescription(payload.description!)
    .setGrantTypeList(payload.grant_types)
    .setId(payload.id)
    .setJwks(jwks)
    .setJwksUri(payload.jwks_uri!)
    .setLogoUri(payload.logo_uri!)
    .setName(payload.name!)
    .setPolicyUri(payload.policy_uri!)
    .setRedirectUriList(payload.redirect_uris)
    .setResponseTypeList(payload.response_types)
    // .setScope()
    .setSecret(payload.secret!)
    .setSoftwareId(payload.software_id!)
    .setSoftwareVersion(payload.software_version!)
    .setTokenEndpointAuthMethod(payload.token_endpoint_auth_method!)
    .setTosUri(payload.tos_uri!)
    .setUserId(payload.user_id)
    .setUpdatedAt(getTime(payload.updated_at));

  return response;
}
