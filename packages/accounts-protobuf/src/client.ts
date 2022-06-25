import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./protobuf/accounts";

const defaultHost = process.env.SERVER_HOST || "localhost:5000";
const filename = path.resolve(__dirname, "../proto/accounts.proto");
const packageDef = protoLoader.loadSync(filename, {
  arrays: true,
  defaults: true,
});

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

export function createClient(host: string = defaultHost) {
  return new proto.accounts.Account(host, grpc.credentials.createInsecure());
}
