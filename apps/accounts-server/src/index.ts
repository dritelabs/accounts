import { grpc } from '@dritelabs/accounts-protobuf';
import { createServer, proto } from '@dritelabs/accounts-protobuf/dist/server';
import * as implementations from './implementations';
import { config } from './config';

const hostname = `${config.host}:${config.port}`;
const server = createServer();

server.addService(proto.accounts.Account.service, implementations);

server.bindAsync(hostname, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    throw err;
  }

  server.start();
  console.log(`Server listening on port ${port}`);
});

process.on('uncaughtException', (err) => {
  console.log(`process on uncaughtException error: ${err}`);
});

process.on('unhandledRejection', (err) => {
  console.log(`process on unhandledRejection error: ${err}`);
});
