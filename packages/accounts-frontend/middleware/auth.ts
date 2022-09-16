export default defineNuxtRouteMiddleware(async (to, from) => {
  // const { $config, ssrContext } = useNuxtApp();
  const currentUser = await $fetch('/api/me', {
    headers: useRequestHeaders()
  });

  if (!currentUser?.isAuthenticated) {
    return `/signin?continue=${to.fullPath}`;
  }
});
