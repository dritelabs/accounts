// Original file: proto/core.proto

export interface Address {
  id?: string;
  userId?: string;
  city?: string;
  country?: string;
  isDefault?: boolean;
  line1?: string;
  line2?: string;
  mobile?: string;
  postalCode?: string;
  region?: string;
  telephone?: string;
  createdAt?: string;
  deletedAt?: string;
  updatedAt?: string;
}

export interface Address__Output {
  id: string;
  userId: string;
  city: string;
  country: string;
  isDefault: boolean;
  line1: string;
  line2: string;
  mobile: string;
  postalCode: string;
  region: string;
  telephone: string;
  createdAt: string;
  deletedAt: string;
  updatedAt: string;
}
