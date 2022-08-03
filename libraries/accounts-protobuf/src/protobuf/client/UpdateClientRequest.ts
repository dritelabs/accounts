// Original file: proto/client.proto

export interface UpdateClientRequest {
  id?: string;
  contacts?: string[];
  description?: string;
  grantTypes?: string[];
  jwksUri?: string;
  logoUri?: string;
  name?: string;
  policyUri?: string;
  publicKeysConfiguration?: string;
  redirectUris?: string[];
  responseTypes?: string[];
  refreshTokenRotationType?: string;
  softwareId?: string;
  softwareVersion?: string;
  tosUri?: string;
  tokenEndpointAuthMethod?: string;
  uri?: string;
}

export interface UpdateClientRequest__Output {
  id: string;
  contacts: string[];
  description: string;
  grantTypes: string[];
  jwksUri: string;
  logoUri: string;
  name: string;
  policyUri: string;
  publicKeysConfiguration: string;
  redirectUris: string[];
  responseTypes: string[];
  refreshTokenRotationType: string;
  softwareId: string;
  softwareVersion: string;
  tosUri: string;
  tokenEndpointAuthMethod: string;
  uri: string;
}
