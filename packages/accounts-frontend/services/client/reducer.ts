import { Client } from "@driten/accounts-protobuf/dist/protobuf/core/Client";

export function reducer(payload: Client) {
  return {
    application_type: payload.type,
    client_id: payload.id,
    client_secret: payload.secret,
    client_id_issued_at: payload.createdAt,
    client_secret_expires_at: 0,
    client_name: payload.name,
    client_description: payload.description,
    client_uri: payload.uri,
    grant_types: payload.grantTypes,
    contacts: payload.contacts,
    is_first_party: payload.isFirstParty,
    jwks_uri: payload.jwksUri,
    jwks: payload.jwks,
    logo_uri: payload.logoUri,
    policy_uri: payload.policyUri,
    public_keys_configuration: payload.publicKeysConfiguration,
    redirect_uris: payload.redirectUris,
    response_types: payload.responseTypes,
    refresh_token_rotation_type: payload.refreshTokenRotationType,
    scope: payload.scope,
    software_id: payload.softwareId,
    software_version: payload.softwareVersion,
    token_endpoint_auth_method: payload.tokenEndpointAuthMethod,
    tos_uri: payload.tosUri,
    user_id: payload.userId,
  };
}
