import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import core from "@driten/accounts-protobuf/generated/core_pb";
import { client } from "~/lib/client";

interface Options {
  filter?: {
    names?: string[];
  };
}

export async function list(options?: Options) {
  const request = new core.ListScopesRequest();
  const metadata = new grpc.Metadata();
  const filter = new URLSearchParams();

  if (options?.filter?.names) {
    options.filter.names.forEach((name) => filter.append("names", name));
  }

  metadata.set("filter", filter.toString());

  const response = (await listScopes(request, metadata)).toObject();

  return {
    scopes: response.scopeList,
  };
}

const listScopes = promisify<
  core.ListScopesRequest,
  grpc.Metadata | void,
  core.ListScopesResponse
>(client.listScopes.bind(client));
