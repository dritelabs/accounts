import { InvalidClientError } from "@driten/accounts-errors";
import { decodeToken, verifyToken } from "@driten/accounts-utils";
import { getAuthorizationServerMetadata } from "../metadata/get-authorization-server-metadata";
import { client } from "../prisma";

export async function authenticateWithPrivateKey(authorization: string) {
  const decoded = await decodeToken(authorization);

  const found = await client.client.findFirst({
    where: {
      id: decoded.sub,
    },
    include: {
      jwks: true,
    },
  });

  if (!found) {
    throw new InvalidClientError("Invalid client_id");
  }

  const metadata = await getAuthorizationServerMetadata();

  // const { value: cached } = await cache.get(decoded.jti);

  // if (cached) {
  //   throw new InvalidGrantError("The client assertion was already used");
  // }

  // await cache.set(decoded.jti, clientAssertion, {
  //   expires: decoded.exp - decoded.iat,
  // });

  if (found.publicKeysConfiguration === "local") {
    await verifyToken(authorization, {
      issuer: found.uri!,
      audience: metadata.issuer,
      jwks: found.jwks,
    }).catch((err) => {
      throw new InvalidClientError(err.message);
    });

    return found;
  }

  await verifyToken(authorization, {
    issuer: found.uri!,
    audience: metadata.issuer,
    jwksUri: found.jwksUri!,
  }).catch((err) => {
    throw new InvalidClientError(err.message);
  });

  return found;
}
