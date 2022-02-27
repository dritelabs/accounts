import * as jose from "jose";

export async function decode(jwt: string) {
  return jose.decodeJwt(jwt);
}
