import { withIronSession } from "~/lib/session";

export default withIronSession(async (event) => {
  return event.req.session.user;
});
