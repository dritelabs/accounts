import { useQuery, sendRedirect } from "h3";
import { withIronSession } from "~~/lib/session";

export default withIronSession(async (req, res, next) => {
  const isAuthenticated = req?.session?.user;
  const urls = ["/signin", "/signup", "/api/signin", "/api/signup"];
  const urls2 = [
    "/jwks.json",
    "/.well-known/oauth-authorization-server",
    "/token",
  ];

  const url = new URL(req.url, `http://${req.headers.host}`);

  if (urls2.includes(url.pathname)) {
    return next();
  }

  if (!isAuthenticated && !urls.includes(url.pathname)) {
    const query = useQuery(req);
    const params = new URLSearchParams({
      ...query,
      continue: url.pathname,
    });

    return sendRedirect(res, `/signin?${params.toString()}`);
  }

  if (isAuthenticated && urls.includes(url.pathname)) {
    return sendRedirect(res, "/");
  }

  next();
});
