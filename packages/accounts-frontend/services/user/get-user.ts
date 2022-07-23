import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import { GetRequest } from "@driten/accounts-protobuf/dist/protobuf/core/GetRequest";
import { User } from "@driten/accounts-protobuf/dist/protobuf/core/User";
import { client } from "~/lib/client";

export const getUser = promisify<GetRequest, grpc.Metadata | void, User>(
  client.getUser.bind(client)
);
