import { importJWK, signToken } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { config } from "../config";

export const createRefreshToken: AccountHandlers["CreateRefreshToken"] = async (
  call,
  callback
) => {
  try {
    const privatekey = await importJWK(config.privateKey);

    const token = await signToken({
      audience: call.request.aud,
      exp: config.refreshTokenExpirationTime,
      issuer: config.authorizationServerIssuerBaseUrl,
      key: privatekey,
      typ: "rt+jwt",
      subject: call.request.sub,
      client_id: call.request.clientId,
      scope: call.request.scope,
    });

    callback(null, {
      expiresIn: config.refreshTokenExpirationTime as number,
      token,
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
