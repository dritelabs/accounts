import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import { Client } from "@driten/accounts-protobuf/dist/protobuf/core/Client";
import { GetRequest } from "@driten/accounts-protobuf/dist/protobuf/core/GetRequest";
import { client } from "~/lib/client";

export const getClient = promisify<GetRequest, grpc.Metadata | void, Client>(
  client.getClient.bind(client)
);
