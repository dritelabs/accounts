import { InvalidGrantError } from "@driten/accounts-errors";
import { decodeToken } from "@driten/accounts-utils";
import { grpc } from "@driten/accounts-protobuf";
import { ValidateTokenRequest } from "@driten/accounts-protobuf/dist/protobuf/token/ValidateTokenRequest";
import { ValidateTokenResponse } from "@driten/accounts-protobuf/dist/protobuf/token/ValidateTokenResponse";
import { client } from "~/lib/client";
import { promisify } from "util";

export async function validateAuthorizationCode(code: string) {
  try {
    await _validateToken({
      token: code,
      tokenTypeHint: "authorization_code",
    });

    return decodeToken(code);
  } catch (error) {
    throw new InvalidGrantError(error?.message);
  }
}

const _validateToken = promisify<
  ValidateTokenRequest,
  grpc.Metadata | void,
  ValidateTokenResponse
>(client.validateToken.bind(client));
