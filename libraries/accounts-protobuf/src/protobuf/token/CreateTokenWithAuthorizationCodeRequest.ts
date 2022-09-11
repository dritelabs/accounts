// Original file: proto/token.proto


export interface CreateTokenWithAuthorizationCodeRequest {
  'clientId'?: (string);
  'code'?: (string);
  'codeVerifier'?: (string);
  'clientCredentials'?: (string);
  'clientAssertion'?: (string);
  'clientAssertionType'?: (string);
  'grantType'?: (string);
  'redirectUri'?: (string);
}

export interface CreateTokenWithAuthorizationCodeRequest__Output {
  'clientId': (string);
  'code': (string);
  'codeVerifier': (string);
  'clientCredentials': (string);
  'clientAssertion': (string);
  'clientAssertionType': (string);
  'grantType': (string);
  'redirectUri': (string);
}
