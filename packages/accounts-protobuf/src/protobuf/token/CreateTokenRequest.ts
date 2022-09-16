// Original file: proto/token.proto


export interface CreateTokenRequest {
  'clientId'?: (string);
  'code'?: (string);
  'codeVerifier'?: (string);
  'clientCredentials'?: (string);
  'clientAssertion'?: (string);
  'clientAssertionType'?: (string);
  'grantType'?: (string);
  'refreshToken'?: (string);
  'redirectUri'?: (string);
  'resource'?: (string)[];
  'scope'?: (string);
}

export interface CreateTokenRequest__Output {
  'clientId': (string);
  'code': (string);
  'codeVerifier': (string);
  'clientCredentials': (string);
  'clientAssertion': (string);
  'clientAssertionType': (string);
  'grantType': (string);
  'refreshToken': (string);
  'redirectUri': (string);
  'resource': (string)[];
  'scope': (string);
}
