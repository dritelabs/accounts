import { client } from '@dritelabs/accounts-db';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { userMessageReducer } from '../utils';

export const getUser: AccountHandlers['GetUser'] = async (call, callback) => {
  try {
    const found = await client.user.findFirst({
      where: { id: call.request.id },
      include: {
        addresses: true,
        profile: true,
        clientApprovals: {
          include: {
            scopes: true
          }
        }
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
};
