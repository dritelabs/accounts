// Original file: proto/core.proto

import type { Scope as _core_Scope, Scope__Output as _core_Scope__Output } from '../core/Scope';

export interface ClientApproval {
  'id'?: (string);
  'userId'?: (string);
  'clientId'?: (string);
  'scopes'?: (_core_Scope)[];
  'createdAt'?: (string);
  'deletedAt'?: (string);
  'updatedAt'?: (string);
}

export interface ClientApproval__Output {
  'id': (string);
  'userId': (string);
  'clientId': (string);
  'scopes': (_core_Scope__Output)[];
  'createdAt': (string);
  'deletedAt': (string);
  'updatedAt': (string);
}
