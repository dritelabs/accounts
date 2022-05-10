export function useUser() {
  return useFetch("/api/me", {
    headers: useRequestHeaders(),
  });
}
