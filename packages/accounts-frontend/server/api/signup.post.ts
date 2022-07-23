import { InvalidRequestError } from "@driten/accounts-errors";
import { grpc } from "@driten/accounts-protobuf";
import { withIronSession } from "~/lib/session";
import { user as userService } from "~/services";

export default withIronSession(async (event) => {
  try {
    const body = await useRawBody(event);
    const params = new URLSearchParams(body as string);

    console.log({
      email: params.get("email"),
      password: params.get("password"),
    });

    await userService.createUser({
      email: params.get("email"),
      password: params.get("password"),
    });

    return sendRedirect(event, "/signin");
  } catch (error) {
    if (
      [grpc.status.INVALID_ARGUMENT, grpc.status.ALREADY_EXISTS].includes(
        error?.code
      )
    ) {
      const err = new InvalidRequestError(error?.details);
      const params = new URLSearchParams({
        error: err.error,
        error_description: err.error_description,
      });

      return sendRedirect(event, `/signup?${params}`);
    }

    const params = new URLSearchParams({
      error_description: error?.message,
    });

    return sendRedirect(event, `/signup?${params}`);
  }
});
