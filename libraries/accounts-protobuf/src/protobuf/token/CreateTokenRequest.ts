// Original file: proto/token.proto

export interface CreateTokenRequest {
  authTime?: string;
  acr?: string;
  amr?: string;
  aud?: string[];
  clientId?: string;
  sub?: string;
  scope?: string;
}

export interface CreateTokenRequest__Output {
  authTime: string;
  acr: string;
  amr: string;
  aud: string[];
  clientId: string;
  sub: string;
  scope: string;
}
