import * as jose from "jose";
import { cuid } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { config } from "../config";

export const createToken: AccountHandlers["CreateToken"] = async (
  call,
  callback
) => {
  try {
    const privatekey = await jose.importJWK(config.privateKey);

    const token = await new jose.SignJWT({
      client_id: call.request.clientId,
      scope: call.request.scope,
    })
      .setProtectedHeader({
        alg: "RS256",
        typ: call.request.typ || "at+jwt",
      })
      .setIssuer(config.authorizationServerIssuerBaseUrl)
      .setExpirationTime(call.request.exp)
      .setAudience(call.request.aud)
      .setSubject(call.request.sub)
      .setIssuedAt()
      .setJti(cuid())
      .sign(privatekey);

    callback(null, { token });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
