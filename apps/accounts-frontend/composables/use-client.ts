import { Client } from '@drite/accounts-protobuf/dist/protobuf/core/Client';

export function useClient(id: string) {
  return useFetch<Client, any>(`/api/clients/${id}`);
}
