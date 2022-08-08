// Original file: proto/core.proto

import type { Address as _core_Address, Address__Output as _core_Address__Output } from '../core/Address';
import type { ClientApproval as _core_ClientApproval, ClientApproval__Output as _core_ClientApproval__Output } from '../core/ClientApproval';
import type { Profile as _core_Profile, Profile__Output as _core_Profile__Output } from '../core/Profile';

export interface User {
  'id'?: (string);
  'addresses'?: (_core_Address)[];
  'clientApprovals'?: (_core_ClientApproval)[];
  'email'?: (string);
  'emailVerified'?: (boolean);
  'phoneNumber'?: (string);
  'phoneNumberVerified'?: (boolean);
  'profile'?: (_core_Profile | null);
  'password'?: (string);
  'username'?: (string);
  'createdAt'?: (string);
  'deletedAt'?: (string);
  'updatedAt'?: (string);
}

export interface User__Output {
  'id': (string);
  'addresses': (_core_Address__Output)[];
  'clientApprovals': (_core_ClientApproval__Output)[];
  'email': (string);
  'emailVerified': (boolean);
  'phoneNumber': (string);
  'phoneNumberVerified': (boolean);
  'profile': (_core_Profile__Output | null);
  'password': (string);
  'username': (string);
  'createdAt': (string);
  'deletedAt': (string);
  'updatedAt': (string);
}
