import { withIronSession } from "~/lib/session";

export default withIronSession(async (req, res) => {
  if (!req.session.user) {
    return { isAuthenticated: false };
  }

  return req.session.user;
});
