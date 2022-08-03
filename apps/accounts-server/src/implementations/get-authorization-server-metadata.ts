import { client } from '@drite/accounts-db';
import { grpc } from '@drite/accounts-protobuf';
import { AccountHandlers } from '@drite/accounts-protobuf/dist/protobuf/accounts/Account';

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
