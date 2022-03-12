import { grpc, Empty, Struct } from "@driten/accounts-protobuf";
import { config } from "../config";

export async function getJWKS(
  _: grpc.ServerUnaryCall<Empty, Struct>,
  callback: grpc.sendUnaryData<Struct>
) {
  try {
    const response = Struct.fromJavaScript({
      keys: [config.publicKey],
    });

    callback(null, response);
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
