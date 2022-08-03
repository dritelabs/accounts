// Original file: proto/core.proto

import type {
  PublicJWK as _core_PublicJWK,
  PublicJWK__Output as _core_PublicJWK__Output
} from '../core/PublicJWK';

export interface JWKS {
  keys?: _core_PublicJWK[];
}

export interface JWKS__Output {
  keys: _core_PublicJWK__Output[];
}
