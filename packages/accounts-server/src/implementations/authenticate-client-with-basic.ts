import { InvalidClientError } from '@dritelabs/accounts-errors';
import { client } from '@dritelabs/accounts-db';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { clientMessageReducer } from '../utils';

export const AuthenticateClientWithBasic: AccountHandlers['AuthenticateClientWithBasic'] = async (
  call,
  callback
) => {
  try {
    const found = await client.client.authenticateWithBasic(call.request.credential);

    callback(null, clientMessageReducer(found));
  } catch (e) {
    if (e instanceof InvalidClientError) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: e.error,
        details: e.error_description
      });
    }

    callback({
      ...(e as Error),
      code: grpc.status.UNKNOWN
    });
  }
};
