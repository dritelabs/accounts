import { decodeToken } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { client as cache } from "../utils/cache";
import { config } from "../config";

export const invalidateToken: AccountHandlers["InvalidateToken"] = async (
  call,
  callback
) => {
  try {
    const decoded = await decodeToken(call.request.token);
    const tokenTypeHint =
      (call.request.tokenTypeHint as
        | "authorization_code"
        | "access_token"
        | "refresh_token") || "refresh_token";

    const jwtExpirations = {
      authorization_code: config.authorizationCodeExpirationTime as number,
      access_token: config.accessTokenExpirationTime as number,
      refresh_token: config.refreshTokenExpirationTime as number,
    };

    await cache.set(decoded?.jti!, call.request.token, {
      expires: jwtExpirations[tokenTypeHint],
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
