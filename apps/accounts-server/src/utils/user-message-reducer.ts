import { prisma } from '@dritelabs/accounts-db';
import { User } from '@dritelabs/accounts-protobuf/dist/protobuf/core/User';

type Payload = prisma.User & {
  addresses: prisma.Address[];
  profile: prisma.Profile | null;
  clientApprovals: (prisma.ClientApproval & {
    scopes: prisma.Scope[];
  })[];
};

export function userMessageReducer(payload: Payload): User {
  return {
    id: payload.id,
    addresses: payload.addresses?.map((address) => ({
      ...address,
      id: address?.id,
      city: address?.city!,
      country: address?.country!,
      createdAt: address?.createdAt?.toISOString(),
      deletedAt: address?.deletedAt?.toISOString(),
      isDefault: address.isDefault,
      line1: address?.line1!,
      line2: address?.line2!,
      mobile: address?.mobile!,
      postalCode: address?.postalCode!,
      region: address?.region!,
      telephone: address?.telephone!,
      updatedAt: address?.updatedAt?.toISOString(),
      userId: address?.userId!
    })),
    clientApprovals: payload.clientApprovals.map((clientApproval) => ({
      ...clientApproval,
      scopes: clientApproval.scopes.map((scope) => ({
        ...scope,
        createdAt: payload.createdAt.toISOString(),
        deletedAt: payload.deletedAt?.toISOString(),
        updatedAt: payload.updatedAt.toISOString()
      })),
      createdAt: payload.createdAt.toISOString(),
      deletedAt: payload.deletedAt?.toISOString(),
      updatedAt: payload.updatedAt.toISOString()
    })),
    email: payload.email,
    emailVerified: payload.emailVerified!,
    password: payload.password,
    phoneNumber: payload.phoneNumber!,
    phoneNumberVerified: payload.phoneNumberVerified!,
    profile: {
      birthdate: payload?.profile?.birthdate?.toISOString(),
      createdAt: payload?.profile?.createdAt.toISOString(),
      deletedAt: payload?.profile?.deletedAt?.toISOString(),
      firstName: payload?.profile?.firstName!,
      gender: payload?.profile?.gender!,
      lastName: payload?.profile?.lastName!,
      locale: payload?.profile?.locale!,
      middleName: payload?.profile?.middleName!,
      nickname: payload?.profile?.nickname!,
      picture: payload?.profile?.picture!,
      profile: payload?.profile?.profile!,
      updatedAt: payload?.profile?.updatedAt.toISOString(),
      website: payload?.profile?.website!,
      zoneinfo: payload?.profile?.zoneinfo!
    },
    username: payload.username!,
    createdAt: payload.createdAt.toISOString(),
    deletedAt: payload.deletedAt?.toISOString(),
    updatedAt: payload.updatedAt.toISOString()
  };
}
