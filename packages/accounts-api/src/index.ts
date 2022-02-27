import { grpc } from "@driten/accounts-protobuf";
import { AccountsService } from "@driten/accounts-protobuf/generated/accounts_grpc_pb";
import * as implementations from "./implementations";

const port = process.env.HOST || 5000;
const server = new grpc.Server();

server.addService(AccountsService, implementations);

server.bindAsync(
  `localhost:${port}`,
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
