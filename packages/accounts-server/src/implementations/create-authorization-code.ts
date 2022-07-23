import { importJWK, signToken } from "@driten/accounts-utils";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { grpc } from "@driten/accounts-protobuf";
import { config } from "../config";

export const createAuthorizationCode: AccountHandlers["CreateAuthorizationCode"] =
  async (call, callback) => {
    try {
      const privatekey = await importJWK(config.privateKey);

      const code = await signToken({
        audience: call.request.aud,
        exp: config.authorizationCodeExpirationTime,
        issuer: config.authorizationServerIssuerBaseUrl,
        key: privatekey,
        typ: "at+jwt",
        subject: call.request.sub,
        client_id: call.request.clientId,
        code_challenge: call.request.codeChallenge,
        code_challenge_method: call.request.codeChallengeMethod,
        redirect_uri: call.request.redirectUri,
        scope: call.request.scope,
      });

      callback(null, { code });
    } catch (e) {
      const error = e as Error;
      callback({
        ...error,
        code: grpc.status.UNKNOWN,
      });
    }
  };
