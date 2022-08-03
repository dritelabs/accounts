// Original file: proto/core.proto

export interface Profile {
  id?: string;
  userId?: string;
  birthdate?: string;
  firstName?: string;
  gender?: string;
  locale?: string;
  lastName?: string;
  middleName?: string;
  nickname?: string;
  profile?: string;
  picture?: string;
  user?: string;
  website?: string;
  zoneinfo?: string;
  createdAt?: string;
  deletedAt?: string;
  updatedAt?: string;
}

export interface Profile__Output {
  id: string;
  userId: string;
  birthdate: string;
  firstName: string;
  gender: string;
  locale: string;
  lastName: string;
  middleName: string;
  nickname: string;
  profile: string;
  picture: string;
  user: string;
  website: string;
  zoneinfo: string;
  createdAt: string;
  deletedAt: string;
  updatedAt: string;
}
