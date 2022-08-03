import { base64URLEncode } from './base64-url-encode';
import { sha256 } from './sha256';

export function codeChallenge(codeVerifier: string, method?: 'plain' | 'S256') {
  if (method === 'plain') {
    return codeVerifier;
  }

  return base64URLEncode(sha256(codeVerifier));
}
