import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { config } from "../config";

export const getJwks: AccountHandlers["GetJWKS"] = async (call, callback) => {
  try {
    callback(null, {
      keys: [config.publicKey],
    });
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
