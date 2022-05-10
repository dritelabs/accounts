import { grpc } from "@driten/accounts-protobuf";
import { Empty } from "@driten/accounts-protobuf/dist/protobuf/core/Empty";
import { Jwks } from "@driten/accounts-protobuf/dist/protobuf/core/Jwks";
import { withIronSession } from "~/lib/session";
import { promisify } from "util";
import { client } from "~/lib/client";

export default withIronSession(async () => {
  const response = await getJWKS(null);

  return response;
});

const getJWKS = promisify<Empty, grpc.Metadata | void, Jwks>(
  client.getJwks.bind(client)
);
