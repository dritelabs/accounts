import { client, prisma } from "@driten/accounts-db";
import { grpc } from "@driten/accounts-protobuf";
import {
  ListScopesRequest,
  ListScopesResponse,
} from "@driten/accounts-protobuf/protobuf/core_pb";
import { toScopeMessage } from "../utils";

export async function listScopes(
  call: grpc.ServerUnaryCall<ListScopesRequest, ListScopesResponse>,
  callback: grpc.sendUnaryData<ListScopesResponse>
) {
  try {
    const metadata = call.metadata.getMap();
    const filter = new URLSearchParams(metadata?.filter as string);

    let where: prisma.Prisma.ScopeWhereInput = {};

    if (filter.getAll("names")) {
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

    const response = new ListScopesResponse();
    const list = found.map(toScopeMessage);

    response.setScopeList(list);

    callback(null, response);
  } catch (e) {
    const error = e as Error;
    callback({
      ...error,
      code: grpc.status.UNKNOWN,
    });
  }
}
