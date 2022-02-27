import { promisify } from "util";
import { grpc, Empty, Struct } from "@driten/accounts-protobuf";
import { client } from "~/lib/client";

type Response = {
  [key: string]: any;
};

export async function get() {
  const request = new Empty();

  const response = await getAuthorizationServerMetadata(request);

  return response.toJavaScript() as Response;
}

const getAuthorizationServerMetadata = promisify<
  Empty,
  grpc.Metadata | void,
  Struct
>(client.getAuthorizationServerMetadata.bind(client));
