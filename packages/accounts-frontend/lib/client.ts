import { AccountsClient } from "@driten/accounts-protobuf/protobuf/accounts_grpc_pb";
import { grpc } from "@driten/accounts-protobuf";
import config from "#config";

const credentials = grpc.credentials.createInsecure();
export const client = new AccountsClient(config.serverHost, credentials);
