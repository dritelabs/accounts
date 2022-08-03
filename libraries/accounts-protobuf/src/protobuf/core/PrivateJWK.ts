// Original file: proto/core.proto

export interface PrivateJWK {
  kid?: string;
  p?: string;
  kty?: string;
  q?: string;
  d?: string;
  e?: string;
  use?: string;
  qi?: string;
  dp?: string;
  alg?: string;
  dq?: string;
  n?: string;
}

export interface PrivateJWK__Output {
  kid: string;
  p: string;
  kty: string;
  q: string;
  d: string;
  e: string;
  use: string;
  qi: string;
  dp: string;
  alg: string;
  dq: string;
  n: string;
}
