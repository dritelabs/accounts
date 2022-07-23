import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";

export const getAuthorizationServerMetadata: AccountHandlers["GetAuthorizationServerMetadata"] =
  async (_, callback) => {
    try {
      const response = await client.metadata.getAuthorizationServerMetadata();

      callback(null, response);
    } catch (e) {
      const error = e as Error;

      callback({
        ...error,
        code: grpc.status.UNKNOWN,
      });
    }
  };
