import { useQuery, sendRedirect } from "h3";
import { withIronSession } from "~~/lib/session";

export default withIronSession(async (event) => {
  const isAuthenticated = event.req?.session?.user;
  const urls = ["/signin", "/signup", "/api/signin", "/api/signup"];
  const urls2 = [
    "/api/jwks.json",
    "/api/.well-known/oauth-authorization-server",
    "/api/token",
    "/api/me",
    "/",
  ];

  const url = new URL(event.req.url, `http://${event.req.headers.host}`);

  if (urls2.includes(url.pathname)) {
    // return next();
  }

  if (!isAuthenticated && !urls.includes(url.pathname)) {
    const query = useQuery(event);
    const params = new URLSearchParams({
      ...query,
      continue: url.pathname,
    });

    return sendRedirect(event, `/signin?${params.toString()}`);
  }

  if (isAuthenticated && urls.includes(url.pathname)) {
    return sendRedirect(event, "/");
  }

  // next();
});
