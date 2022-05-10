import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import { AuthorizationServerMetadata } from "@driten/accounts-protobuf/dist/protobuf/core/AuthorizationServerMetadata";
import { Empty } from "@driten/accounts-protobuf/dist/protobuf/core/Empty";
import { client } from "~/lib/client";

export async function get() {
  const response = await getAuthorizationServerMetadata(null);

  return reducer(response);
}

export function reducer(obj: AuthorizationServerMetadata) {
  return {
    issuer: obj.issuer,
    authorization_endpoint: obj.authorizationEndpoint,
    token_endpoint: obj.tokenEndpoint,
    jwks_uri: obj.jwksUri,
    registration_endpoint: obj.registrationEndpoint,
    userinfo_endpoint: obj.userinfoEndpoint,
    scopes_supported: obj.scopesSupported,
    response_types_supported: obj.responseTypesSupported,
    response_modes: obj.responseModes,
    grant_types_supported: obj.grantTypesSupported,
    token_endpoint_auth_methods_supported:
      obj.tokenEndpointAuthMethodsSupported,
    token_endpoint_auth_signing_alg_values_supported:
      obj.tokenEndpointAuthSigningAlgValuesSupported,
    service_documentation: obj.serviceDocumentation,
    ui_locales_supported: obj.uiLocalesSupported,
    op_policy_uri: obj.opPolicyUri,
    op_tos_uri: obj.opTosUri,
    revocation_endpoint: obj.revocationEndpoint,
    revocation_endpoint_auth_methods_supported:
      obj.revocationEndpointAuthMethodsSupported,
    introspection_endpoint: obj.introspectionEndpoint,
    introspection_endpoint_auth_methods_supported:
      obj.introspectionEndpointAuthMethodsSupported,
    code_challenge_methods_supported: obj.codeChallengeMethodsSupported,
  };
}

const getAuthorizationServerMetadata = promisify<
  Empty,
  grpc.Metadata | void,
  AuthorizationServerMetadata
>(client.getAuthorizationServerMetadata.bind(client));
