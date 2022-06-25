import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import { AuthenticateUserRequest } from "@driten/accounts-protobuf/dist/protobuf/user/AuthenticateUserRequest";
import { AuthenticateUserResponse } from "@driten/accounts-protobuf/dist/protobuf/user/AuthenticateUserResponse";
import { CreateUserRequest } from "@driten/accounts-protobuf/dist/protobuf/user/CreateUserRequest";
import { User } from "@driten/accounts-protobuf/dist/protobuf/core/User";
import { client } from "~/lib/client";

export async function authenticate(request: AuthenticateUserRequest) {
  const response = await authenticateUser(request);

  return response;
}

export async function create(request: CreateUserRequest) {
  const response = await createUser(request);

  return response;
}

export function reducer(request: any) {
  return {};
}

const authenticateUser = promisify<
  AuthenticateUserRequest,
  grpc.Metadata | void,
  AuthenticateUserResponse
>(client.authenticateUser.bind(client));

const createUser = promisify<CreateUserRequest, grpc.Metadata | void, User>(
  client.createUser.bind(client)
);
