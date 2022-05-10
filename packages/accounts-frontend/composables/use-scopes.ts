interface Options {
  filters?: {
    names: string[];
  };
}

export function useScopes(options?: Options) {
  return useFetch("/api/scopes", {
    headers: useRequestHeaders(),
    params: options?.filters,
  });
}
