import { client } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { clientMessageReducer } from "../utils";

export const addJwkToClient: AccountHandlers["AddJWKToClient"] = async (
  call,
  callback
) => {
  try {
    const updated = await client.client.update({
      where: {
        id: call.request.clientId,
      },
      include: {
        jwks: true,
      },
      data: {
        jwks: {
          create: {
            id: call.request.jwk?.kid,
            jwk: call.request.jwk as any,
          },
        },
        jwksUri: null,
        tokenEndpointAuthMethod: "private_key_jwt",
      },
    });

    callback(null, clientMessageReducer(updated));
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
