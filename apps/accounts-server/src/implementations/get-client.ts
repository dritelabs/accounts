import { client } from '@drite/accounts-db';
import { grpc } from '@drite/accounts-protobuf';
import { AccountHandlers } from '@drite/accounts-protobuf/dist/protobuf/accounts/Account';
import { clientMessageReducer } from '../utils';

export const getClient: AccountHandlers['GetClient'] = async (call, callback) => {
  try {
    const found = await client.client.findFirst({
      where: { id: call.request.id },
      include: {
        jwks: true
      }
    });

    if (!found) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: 'Client does not exist',
        details: 'Client does not exist'
      });
    }

    callback(null, clientMessageReducer(found));
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
