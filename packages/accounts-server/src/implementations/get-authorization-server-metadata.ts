import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { config } from "../config";

export const getAuthorizationServerMetadata: AccountHandlers["GetAuthorizationServerMetadata"] =
  async (_, callback) => {
    try {
      const host = config.authorizationServerIssuerBaseUrl;
      const response = {
        issuer: `${host}`,
        authorizationEndpoint: `${host}/authorize`,
        tokenEndpoint: `${host}/api/token`,
        jwksUri: `${host}/api/jwks`,
        registrationEndpoint: `${host}/api/clients`,
        userinfoEndpoint: `${host}/api/userinfo`,
        scopes_supported: [
          "openid",
          "profile",
          "email",
          "address",
          "phone",
          "offline_access",
        ],
        responseTypesSupported: ["code"],
        responseModes: [""], // https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html,
        grantTypesSupported: ["authorization_code"],
        tokenEndpointAuthMethodsSupported: [
          "client_secret_basic",
          "private_key_jwt",
        ],
        tokenEndpointAuthSigningAlgValuesSupported: ["RS256"],
        serviceDocumentation: `${host}/service_documentation`,
        uiLocalesSupported: ["en-US"],
        opPolicyUri: `${host}/policy`,
        opTosUri: `${host}/tos`,
        revocationEndpoint: `${host}/api/revoke`,
        revocationEndpointAuthMethodsSupported: [
          "client_secret_basic",
          "private_key_jwt",
        ],
        introspectionEndpoint: `${host}/api/instropect`,
        introspectionEndpointAuthMethodsSupported: [
          "client_secret_basic",
          "private_key_jwt",
        ],
        codeChallengeMethodsSupported: ["plain", "S256"],
      };

      callback(null, response);
    } catch (e) {
      const error = e as Error;

      callback({
        ...error,
        code: grpc.status.UNKNOWN,
      });
    }
  };
