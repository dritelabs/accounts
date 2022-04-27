import { withIronSession } from "~/lib/session";
import { metadata as metadataService } from "~/services";

export default withIronSession(() => metadataService.get());
