import { grpc, Struct, Empty } from "@driten/accounts-protobuf";
import { withIronSession } from "~/lib/session";
import { promisify } from "util";
import { client } from "~/lib/client";

export default withIronSession(async () => {
  const response = await getJWKS(new Empty());

  return response.toJavaScript();
});

const getJWKS = promisify<Empty, grpc.Metadata | void, Struct>(
  client.getJWKS.bind(client)
);
