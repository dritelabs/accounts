import { prisma } from '@dritelabs/accounts-db';

type Payload = {
  profile: prisma.Profile | null;
  email: string;
  id: string;
  username: string | null;
  addresses: prisma.Address[];
  emailVerified: boolean | null;
  phoneNumber: string | null;
  phoneNumberVerified: boolean | null;
} | null;

export function idTokenClaimsReducer(payload: Payload, scope: string) {
  const claims: any = {};

  if (scope.includes('profile')) {
    claims.birthdate = payload?.profile?.birthdate;
    claims.family_name = payload?.profile?.lastName;
    claims.gender = payload?.profile?.gender;
    claims.given_name = payload?.profile?.firstName;
    claims.locale = payload?.profile?.locale;
    claims.middle_name = payload?.profile?.middleName;
    claims.name = `${payload?.profile?.firstName} ${payload?.profile?.middleName} ${payload?.profile?.lastName}`;
    claims.nickname = payload?.profile?.nickname;
    claims.picture = payload?.profile?.picture;
    claims.preferred_username = payload?.username;
    claims.profile = payload?.profile?.profile;
    claims.website = payload?.profile?.website;
    claims.zoneinfo = payload?.profile?.zoneinfo;
  }

  if (scope.includes('address')) {
    const address = payload?.addresses?.find((address) => address.isDefault);

    claims.address = {
      country: address?.country,
      formatted: '',
      locality: address?.city,
      postalCode: address?.postalCode,
      region: address?.region,
      streetAddress: `${address?.line1} ${address?.line2 || ''}`
    };
  }

  if (scope.includes('email')) {
    claims.email = payload?.email;
    claims.email_verified = payload?.emailVerified;
  }

  if (scope.includes('phone')) {
    claims.phone_number = payload?.phoneNumber;
    claims.phone_number_verified = payload?.phoneNumberVerified;
  }

  return claims;
}
