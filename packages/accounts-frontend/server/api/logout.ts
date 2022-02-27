import { sendRedirect } from "h3";
import { withIronSession } from "~/lib/session";

export default withIronSession(async (req, res) => {
  await req.session.destroy();

  return sendRedirect(res, "/signin");
});
