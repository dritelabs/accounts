import { client } from '@dritelabs/accounts-db';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';

export const getUser: AccountHandlers['GetUser'] = async (call, callback) => {
  try {
    const found = await client.user.findFirst({
      where: { id: call.request.id },
      include: {
        addresses: true,
        profile: true
      }
    });

    if (!found) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: 'User does not exist',
        details: 'User does not exist'
      });
    }

    callback(null, {
      id: found.id,
      addresses: found.addresses?.map((address) => ({
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
      email: found.email,
      emailVerified: found.emailVerified!,
      password: found.password,
      phoneNumber: found.phoneNumber!,
      phoneNumberVerified: found.phoneNumberVerified!,
      profile: {
        birthdate: found?.profile?.birthdate?.toISOString(),
        createdAt: found?.profile?.createdAt.toISOString(),
        deletedAt: found?.profile?.deletedAt?.toISOString(),
        firstName: found?.profile?.firstName!,
        gender: found?.profile?.gender!,
        lastName: found?.profile?.lastName!,
        locale: found?.profile?.locale!,
        middleName: found?.profile?.middleName!,
        nickname: found?.profile?.nickname!,
        picture: found?.profile?.picture!,
        profile: found?.profile?.profile!,
        updatedAt: found?.profile?.updatedAt.toISOString(),
        website: found?.profile?.website!,
        zoneinfo: found?.profile?.zoneinfo!
      },
      username: found.username!,
      createdAt: found.createdAt.toISOString(),
      deletedAt: found.deletedAt?.toISOString(),
      updatedAt: found.updatedAt.toISOString()
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
