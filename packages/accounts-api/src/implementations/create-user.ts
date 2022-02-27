import { genSalt, hash } from "bcrypt";
import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import {
  CreateUserRequest,
  User,
} from "@driten/accounts-protobuf/generated/core_pb";
import { toUserMessage } from "../utils";

export async function createUser(
  call: grpc.ServerUnaryCall<CreateUserRequest, User>,
  callback: grpc.sendUnaryData<User>
) {
  try {
    const payload = call.request.toObject();
    const salt = await genSalt();
    const hashed = await hash(payload.password, salt);
    const found = await client.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (found) {
      return callback({
        code: grpc.status.ALREADY_EXISTS,
        message: "User already exist",
      });
    }

    const created = await client.user.create({
      data: {
        email: payload.email,
        password: hashed,
        profile: {},
      },
    });

    callback(null, toUserMessage(created));
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
