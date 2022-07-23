import * as jose from "jose";

import { cuid } from "./cuid";

interface SignTokenOptions {
  [x: string]: any;
  audience: string | string[];
  issuer: string;
  subject: string;
  exp: string | number;
  typ?: string;
  key: jose.KeyLike | Uint8Array;
}

export async function signToken({
  audience,
  exp,
  issuer,
  key,
  subject,
  typ,
  ...claims
}: SignTokenOptions) {
  return new jose.SignJWT(claims)
    .setProtectedHeader({
      alg: "RS256",
      typ,
    })
    .setIssuer(issuer)
    .setExpirationTime(`${exp}s`)
    .setAudience(audience)
    .setSubject(subject)
    .setIssuedAt()
    .setJti(cuid())
    .sign(key);
}
