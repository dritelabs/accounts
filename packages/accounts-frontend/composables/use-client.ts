import { Client } from "~/services/client";

export function useClient(id: string) {
  return useFetch<Client>(`/api/clients/${id}`);
}
