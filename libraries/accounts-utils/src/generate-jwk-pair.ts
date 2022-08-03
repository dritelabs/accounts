import * as jose from 'jose';
import { cuid } from './cuid';

export async function generateJWKPair() {
  const { publicKey, privateKey } = await jose.generateKeyPair('RS256');
  const privateJWK = await jose.exportJWK(privateKey);
  const publicJWK = await jose.exportJWK(publicKey);
  const kid = cuid();

  privateJWK.kid = kid;
  privateJWK.alg = 'RS256';
  privateJWK.use = 'sig';
  publicJWK.kid = kid;
  publicJWK.alg = 'RS256';
  publicJWK.use = 'sig';

  return { privateKey: privateJWK, publicKey: publicJWK };
}
