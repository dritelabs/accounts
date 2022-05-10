// Original file: proto/core.proto


export interface CreateTokenRequest {
  'clientId'?: (string);
  'scope'?: (string);
  'sub'?: (string);
  'exp'?: (string);
  'aud'?: (string)[];
  'typ'?: (string);
}

export interface CreateTokenRequest__Output {
  'clientId': (string);
  'scope': (string);
  'sub': (string);
  'exp': (string);
  'aud': (string)[];
  'typ': (string);
}
