import { client } from '@dritelabs/accounts-db';
import { importJWK, signToken } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { config } from '../config';

export const createIdToken: AccountHandlers['CreateIDToken'] = async (call, callback) => {
  try {
    const privatekey = await importJWK(config.privateKey);

    const found = await client.user.findFirst({
      where: { id: call.request.sub },
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

    const claims: any = {};

    if (call.request.scope.includes('profile')) {
      claims.birthdate = found.profile?.birthdate;
      claims.family_name = found.profile?.lastName;
      claims.gender = found.profile?.gender;
      claims.given_name = found.profile?.firstName;
      claims.locale = found.profile?.locale;
      claims.middle_name = found.profile?.middleName;
      claims.name = `${found.profile?.firstName} ${found.profile?.middleName} ${found.profile?.lastName}`;
      claims.nickname = found.profile?.nickname;
      claims.picture = found.profile?.picture;
      claims.preferred_username = found.username;
      claims.profile = found.profile?.profile;
      claims.website = found.profile?.website;
      claims.zoneinfo = found.profile?.zoneinfo;
    }

    if (call.request.scope.includes('address')) {
      const address = found?.addresses?.find((address) => address.isDefault);

      claims.address = {
        country: address?.country,
        formatted: '',
        locality: address?.city,
        postalCode: address?.postalCode,
        region: address?.region,
        streetAddress: `${address?.line1} ${address?.line2 || ''}`
      };
    }

    if (call.request.scope.includes('email')) {
      claims.email = found.email;
      claims.email_verified = found.emailVerified;
    }

    if (call.request.scope.includes('phone')) {
      claims.phone_number = found.phoneNumber;
      claims.phone_number_verified = found.phoneNumberVerified;
    }

    const token = await signToken({
      audience: call.request.clientId,
      exp: config.accessTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      subject: call.request.sub,
      ...claims
    });

    callback(null, {
      expiresIn: config.accessTokenExpirationTime as number,
      token
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
