import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import { CreateAuthorizationCodeRequest } from "@driten/accounts-protobuf/dist/protobuf/authorization_code/CreateAuthorizationCodeRequest";
import { CreateAuthorizationCodeResponse } from "@driten/accounts-protobuf/dist/protobuf/authorization_code/CreateAuthorizationCodeResponse";
import { client } from "~/lib/client";

export const createAuthorizationCode = promisify<
  CreateAuthorizationCodeRequest,
  grpc.Metadata | void,
  CreateAuthorizationCodeResponse
>(client.createAuthorizationCode.bind(client));
