// Original file: proto/token.proto


export interface CreateTokenWithClientCredentialsRequest {
  'clientId'?: (string);
  'clientCredentials'?: (string);
  'clientAssertion'?: (string);
  'clientAssertionType'?: (string);
  'grantType'?: (string);
  'resource'?: (string)[];
  'scope'?: (string);
}

export interface CreateTokenWithClientCredentialsRequest__Output {
  'clientId': (string);
  'clientCredentials': (string);
  'clientAssertion': (string);
  'clientAssertionType': (string);
  'grantType': (string);
  'resource': (string)[];
  'scope': (string);
}
