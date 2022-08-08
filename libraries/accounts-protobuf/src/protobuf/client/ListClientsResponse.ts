// Original file: proto/client.proto

import type { Client as _core_Client, Client__Output as _core_Client__Output } from '../core/Client';

export interface ListClientsResponse {
  'clients'?: (_core_Client)[];
  'nextPageToken'?: (string);
}

export interface ListClientsResponse__Output {
  'clients': (_core_Client__Output)[];
  'nextPageToken': (string);
}
