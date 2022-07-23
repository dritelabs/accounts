import { verifyToken, verifyTokenScopes } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { config } from "../config";

type K = keyof AccountHandlers;

export function withAuth<T>(
  scopes: string[],
  callback: T
): T | grpc.handleUnaryCall<any, any> {
  return async (call, _callback) => {
    const authorizationServerApi = `${config.host}:${config.port}`;
    const metadata = call.metadata.getMap();
    const jwks = {
      keys: [config.publicKey],
    };

    const token = await verifyToken(metadata?.authorization as string, {
      typ: "at+jwt",
      issuer: config.authorizationServerIssuerBaseUrl,
      audience: authorizationServerApi,
      jwks,
    }).catch((err) => {
      _callback({
        code: grpc.status.PERMISSION_DENIED,
        name: err?.message,
        details: err?.message,
      });
    });

    if (!token) {
      return;
    }

    if (
      !verifyTokenScopes((token?.payload.scope as string)?.split(" "), scopes)
    ) {
      _callback({
        code: grpc.status.PERMISSION_DENIED,
        name: "Invalid scope",
        details: "Invalid scope",
      });

      return;
    }

    // @ts-ignore
    callback(call, _callback);
  };
}
