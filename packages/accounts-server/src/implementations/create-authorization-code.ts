import * as jose from "jose";
import { cuid } from "@driten/accounts-utils";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { grpc } from "@driten/accounts-protobuf";
import { config } from "../config";

export const createAuthorizationCode: AccountHandlers["CreateAuthorizationCode"] =
  async (call, callback) => {
    try {
      const privatekey = await jose.importJWK(config.privateKey);

      const code = await new jose.SignJWT({
        client_id: call.request.clientId,
        code_challenge: call.request.codeChallenge,
        code_challenge_method: call.request.codeChallengeMethod,
        redirect_uri: call.request.redirectUri,
        scope: call.request.scope,
      })
        .setProtectedHeader({ alg: "RS256", typ: "ac+jwt" })
        .setIssuer(config.authorizationServerIssuerBaseUrl)
        .setExpirationTime(call.request.exp)
        .setAudience(call.request.aud)
        .setSubject(call.request.sub)
        .setIssuedAt()
        .setJti(cuid())
        .sign(privatekey);

      callback(null, { code });
    } catch (e) {
      const error = e as Error;
      callback({
        ...error,
        code: grpc.status.UNKNOWN,
      });
    }
  };
