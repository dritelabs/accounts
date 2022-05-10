import { client, prisma } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import { AccountHandlers } from "@driten/accounts-protobuf/dist/protobuf/accounts/Account";

export const listScopes: AccountHandlers["ListScopes"] = async (
  call,
  callback
) => {
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

    const found = await client.scope.findMany({
      where,
    });

    callback(null, {
      scopes: found,
      nextPageToken: "",
    });
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
};
