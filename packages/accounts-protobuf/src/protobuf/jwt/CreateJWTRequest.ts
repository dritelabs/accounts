// Original file: proto/jwt.proto

import type { AddressClaim as _jwt_AddressClaim, AddressClaim__Output as _jwt_AddressClaim__Output } from '../jwt/AddressClaim';

export interface CreateJWTRequest {
  'aud'?: (string)[];
  'acr'?: (string);
  'amr'?: (string);
  'address'?: (_jwt_AddressClaim | null);
  'authTime'?: (string);
  'birthdate'?: (string);
  'clientId'?: (string);
  'codeChallenge'?: (string);
  'codeChallengeMethod'?: (string);
  'exp'?: (string);
  'email'?: (string);
  'emailVerified'?: (boolean);
  'familyName'?: (string);
  'gender'?: (string);
  'givenName'?: (string);
  'iss'?: (string);
  'iat'?: (number);
  'jti'?: (string);
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
  'redirectUri'?: (string);
  'sub'?: (string);
  'scope'?: (string);
  'typ'?: (string);
  'website'?: (string);
  'zoneinfo'?: (string);
}

export interface CreateJWTRequest__Output {
  'aud': (string)[];
  'acr': (string);
  'amr': (string);
  'address': (_jwt_AddressClaim__Output | null);
  'authTime': (string);
  'birthdate': (string);
  'clientId': (string);
  'codeChallenge': (string);
  'codeChallengeMethod': (string);
  'exp': (string);
  'email': (string);
  'emailVerified': (boolean);
  'familyName': (string);
  'gender': (string);
  'givenName': (string);
  'iss': (string);
  'iat': (number);
  'jti': (string);
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
  'redirectUri': (string);
  'sub': (string);
  'scope': (string);
  'typ': (string);
  'website': (string);
  'zoneinfo': (string);
}
