import { useBody, useQuery, sendRedirect } from "h3";
import { grpc } from "@driten/accounts-protobuf";
import { InvalidRequestError } from "@driten/accounts-errors";
import { withIronSession } from "~/lib/session";
import { user as userService } from "~/services";

export default withIronSession(async (event) => {
  try {
    const query = useQuery(event);
    const body = await useBody(event);
    const params = new URLSearchParams(body);

    const response = await userService.authenticate({
      email: params.get("email"),
      password: params.get("password"),
    });

    event.req.session.user = {
      ...response,
      isAuthenticated: true,
    };

    await event.req.session.save();

    if (query?.continue) {
      const { continue: redirectUri, ...rest } = query;
      const params = new URLSearchParams(rest as any);
      return sendRedirect(event, `${redirectUri}?${params.toString()}`);
    }

    return sendRedirect(event, "/profile");
  } catch (error) {
    if (error.code === grpc.status.INVALID_ARGUMENT) {
      const err = new InvalidRequestError(error?.details);
      const params = new URLSearchParams({
        error: err.error,
        error_description: err.error_description,
      });

      return sendRedirect(event, `/signin?${params}`);
    }

    const params = new URLSearchParams({
      error_description: error?.message,
    });

    return sendRedirect(event, `/signin?${params}`);
  }
});
