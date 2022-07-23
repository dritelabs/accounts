import * as jose from "jose";

export async function decodeToken(token: string) {
  return jose.decodeJwt(token);
}
