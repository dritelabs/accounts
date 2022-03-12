import { grpc } from "@driten/accounts-protobuf";
import { AccountsService } from "@driten/accounts-protobuf/protobuf/accounts_grpc_pb";
import * as implementations from "./implementations";
import { config } from "./config";

const server = new grpc.Server();
const hostname = `${config.host}:${config.port}`;

server.addService(AccountsService, implementations);

server.bindAsync(
  hostname,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      throw err;
    }

    server.start();
    console.log(`Server listening on port ${port}`);
  }
);

process.on("uncaughtException", (err) => {
  console.log(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`process on unhandledRejection error: ${err}`);
});
