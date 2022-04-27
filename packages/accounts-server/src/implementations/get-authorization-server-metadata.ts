import { grpc, Empty, Struct } from "@driten/accounts-protobuf";
import { config } from "../config";

export async function getAuthorizationServerMetadata(
  _: grpc.ServerUnaryCall<Empty, Struct>,
  callback: grpc.sendUnaryData<Struct>
) {
  try {
    const host = config.authorizationServerIssuerBaseUrl;

    const response = Struct.fromJavaScript({
      issuer: `${host}`,
      authorization_endpoint: `${host}/authorize`,
      token_endpoint: `${host}/api/token`,
      jwks_uri: `${host}/api/jwks`,
      registration_endpoint: `${host}/api/clients`,
      userinfo_endpoint: `${host}/api/userinfo`,
      scopes_supported: [
        "openid",
        "profile",
        "email",
        "address",
        "phone",
        "offline_access",
      ],
      response_types_supported: ["code"],
      response_modes: [""], // https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html,
      grant_types_supported: ["authorization_code"],
      token_endpoint_auth_methods_supported: [
        "client_secret_basic",
        "private_key_jwt",
      ],
      token_endpoint_auth_signing_alg_values_supported: ["RS256"],
      service_documentation: `${host}/service_documentation`,
      ui_locales_supported: ["en-US"],
      op_policy_uri: `${host}/policy`,
      op_tos_uri: `${host}/tos`,
      revocation_endpoint: `${host}/api/revoke`,
      revocation_endpoint_auth_methods_supported: [
        "client_secret_basic",
        "private_key_jwt",
      ],
      introspection_endpoint: `${host}/api/instropect`,
      introspection_endpoint_auth_methods_supported: [
        "client_secret_basic",
        "private_key_jwt",
      ],
      code_challenge_methods_supported: ["plain", "S256"],
    });

    callback(null, response);
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
