// Original file: proto/core.proto

import type { JWKS as _core_JWKS, JWKS__Output as _core_JWKS__Output } from '../core/JWKS';

export interface Client {
  id?: string;
  userId?: string;
  contacts?: string[];
  description?: string;
  grantTypes?: string[];
  isFirstParty?: boolean;
  jwks?: _core_JWKS | null;
  jwksUri?: string;
  logoUri?: string;
  name?: string;
  policyUri?: string;
  publicKeysConfiguration?: string;
  redirectUris?: string[];
  responseTypes?: string[];
  refreshTokenRotationType?: string;
  secret?: string;
  scope?: string;
  softwareId?: string;
  softwareVersion?: string;
  tosUri?: string;
  tokenEndpointAuthMethod?: string;
  type?: string;
  uri?: string;
  createdAt?: string;
  deletedAt?: string;
  updatedAt?: string;
}

export interface Client__Output {
  id: string;
  userId: string;
  contacts: string[];
  description: string;
  grantTypes: string[];
  isFirstParty: boolean;
  jwks: _core_JWKS__Output | null;
  jwksUri: string;
  logoUri: string;
  name: string;
  policyUri: string;
  publicKeysConfiguration: string;
  redirectUris: string[];
  responseTypes: string[];
  refreshTokenRotationType: string;
  secret: string;
  scope: string;
  softwareId: string;
  softwareVersion: string;
  tosUri: string;
  tokenEndpointAuthMethod: string;
  type: string;
  uri: string;
  createdAt: string;
  deletedAt: string;
  updatedAt: string;
}
