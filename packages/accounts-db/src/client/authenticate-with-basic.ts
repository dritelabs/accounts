import { InvalidClientError } from "@driten/accounts-errors";
import { decodeBasic } from "@driten/accounts-utils";
import { client } from "../prisma";

export async function authenticateWithBasic(authorization: string) {
  const decoded = decodeBasic(authorization);

  if (!decoded) {
    throw new InvalidClientError("Invalid client_id or client_secret");
  }

  const found = await client.client.findFirst({
    where: {
      id: decoded.clientId,
    },
    include: {
      jwks: true,
    },
  });

  if (!found) {
    throw new InvalidClientError("Invalid client_id or client_secret");
  }

  if (found.secret !== decoded.clientSecret) {
    throw new InvalidClientError("Invalid client_id or client_secret");
  }

  return found;
}
