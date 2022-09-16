// Original file: proto/token.proto


export interface RefreshTokenRequest {
  'clientId'?: (string);
  'clientCredentials'?: (string);
  'clientAssertion'?: (string);
  'clientAssertionType'?: (string);
  'grantType'?: (string);
  'refreshToken'?: (string);
}

export interface RefreshTokenRequest__Output {
  'clientId': (string);
  'clientCredentials': (string);
  'clientAssertion': (string);
  'clientAssertionType': (string);
  'grantType': (string);
  'refreshToken': (string);
}
