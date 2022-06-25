import * as jose from "jose";
import { cuid } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";

export const createJwkPair: AccountHandlers["CreateJWKPair"] = async (
  _,
  callback
) => {
  try {
    const { publicKey, privateKey } = await jose.generateKeyPair("RS256");
    const privateJWK = await jose.exportJWK(privateKey);
    const publicJWK = await jose.exportJWK(publicKey);
    const kid = cuid();

    privateJWK.kid = kid;
    privateJWK.alg = "RS256";
    privateJWK.use = "sig";
    publicJWK.kid = kid;
    publicJWK.alg = "RS256";
    publicJWK.use = "sig";

    callback(null, { privateKey: privateJWK, publicKey: publicJWK });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
