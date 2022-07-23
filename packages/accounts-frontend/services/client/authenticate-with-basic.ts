import { promisify } from "util";
import { InvalidClientError } from "@driten/accounts-errors";
import { grpc } from "@driten/accounts-protobuf";
import { AuthenticateClientRequest } from "@driten/accounts-protobuf/dist/protobuf/client/AuthenticateClientRequest";
import { Client } from "@driten/accounts-protobuf/dist/protobuf/core/Client";
import { client } from "~/lib/client";

export async function authenticateWithBasic(authorization: string) {
  try {
    const found = await authenticateClientWithBasic({
      credential: authorization,
    });

    return found;
  } catch (error) {
    throw new InvalidClientError(error.message);
  }
}

export const authenticateClientWithBasic = promisify<
  AuthenticateClientRequest,
  grpc.Metadata | void,
  Client
>(client.authenticateClientWithBasic.bind(client));
