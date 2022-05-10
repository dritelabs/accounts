// Original file: proto/core.proto

import type { Jwks as _core_Jwks, Jwks__Output as _core_Jwks__Output } from '../core/Jwks';

export interface Client {
  'id'?: (string);
  'userId'?: (string);
  'redirectUris'?: (string)[];
  'tokenEndpointAuthMethod'?: (string);
  'grantTypes'?: (string)[];
  'responseTypes'?: (string)[];
  'applicationType'?: (string);
  'name'?: (string);
  'description'?: (string);
  'secret'?: (string);
  'clientUri'?: (string);
  'logoUri'?: (string);
  'scope'?: (string);
  'contacts'?: (string)[];
  'tosUri'?: (string);
  'policyUri'?: (string);
  'jwksUri'?: (string);
  'jwks'?: (_core_Jwks | null);
  'softwareId'?: (string);
  'softwareVersion'?: (string);
  'isFirstParty'?: (boolean);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Client__Output {
  'id': (string);
  'userId': (string);
  'redirectUris': (string)[];
  'tokenEndpointAuthMethod': (string);
  'grantTypes': (string)[];
  'responseTypes': (string)[];
  'applicationType': (string);
  'name': (string);
  'description': (string);
  'secret': (string);
  'clientUri': (string);
  'logoUri': (string);
  'scope': (string);
  'contacts': (string)[];
  'tosUri': (string);
  'policyUri': (string);
  'jwksUri': (string);
  'jwks': (_core_Jwks__Output | null);
  'softwareId': (string);
  'softwareVersion': (string);
  'isFirstParty': (boolean);
  'createdAt': (string);
  'updatedAt': (string);
}
