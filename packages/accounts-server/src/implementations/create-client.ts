import { client, prisma } from "@driten/accounts-db";
import { decode } from "@driten/accounts-jwt-verifier";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { randomBytes } from "@driten/accounts-utils";
import { withAuth } from "../utils/with-auth";

export const createClient = withAuth<AccountHandlers["CreateClient"]>(
  ["clients:read"],
  async (call, callback) => {
    try {
      const metadata = call.metadata.getMap();
      const decoded = await decode(metadata.authorization as string);

      const created = await client.client.create({
        data: {
          ...call.request,
          type: call.request.type as prisma.ApplicationType,
          userId: decoded.sub!,
          secret: randomBytes(32).toString("hex"),
        },
      });

      callback(null, {
        id: created.id,
        userId: created.userId,
        description: created.description!,
        name: created.name!,
        type: created.type!,
        createdAt: created.createdAt.toISOString(),
        deletedAt: created.deletedAt?.toISOString(),
        updatedAt: created.updatedAt.toISOString(),
      });
    } catch (e) {
      const error = e as Error;

      console.log(error);

      callback({
        ...error,
        code: grpc.status.UNKNOWN,
      });
    }
  }
);
