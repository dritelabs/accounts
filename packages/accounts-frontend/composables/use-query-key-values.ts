export function useQueryKeyValues() {
  const route = useRoute();

  return Object.keys(route.query).reduce((prev, current) => {
    if (Array.isArray(route.query[current])) {
      return { ...prev };
    }
    return { ...prev, [current]: route.query[current] };
  }, {});
}
