import * as jose from 'jose';

export async function importJWK(jwk: any) {
  return jose.importJWK(jwk);
}
