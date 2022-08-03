export async function getAuthorizationServerMetadata() {
  // const host = config.authorizationServerIssuerBaseUrl;
  const host = 'http://localhost:3000';

  return {
    authorizationEndpoint: `${host}/authorize`,
    codeChallengeMethodsSupported: ['plain', 'S256'],
    deviceAuthorizationEndpoint: `${host}/device/authorize`,
    end_session_endpoint: `${host}/api/logout`,
    grantTypesSupported: [
      'authorization_code',
      'refresh_token',
      'client_credentials',
      'urn:ietf:params:oauth:grant-type:device_code'
    ],
    issuer: `${host}`,
    introspectionEndpoint: `${host}/api/introspect`,
    introspectionEndpointAuthMethodsSupported: ['client_secret_basic', 'private_key_jwt', 'node'],
    jwksUri: `${host}/api/jwks`,
    opPolicyUri: `${host}/policy`,
    opTosUri: `${host}/tos`,
    registrationEndpoint: `${host}/api/clients`,
    responseTypesSupported: ['code'],
    responseModes: ['query', 'web_message'],
    revocationEndpoint: `${host}/api/revoke`,
    revocationEndpointAuthMethodsSupported: ['client_secret_basic', 'private_key_jwt', 'node'],
    serviceDocumentation: `${host}/service_documentation`,
    scopes_supported: ['openid', 'profile', 'email', 'address', 'phone', 'offline_access', 'device_sso'],
    tokenEndpoint: `${host}/api/token`,
    tokenEndpointAuthMethodsSupported: ['client_secret_basic', 'private_key_jwt', 'none'],
    tokenEndpointAuthSigningAlgValuesSupported: ['RS256'],
    userinfoEndpoint: `${host}/api/userinfo`,
    uiLocalesSupported: ['en-US']
  };
}
