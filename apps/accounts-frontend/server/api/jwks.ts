import { grpc } from '@drite/accounts-protobuf';
import { Empty } from '@drite/accounts-protobuf/dist/protobuf/core/Empty';
import { JWKS } from '@drite/accounts-protobuf/dist/protobuf/core/JWKS';
import { withIronSession } from '~/lib/session';
import { promisify } from 'util';
import { client } from '~/lib/client';

export default withIronSession(async () => {
  const response = await getJWKS({});

  return response;
});

const getJWKS = promisify<Empty, grpc.Metadata | void, JWKS>(client.getJwks.bind(client));
