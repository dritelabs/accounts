import { client } from '@dritelabs/accounts-db';
import { hash } from '@dritelabs/accounts-utils';
import { grpc } from '@dritelabs/accounts-protobuf';
import { AccountHandlers } from '@dritelabs/accounts-protobuf/dist/protobuf/accounts/Account';

export const createUser: AccountHandlers['CreateUser'] = async (call, callback) => {
  try {
    const payload = call.request;
    const hashed = await hash(payload.password);
    const found = await client.user.findFirst({
      where: {
        email: payload.email
      }
    });

    if (found) {
      return callback({
        code: grpc.status.ALREADY_EXISTS,
        message: 'User already exist'
      });
    }

    const created = await client.user.create({
      data: {
        email: payload.email,
        password: hashed,
        profile: {}
      }
    });

    callback(null, {
      id: created.id,
      email: created.email,
      username: created.username!,
      createdAt: created.createdAt.toISOString(),
      updatedAt: created.updatedAt.toISOString()
    });
  } catch (e) {
    const error = e as Error;

    callback({
      ...error,
      code: grpc.status.UNKNOWN
    });
  }
};
