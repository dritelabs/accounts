import { InvalidClientError } from "@driten/accounts-errors";
import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { clientMessageReducer } from "../utils";

export const AuthenticateClientWithBasic: AccountHandlers["AuthenticateClientWithBasic"] =
  async (call, callback) => {
    try {
      const found = await client.client.authenticateWithBasic(
        call.request.credential
      );

      callback(null, clientMessageReducer(found));
    } catch (e) {
      if (e instanceof InvalidClientError) {
        return callback({
          code: grpc.status.INVALID_ARGUMENT,
          message: e.error,
          details: e.error_description,
        });
      }

      callback({
        ...(e as Error),
        code: grpc.status.UNKNOWN,
      });
    }
  };
