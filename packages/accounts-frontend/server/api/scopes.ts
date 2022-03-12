import { useQuery } from "h3";
import core from "@driten/accounts-protobuf/protobuf/core_pb";
import { withIronSession } from "~/lib/session";
import { scope as scopeService } from "~/services";

interface Response {
  items: core.Scope.AsObject[];
}

export default withIronSession<Response>(async (req) => {
  const query = useQuery(req);
  const scopeNames = query?.names ? (query.names as string).split(" ") : [];

  try {
    const response = await scopeService.list({
      filter: {
        names: scopeNames,
      },
    });

    return {
      items: response.scopes,
    };
  } catch (error) {
    return error;
  }
});
