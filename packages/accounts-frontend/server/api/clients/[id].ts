import { withIronSession } from "~/lib/session";
import { client as clientService } from "~/services";

export default withIronSession(async (event) => {
  event.res.statusCode = 200;

  return clientService.get(event.context.params.id);
});
