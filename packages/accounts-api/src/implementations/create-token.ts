import { cuid } from "@driten/accounts-utils";
import {
  CreateTokenRequest,
  CreateTokenResponse,
} from "@driten/accounts-protobuf/generated/core_pb";
import { grpc } from "@driten/accounts-protobuf";
import * as jose from "jose";
import { privateKey, authorizationServerMetadata } from "../config";

export async function createToken(
  call: grpc.ServerUnaryCall<CreateTokenRequest, CreateTokenResponse>,
  callback: grpc.sendUnaryData<CreateTokenResponse>
) {
  try {
    const privatekey = await jose.importJWK(privateKey);

    const token = await new jose.SignJWT({
      client_id: call.request.getClientId(),
      scope: call.request.getScope(),
    })
      .setProtectedHeader({
        alg: "RS256",
        typ: call.request.getTyp() || "at+jwt",
      })
      .setIssuer(authorizationServerMetadata.issuer)
      .setExpirationTime(call.request.getExp())
      .setAudience(call.request.getAudList())
      .setSubject(call.request.getSub())
      .setIssuedAt()
      .setJti(cuid())
      .sign(privatekey);

    const response = new CreateTokenResponse();

    response.setToken(token);

    callback(null, response);
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
