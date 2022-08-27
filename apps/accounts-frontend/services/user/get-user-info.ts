import { grpc } from '@dritelabs/accounts-protobuf';
import { GetRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/core/GetRequest';
import { User } from '@dritelabs/accounts-protobuf/dist/protobuf/core/User';
import { getUser } from './get-user';

export async function getUserInfo(request: GetRequest, metadata: grpc.Metadata) {
  const user = await getUser(request, metadata);

  return getUserInfoReducer(user);
}

export function getUserInfoReducer(user: User) {
  const address = user?.addresses?.find((address) => address.isDefault);

  return {
    birthdate: user?.profile?.birthdate,
    family_name: user?.profile?.lastName,
    gender: user?.profile?.gender,
    given_name: user?.profile?.firstName,
    locale: user?.profile?.locale,
    middle_name: user?.profile?.middleName,
    name: `${user?.profile?.firstName} ${user?.profile?.middleName} ${user?.profile?.lastName}`,
    nickname: user?.profile?.nickname,
    picture: user?.profile?.picture,
    preferred_username: user?.username,
    profile: user?.profile?.profile,
    website: user?.profile?.website,
    zoneinfo: user?.profile?.zoneinfo,
    address: !address
      ? undefined
      : {
          country: address?.country,
          formatted: undefined,
          locality: address?.city,
          postalCode: address?.postalCode,
          region: address?.region,
          streetAddress: address ? `${address?.line1} ${address?.line2}` : undefined
        },
    email: user?.email,
    email_verified: user?.emailVerified,
    phone_number: user?.phoneNumber,
    phone_number_verified: user?.phoneNumberVerified
  };
}
