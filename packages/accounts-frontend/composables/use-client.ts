import { Client } from "@driten/accounts-protobuf/dist/protobuf/core/Client";

export function useClient(id: string) {
  return useFetch<Client, any>(`/api/clients/${id}`);
}
