import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import {
  GetClientRequest,
  Client,
} from "@driten/accounts-protobuf/generated/core_pb";
import { toClientMessage } from "../utils";

export async function getClient(
  call: grpc.ServerUnaryCall<GetClientRequest, Client>,
  callback: grpc.sendUnaryData<Client>
) {
  try {
    const found = await client.client.findFirst({
      where: { id: call.request.getId() },
    });

    if (!found) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: "Client does not exist",
      });
    }

    callback(null, toClientMessage(found));
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
