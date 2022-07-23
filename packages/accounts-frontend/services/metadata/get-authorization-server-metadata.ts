import { promisify } from "util";
import { grpc } from "@driten/accounts-protobuf";
import { AuthorizationServerMetadata } from "@driten/accounts-protobuf/dist/protobuf/core/AuthorizationServerMetadata";
import { Empty } from "@driten/accounts-protobuf/dist/protobuf/core/Empty";
import { client } from "~/lib/client";

export function getAuthorizationServerMetadata() {
  return _getAuthorizationServerMetadata(null);
}

const _getAuthorizationServerMetadata = promisify<
  Empty,
  grpc.Metadata | void,
  AuthorizationServerMetadata
>(client.getAuthorizationServerMetadata.bind(client));
