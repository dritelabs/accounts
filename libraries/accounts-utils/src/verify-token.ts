import * as jose from 'jose';
import { GetKeyFunction } from 'jose/dist/types/types';

export type JWTVerifyOptions = jose.JWTVerifyOptions & {
  jwksUri?: string;
  jwks?: any;
};

export function verifyToken(token: string, options: JWTVerifyOptions) {
  let jwks: GetKeyFunction<jose.JWSHeaderParameters, jose.FlattenedJWSInput>;

  if (!options.jwks && !options.jwksUri) {
    throw new Error('Invalid options');
  }

  if (options.jwks) {
    jwks = jose.createLocalJWKSet(options.jwks);
  }

  if (options.jwksUri) {
    const url = new URL(options.jwksUri);

    jwks = jose.createRemoteJWKSet(url);
  }

  return jose.jwtVerify(token, jwks!, {
    typ: options.typ,
    algorithms: ['RS256'],
    issuer: options.issuer,
    audience: options.audience,
    subject: options.subject
  });
}
