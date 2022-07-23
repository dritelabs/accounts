// Original file: proto/token.proto

import type { AddressClaim as _token_AddressClaim, AddressClaim__Output as _token_AddressClaim__Output } from '../token/AddressClaim';

export interface CreateJWTRequest {
  'aud'?: (string);
  'address'?: (_token_AddressClaim | null);
  'authTime'?: (string);
  'birthdate'?: (string);
  'exp'?: (string);
  'email'?: (string);
  'emailVerified'?: (boolean);
  'familyName'?: (string);
  'gender'?: (string);
  'givenName'?: (string);
  'iss'?: (string);
  'iat'?: (string);
  'name'?: (string);
  'locale'?: (string);
  'middleName'?: (string);
  'nickname'?: (string);
  'nonce'?: (string);
  'profile'?: (string);
  'picture'?: (string);
  'preferredUsername'?: (string);
  'phoneNumber'?: (string);
  'phoneNumberVerified'?: (boolean);
  'sub'?: (string);
  'website'?: (string);
  'zoneinfo'?: (string);
}

export interface CreateJWTRequest__Output {
  'aud': (string);
  'address': (_token_AddressClaim__Output | null);
  'authTime': (string);
  'birthdate': (string);
  'exp': (string);
  'email': (string);
  'emailVerified': (boolean);
  'familyName': (string);
  'gender': (string);
  'givenName': (string);
  'iss': (string);
  'iat': (string);
  'name': (string);
  'locale': (string);
  'middleName': (string);
  'nickname': (string);
  'nonce': (string);
  'profile': (string);
  'picture': (string);
  'preferredUsername': (string);
  'phoneNumber': (string);
  'phoneNumberVerified': (boolean);
  'sub': (string);
  'website': (string);
  'zoneinfo': (string);
}
