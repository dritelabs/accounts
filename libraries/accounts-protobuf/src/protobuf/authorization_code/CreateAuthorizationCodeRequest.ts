// Original file: proto/authorization-code.proto

export interface CreateAuthorizationCodeRequest {
  aud?: string[];
  clientId?: string;
  codeChallenge?: string;
  codeChallengeMethod?: string;
  exp?: string;
  redirectUri?: string;
  sub?: string;
  scope?: string;
}

export interface CreateAuthorizationCodeRequest__Output {
  aud: string[];
  clientId: string;
  codeChallenge: string;
  codeChallengeMethod: string;
  exp: string;
  redirectUri: string;
  sub: string;
  scope: string;
}
