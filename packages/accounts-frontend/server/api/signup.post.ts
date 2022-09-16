import { InvalidRequestError } from '@dritelabs/accounts-errors';
import { grpc } from '@dritelabs/accounts-protobuf';
import { withIronSession } from '~/lib/session';
import { user as userService } from '~/services';

export default withIronSession(async (event) => {
  try {
    const body = await readRawBody(event);
    const params = new URLSearchParams(body as string);

    await userService.createUser({
      confirmPassword: params.get('confirmPassword'),
      email: params.get('email'),
      firstName: params.get('firstName'),
      lastName: params.get('lastName'),
      password: params.get('password')
    });

    return sendRedirect(event, '/signin');
  } catch (error) {
    if ([grpc.status.INVALID_ARGUMENT, grpc.status.ALREADY_EXISTS].includes(error?.code)) {
      const err = new InvalidRequestError(error?.details);
      const params = new URLSearchParams({
        error: err.error,
        error_description: err.error_description
      });

      return sendRedirect(event, `/signup?${params}`);
    }

    const params = new URLSearchParams({
      error_description: error?.message
    });

    return sendRedirect(event, `/signup?${params}`);
  }
});
