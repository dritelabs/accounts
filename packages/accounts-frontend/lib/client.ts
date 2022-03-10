import { config } from "@driten/accounts-config";
import { AccountsClient } from "@driten/accounts-protobuf/generated/accounts_grpc_pb";
import { grpc } from "@driten/accounts-protobuf";

const credentials = grpc.credentials.createInsecure();
export const client = new AccountsClient(config.api.host, credentials);
