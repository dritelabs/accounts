import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import { CreateTokenRequest } from "@driten/accounts-protobuf/dist/protobuf/token/CreateTokenRequest";
import { CreateTokenResponse } from "@driten/accounts-protobuf/dist/protobuf/token/CreateTokenResponse";
import { client } from "~/lib/client";

export const createRefreshToken = promisify<
  CreateTokenRequest,
  grpc.Metadata | void,
  CreateTokenResponse
>(client.createRefreshToken.bind(client));
