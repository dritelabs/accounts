import { client, prisma } from '@drite/accounts-db';
import { decodeToken } from '@drite/accounts-utils';
import { grpc } from '@drite/accounts-protobuf';
import { AccountHandlers } from '@drite/accounts-protobuf/dist/protobuf/accounts/Account';
import { randomBytes } from '@drite/accounts-utils';
import { withAuth } from '../lib/with-auth';
import { clientMessageReducer } from '../utils';

export const createClient = withAuth<AccountHandlers['CreateClient']>(
  ['clients:read'],
  async (call, callback) => {
    try {
      const metadata = call.metadata.getMap();
      const decoded = await decodeToken(metadata.authorization as string);

      const created = await client.client.create({
        data: {
          ...call.request,
          type: call.request.type as prisma.ApplicationType,
          userId: decoded.sub!,
          secret: randomBytes(32).toString('hex')
        }
      });

      callback(null, clientMessageReducer(created));
    } catch (e) {
      const error = e as Error;

      callback({
        ...error,
        code: grpc.status.UNKNOWN
      });
    }
  }
);
