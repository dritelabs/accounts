import { client } from '@dritelabs/accounts-db';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { withAuth } from '../lib/with-auth';
import { userMessageReducer } from '../utils';

export const getUser = withAuth<AccountHandlers['GetUser']>([], async (call, callback) => {
  try {
    const metadata = call.metadata.getMap();
    const decoded = JSON.parse(metadata.decoded as string);
    const scope = decoded?.payload.scope as string;
    const includesProfile = scope.includes('profile');
    const includesAddress = scope.includes('address');
    const includesEmail = scope.includes('email');
    const includesPhone = scope.includes('phone');

    const found = await client.user.findFirst({
      where: { id: call.request.id || decoded?.payload?.sub },
      select: {
        id: true,
        username: includesProfile,
        addresses: includesAddress,
        email: includesEmail,
        emailVerified: includesEmail,
        phoneNumber: includesPhone,
        phoneNumberVerified: includesPhone,
        profile: includesProfile
      }
    });

    if (!found) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: 'User does not exist',
        details: 'User does not exist'
      });
    }

    callback(null, userMessageReducer(found));
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
});
