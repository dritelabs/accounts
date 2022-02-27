import { withIronSession } from "~/lib/session";
import { metadata as metadataService } from "~/services";

export default withIronSession(async (req, res) => {
  return metadataService.get();
});
