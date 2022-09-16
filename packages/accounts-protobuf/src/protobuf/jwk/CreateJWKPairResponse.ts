// Original file: proto/jwk.proto

import type { PrivateJWK as _core_PrivateJWK, PrivateJWK__Output as _core_PrivateJWK__Output } from '../core/PrivateJWK';
import type { PublicJWK as _core_PublicJWK, PublicJWK__Output as _core_PublicJWK__Output } from '../core/PublicJWK';

export interface CreateJWKPairResponse {
  'privateKey'?: (_core_PrivateJWK | null);
  'publicKey'?: (_core_PublicJWK | null);
}

export interface CreateJWKPairResponse__Output {
  'privateKey': (_core_PrivateJWK__Output | null);
  'publicKey': (_core_PublicJWK__Output | null);
}
