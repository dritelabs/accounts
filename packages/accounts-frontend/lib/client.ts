import { AccountsClient } from "@driten/accounts-protobuf/generated/accounts_grpc_pb";
import { grpc } from "@driten/accounts-protobuf";

const host = process.env.ACCOUNTS_SERVER_HOST || "localhost:5000";
const credentials = grpc.credentials.createInsecure();
export const client = new AccountsClient(host, credentials);
