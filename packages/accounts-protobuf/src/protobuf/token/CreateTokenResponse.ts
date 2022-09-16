// Original file: proto/token.proto


export interface CreateTokenResponse {
  'accessToken'?: (string);
  'expiresIn'?: (number);
  'idToken'?: (string);
  'refreshToken'?: (string);
  'scope'?: (string);
  'tokenType'?: (string);
}

export interface CreateTokenResponse__Output {
  'accessToken': (string);
  'expiresIn': (number);
  'idToken': (string);
  'refreshToken': (string);
  'scope': (string);
  'tokenType': (string);
}
