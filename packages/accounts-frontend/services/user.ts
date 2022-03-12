import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/protobuf/core_pb";
import { client } from "~/lib/client";

export async function authenticate(
  payload: core.AuthenticateUserRequest.AsObject
) {
  const request = new core.AuthenticateUserRequest();

  request.setEmail(payload.email).setPassword(payload.password);

  const response = await authenticateUser(request);

  return response.toObject();
}

export async function create(payload: core.CreateUserRequest.AsObject) {
  const request = new core.CreateUserRequest();

  request.setEmail(payload.email).setPassword(payload.password);

  const response = await createUser(request);

  return response.toObject();
}

export function reducer(payload: core.CreateTokenResponse.AsObject) {
  return {};
}

const authenticateUser = promisify<
  core.AuthenticateUserRequest,
  grpc.Metadata | void,
  core.AuthenticateUserResponse
>(client.authenticateUser.bind(client));

const createUser = promisify<
  core.CreateUserRequest,
  grpc.Metadata | void,
  core.User
>(client.createUser.bind(client));
