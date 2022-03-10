import { config } from "@driten/accounts-config";
import { grpc, Empty, Struct } from "@driten/accounts-protobuf";

export async function getJWKS(
  _: grpc.ServerUnaryCall<Empty, Struct>,
  callback: grpc.sendUnaryData<Struct>
) {
  try {
    const response = Struct.fromJavaScript({
      jwks: [config.api.publicKey],
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
