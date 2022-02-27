import * as jose from "jose";

export interface Options {
  issuer?: string;
  audience?: string | string[];
  typ?: string;
  subject?: string;
}

export async function verifyWithLocalJKWS(
  jwt: string,
  jwks: any,
  options: Options
) {
  const JWKS = jose.createLocalJWKSet(jwks);

  return jose.jwtVerify(jwt, JWKS, {
    typ: options.typ,
    algorithms: ["RS256"],
    issuer: options.issuer,
    audience: options.audience,
    subject: options.subject,
  });
}

export async function verify(jwt: string, jwksUri: string, options: Options) {
  const url = new URL(jwksUri);
  const JWKS = jose.createRemoteJWKSet(url);

  return jose.jwtVerify(jwt, JWKS, {
    typ: options.typ,
    algorithms: ["RS256"],
    issuer: options.issuer,
    audience: options.audience,
    subject: options.subject,
  });
}
