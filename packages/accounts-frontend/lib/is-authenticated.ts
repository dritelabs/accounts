import { createError, sendError } from "h3";
import { withIronSessionApiRoute } from "~~/lib/iron-session";
import { options } from "~~/lib/session";

export const isAuthenticated = withIronSessionApiRoute(async (req, res) => {
  if (!req.session?.user) {
    sendError(
      res,
      createError({
        statusCode: 401,
      })
    );
  }
}, options);
