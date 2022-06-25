import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./protobuf/accounts";

export { AccountHandlers } from "./protobuf/accounts/Account";

const filename = path.resolve(__dirname, "../proto/accounts.proto");
const packageDef = protoLoader.loadSync(filename, {
  arrays: true,
});

export const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

export function createServer() {
  const server = new grpc.Server();

  return server;
}
