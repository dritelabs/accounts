import { withIronSession } from "~/lib/session";
import { client as clientService } from "~/services";

export default withIronSession(async (req) => {
  try {
    const id = req.url.split("/")[1];

    if (!id) {
      return undefined;
    }

    return clientService.get(id);
  } catch (error) {
    return undefined;
  }
});
