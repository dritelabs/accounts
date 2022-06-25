import {
  verifyWithLocalJKWS,
  decode,
  verifyScopes,
} from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { config } from "../config";

type K = keyof AccountHandlers;

export function withAuth<T>(
  scopes: string[],
  callback: T
): T | grpc.handleUnaryCall<any, any> {
  return async (call, _callback) => {
    const metadata = call.metadata.getMap();
    const jwks = {
      keys: [config.publicKey],
    };

    const token = await verifyWithLocalJKWS(
      metadata?.authorization as string,
      jwks,
      {
        typ: "at+jwt",
        issuer: config.authorizationServerIssuerBaseUrl,
        audience: `${config.host}:${config.port}`,
      }
    );

    if (!verifyScopes((token?.payload.scope as string)?.split(" "), scopes)) {
      _callback({
        code: grpc.status.PERMISSION_DENIED,
        name: "Invalid scope error",
        details: "Invalid scope error",
      });

      return;
    }

    // @ts-ignore
    callback(call, _callback);
  };
}
