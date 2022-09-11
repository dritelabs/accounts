// Original file: proto/token.proto


export interface TokenResponse {
  'accessToken'?: (string);
  'expiresIn'?: (number);
  'idToken'?: (string);
  'refreshToken'?: (string);
  'scope'?: (string);
  'tokenType'?: (string);
}

export interface TokenResponse__Output {
  'accessToken': (string);
  'expiresIn': (number);
  'idToken': (string);
  'refreshToken': (string);
  'scope': (string);
  'tokenType': (string);
}
