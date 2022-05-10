import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import { ListScopesRequest } from "@driten/accounts-protobuf/dist/protobuf/core/ListScopesRequest";
import { ListScopesResponse } from "@driten/accounts-protobuf/dist/protobuf/core/ListScopesResponse";
import { client } from "~/lib/client";

interface Options {
  filter?: {
    names?: string[];
  };
}

export async function list(options?: Options) {
  const metadata = new grpc.Metadata();
  const filter = new URLSearchParams();

  if (options?.filter?.names) {
    options.filter.names.forEach((name) => filter.append("names", name));
  }

  metadata.set("filter", filter.toString());

  const response = await listScopes({}, metadata);

  return response;
}

const listScopes = promisify<
  ListScopesRequest,
  grpc.Metadata | void,
  ListScopesResponse
>(client.listScopes.bind(client));
