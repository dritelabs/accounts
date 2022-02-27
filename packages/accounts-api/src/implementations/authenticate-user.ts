import { compare } from "bcrypt";
import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import {
  AuthenticateUserRequest,
  AuthenticateUserResponse,
} from "@driten/accounts-protobuf/generated/core_pb";
import { toAuthResponseMessage } from "../utils";

export async function authenticateUser(
  call: grpc.ServerUnaryCall<AuthenticateUserRequest, AuthenticateUserResponse>,
  callback: grpc.sendUnaryData<AuthenticateUserResponse>
) {
  try {
    const found = await client.user.findFirst({
      where: { email: call.request.getEmail() },
    });

    if (!found) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Invalid email or password",
      });
    }

    const match = await compare(call.request.getPassword(), found.password);

    if (!match) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: "Invalid email or password",
      });
    }

    callback(null, toAuthResponseMessage(found));
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
