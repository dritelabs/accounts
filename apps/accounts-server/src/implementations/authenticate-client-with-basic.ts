import { InvalidClientError } from '@drite/accounts-errors';
import { client } from '@drite/accounts-db';
import { grpc } from '@drite/accounts-protobuf';
import { AccountHandlers } from '@drite/accounts-protobuf/dist/protobuf/accounts/Account';
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
