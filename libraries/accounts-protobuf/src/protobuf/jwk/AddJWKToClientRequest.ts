// Original file: proto/jwk.proto

import type {
  PublicJWK as _core_PublicJWK,
  PublicJWK__Output as _core_PublicJWK__Output
} from '../core/PublicJWK';

export interface AddJWKToClientRequest {
  clientId?: string;
  jwk?: _core_PublicJWK | null;
}

export interface AddJWKToClientRequest__Output {
  clientId: string;
  jwk: _core_PublicJWK__Output | null;
}
