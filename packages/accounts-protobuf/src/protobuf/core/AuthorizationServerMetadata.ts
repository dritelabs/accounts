// Original file: proto/core.proto


export interface AuthorizationServerMetadata {
  'issuer'?: (string);
  'authorizationEndpoint'?: (string);
  'tokenEndpoint'?: (string);
  'jwksUri'?: (string);
  'registrationEndpoint'?: (string);
  'userinfoEndpoint'?: (string);
  'scopesSupported'?: (string)[];
  'responseTypesSupported'?: (string)[];
  'responseModes'?: (string)[];
  'grantTypesSupported'?: (string)[];
  'tokenEndpointAuthMethodsSupported'?: (string)[];
  'tokenEndpointAuthSigningAlgValuesSupported'?: (string)[];
  'serviceDocumentation'?: (string);
  'uiLocalesSupported'?: (string)[];
  'opPolicyUri'?: (string);
  'opTosUri'?: (string);
  'revocationEndpoint'?: (string);
  'revocationEndpointAuthMethodsSupported'?: (string)[];
  'introspectionEndpoint'?: (string);
  'introspectionEndpointAuthMethodsSupported'?: (string)[];
  'codeChallengeMethodsSupported'?: (string)[];
}

export interface AuthorizationServerMetadata__Output {
  'issuer': (string);
  'authorizationEndpoint': (string);
  'tokenEndpoint': (string);
  'jwksUri': (string);
  'registrationEndpoint': (string);
  'userinfoEndpoint': (string);
  'scopesSupported': (string)[];
  'responseTypesSupported': (string)[];
  'responseModes': (string)[];
  'grantTypesSupported': (string)[];
  'tokenEndpointAuthMethodsSupported': (string)[];
  'tokenEndpointAuthSigningAlgValuesSupported': (string)[];
  'serviceDocumentation': (string);
  'uiLocalesSupported': (string)[];
  'opPolicyUri': (string);
  'opTosUri': (string);
  'revocationEndpoint': (string);
  'revocationEndpointAuthMethodsSupported': (string)[];
  'introspectionEndpoint': (string);
  'introspectionEndpointAuthMethodsSupported': (string)[];
  'codeChallengeMethodsSupported': (string)[];
}
