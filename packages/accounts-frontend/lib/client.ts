// import { AccountsClient } from "@driten/accounts-protobuf/protobuf/accounts_grpc_pb";
import { grpc } from "@driten/accounts-protobuf";
import { createClient } from "@driten/accounts-protobuf/dist/client";
import { useRuntimeConfig } from "#imports";

const config = useRuntimeConfig();
const credentials = grpc.credentials.createInsecure();
// export const client = new AccountsClient(config.serverHost, credentials);
export const client = createClient(config.serverHost);
