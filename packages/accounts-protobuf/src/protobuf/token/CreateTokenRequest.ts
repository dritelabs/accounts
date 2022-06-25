// Original file: proto/token.proto


export interface CreateTokenRequest {
  'aud'?: (string)[];
  'clientId'?: (string);
  'exp'?: (string);
  'scope'?: (string);
  'sub'?: (string);
  'typ'?: (string);
}

export interface CreateTokenRequest__Output {
  'aud': (string)[];
  'clientId': (string);
  'exp': (string);
  'scope': (string);
  'sub': (string);
  'typ': (string);
}
