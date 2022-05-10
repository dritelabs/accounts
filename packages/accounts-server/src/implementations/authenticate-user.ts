import { compare } from "bcrypt";
import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";

export const authenticateUser: AccountHandlers["AuthenticateUser"] = async (
  call,
  callback
) => {
  try {
    const found = await client.user.findFirst({
      where: { email: call.request.email },
    });

    if (!found) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Invalid email or password",
      });
    }

    const match = await compare(call.request.password!, found.password);

    if (!match) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Invalid email or password",
      });
    }

    callback(null, {
      id: found.id,
      email: found.email,
      initialAccessToken: "",
    });
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
