import { generateJWKPair } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";

export const createJwkPair: AccountHandlers["CreateJWKPair"] = async (
  _,
  callback
) => {
  try {
    const response = await generateJWKPair();

    callback(null, response);
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
