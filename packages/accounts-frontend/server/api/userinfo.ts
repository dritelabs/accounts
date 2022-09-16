import { grpc } from '@dritelabs/accounts-protobuf';
import { withIronSession } from '~/lib/session';
import { user as userService } from '~/services';

export default withIronSession(async (event) => {
  try {
    const metadata = new grpc.Metadata();

    metadata.set('authorization', event.req.session.user?.accessToken);

    const user = await userService.getUserInfo({}, metadata);

    return user;
  } catch (e) {
    const metadata = e.metadata.getMap();

    event.res.statusCode = parseInt(metadata?.code) || 500;

    return {
      error: metadata?.error || 'server_error',
      error_description: metadata?.error_description
    };
  }
});
