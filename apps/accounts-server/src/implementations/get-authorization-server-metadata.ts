import { client } from '@dritelabs/accounts-db';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';

export const getAuthorizationServerMetadata: AccountHandlers['GetAuthorizationServerMetadata'] = async (
  _,
  callback
) => {
  try {
    const response = await client.metadata.getAuthorizationServerMetadata();

    callback(null, response);
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
