// Original file: proto/core.proto

export interface AuthorizationServerMetadata {
  authorizationEndpoint?: string;
  codeChallengeMethodsSupported?: string[];
  grantTypesSupported?: string[];
  issuer?: string;
  introspectionEndpoint?: string;
  introspectionEndpointAuthMethodsSupported?: string[];
  jwksUri?: string;
  opPolicyUri?: string;
  opTosUri?: string;
  registrationEndpoint?: string;
  responseTypesSupported?: string[];
  responseModes?: string[];
  revocationEndpoint?: string;
  revocationEndpointAuthMethodsSupported?: string[];
  scopesSupported?: string[];
  serviceDocumentation?: string;
  tokenEndpoint?: string;
  tokenEndpointAuthMethodsSupported?: string[];
  tokenEndpointAuthSigningAlgValuesSupported?: string[];
  userinfoEndpoint?: string;
  uiLocalesSupported?: string[];
}

export interface AuthorizationServerMetadata__Output {
  authorizationEndpoint: string;
  codeChallengeMethodsSupported: string[];
  grantTypesSupported: string[];
  issuer: string;
  introspectionEndpoint: string;
  introspectionEndpointAuthMethodsSupported: string[];
  jwksUri: string;
  opPolicyUri: string;
  opTosUri: string;
  registrationEndpoint: string;
  responseTypesSupported: string[];
  responseModes: string[];
  revocationEndpoint: string;
  revocationEndpointAuthMethodsSupported: string[];
  scopesSupported: string[];
  serviceDocumentation: string;
  tokenEndpoint: string;
  tokenEndpointAuthMethodsSupported: string[];
  tokenEndpointAuthSigningAlgValuesSupported: string[];
  userinfoEndpoint: string;
  uiLocalesSupported: string[];
}
