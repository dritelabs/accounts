import { grpc } from '@dritelabs/accounts-protobuf';
import { withIronSession } from '~/lib/session';
import { user as userService } from '~/services';

export default withIronSession(async (event) => {
  try {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', event.req.session.user?.accessToken);

    const user = await userService.getUserInfo({}, metadata);

    return user;
  } catch (error) {
    if (error.code === grpc.status.PERMISSION_DENIED) {
      event.res.statusCode = 401;
      // event.res.setHeader(' WWW-Authenticate', 'Bearer');

      return {
        error: error.message
      };
      // event.res.end(error.message);
    }
  }
});
