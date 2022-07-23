import { verifyToken, decodeToken } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";

import { client as cache } from "../lib/cache";
import { config } from "../config";

export const validateToken: AccountHandlers["ValidateToken"] = async (
  call,
  callback
) => {
  try {
    const decoded = await decodeToken(call.request.token);
    const { value: cached } = await cache.get(decoded?.jti!);

    console.log(call.request.token);

    if (cached) {
      callback({
        code: grpc.status.ALREADY_EXISTS,
        name: "InvalidGrantError",
        message: "The grant is invalid or used",
        details: "The grant is invalid or used",
      });
    }

    const tokenTypeHint =
      (call.request.tokenTypeHint as
        | "authorization_code"
        | "access_token"
        | "refresh_token") || "refresh_token";

    const jwtTypMap = {
      authorization_code: "ac+jwt",
      access_token: "at+jwt",
      refresh_token: "rt+jwt",
    };

    const jwks = {
      keys: [config.publicKey],
    };

    await verifyToken(call.request.token, {
      typ: jwtTypMap[tokenTypeHint],
      issuer: config.authorizationServerIssuerBaseUrl,
      audience: config.authorizationServerIssuerBaseUrl,
      jwks,
    }).catch((err) => {
      callback({
        code: grpc.status.ALREADY_EXISTS,
        name: "InvalidGrantError",
        message: err?.message,
        details: err?.message,
      });
    });

    callback(null, {
      token: call.request.token,
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
