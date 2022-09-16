import { grpc } from '@dritelabs/accounts-protobuf';
import { withIronSession } from '~/lib/session';
import { client as clientService } from '~/services';

export default withIronSession(async (event) => {
  try {
    const client = await clientService.getClient({
      id: event.context.params.id
    });

    return client;
  } catch (error) {
    if (error?.code === grpc.status.NOT_FOUND) {
      event.res.statusCode = 404;

      return {
        error: 'not_found',
        error_description: 'Client does not exist'
      };
    }
  }
});
