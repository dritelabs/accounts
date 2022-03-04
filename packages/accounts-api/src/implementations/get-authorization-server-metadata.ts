import { grpc, Empty, Struct } from "@driten/accounts-protobuf";
import { authorizationServerMetadata } from "../config";

export async function getAuthorizationServerMetadata(
  _: grpc.ServerUnaryCall<Empty, Struct>,
  callback: grpc.sendUnaryData<Struct>
) {
  try {
    const response = Struct.fromJavaScript(authorizationServerMetadata);

    callback(null, response);
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
