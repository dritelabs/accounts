import { cuid } from "@driten/accounts-utils";
import {
  CreateAuthorizationCodeRequest,
  CreateAuthorizationCodeResponse,
} from "@driten/accounts-protobuf/generated/core_pb";
import { grpc } from "@driten/accounts-protobuf";
import * as jose from "jose";
import { privateKey } from "../config";

export async function createAuthorizationCode(
  call: grpc.ServerUnaryCall<
    CreateAuthorizationCodeRequest,
    CreateAuthorizationCodeResponse
  >,
  callback: grpc.sendUnaryData<CreateAuthorizationCodeResponse>
) {
  try {
    const privatekey = await jose.importJWK(privateKey);

    const code = await new jose.SignJWT({
      client_id: call.request.getClientId(),
      code_challenge: call.request.getCodeChallenge(),
      code_challenge_method: call.request.getCodeChallengeMethod(),
      redirect_uri: call.request.getRedirectUri(),
      scope: call.request.getScope(),
    })
      .setProtectedHeader({ alg: "RS256" })
      .setIssuer("http://localhost:3000")
      .setExpirationTime("1m")
      .setAudience(call.request.getAudList())
      .setSubject(call.request.getSub())
      .setIssuedAt()
      .setJti(cuid())
      .sign(privatekey);

    const response = new CreateAuthorizationCodeResponse();

    response.setCode(code);

    callback(null, response);
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
