import { client, prisma } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";
import { withAuth } from "../lib/with-auth";
import { clientMessageReducer } from "../utils";

export const listClients = withAuth<AccountHandlers["ListClients"]>(
  ["clients"],
  async (call, callback) => {
    try {
      const metadata = call.metadata.getMap();
      const filter = new URLSearchParams(metadata?.filter as string);

      let where: prisma.Prisma.ScopeWhereInput = {};

      if (filter.getAll("names")?.length) {
        where = {
          ...where,
          name: {
            in: filter.getAll("names"),
          },
        };
      }

      const found = await client.client.findMany({
        where: {
          deletedAt: null,
        },
        include: {
          jwks: true,
        },
      });

      callback(null, {
        clients: found.map(clientMessageReducer),
        nextPageToken: "",
      });
    } catch (e) {
      const error = e as Error;

      callback({
        ...error,
        code: grpc.status.UNKNOWN,
      });
    }
  }
);
