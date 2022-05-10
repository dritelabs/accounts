// Original file: proto/core.proto

import type { Scope as _core_Scope, Scope__Output as _core_Scope__Output } from '../core/Scope';

export interface ListScopesResponse {
  'scopes'?: (_core_Scope)[];
  'nextPageToken'?: (string);
}

export interface ListScopesResponse__Output {
  'scopes': (_core_Scope__Output)[];
  'nextPageToken': (string);
}
