import { generateJWKPair } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';

export const createJwkPair: AccountHandlers['CreateJWKPair'] = async (_, callback) => {
  try {
    const response = await generateJWKPair();

    callback(null, response);
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
