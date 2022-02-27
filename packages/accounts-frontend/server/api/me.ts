import { withIronSession } from "~/lib/session";

export default withIronSession(async (req, res) => {
  return req.session.user;
});
