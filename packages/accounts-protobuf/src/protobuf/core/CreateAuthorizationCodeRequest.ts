// Original file: proto/core.proto


export interface CreateAuthorizationCodeRequest {
  'clientId'?: (string);
  'sub'?: (string);
  'codeChallenge'?: (string);
  'codeChallengeMethod'?: (string);
  'redirectUri'?: (string);
  'scope'?: (string);
  'exp'?: (string);
  'aud'?: (string)[];
}

export interface CreateAuthorizationCodeRequest__Output {
  'clientId': (string);
  'sub': (string);
  'codeChallenge': (string);
  'codeChallengeMethod': (string);
  'redirectUri': (string);
  'scope': (string);
  'exp': (string);
  'aud': (string)[];
}
