import { promisify } from 'util';
import { grpc } from '@dritelabs/accounts-protobuf';
import { InvalidateTokenRequest } from '@dritelabs/accounts-protobuf/dist/protobuf/token/InvalidateTokenRequest';
import { InvalidateTokenResponse } from '@dritelabs/accounts-protobuf/dist/protobuf/token/InvalidateTokenResponse';
import { client } from '~/lib/client';

export const invalidateToken = promisify<
  InvalidateTokenRequest,
  grpc.Metadata | void,
  InvalidateTokenResponse
>(client.InvalidateToken.bind(client));
