import { client } from '@dritelabs/accounts-db';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';
import { clientMessageReducer } from '../utils';

export const deleteClient: AccountHandlers['DeleteClient'] = async (call, callback) => {
  try {
    const deleted = await client.client.delete({
      where: { id: call.request.id },
      include: {
        jwks: true
      }
    });

    callback(null, clientMessageReducer(deleted));
  } catch (e) {
    console.log(e);

    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
