export default defineNuxtRouteMiddleware(async (to, from) => {
  const currentUser = await $fetch('/api/me', {
    headers: useRequestHeaders()
  });

  if (currentUser?.isAuthenticated) {
    if (to.query?.continue) {
      const { continue: redirectUri, ...rest } = to.query;
      const params = new URLSearchParams(rest as any);

      return navigateTo(`${redirectUri}&${params.toString()}`);
    }

    return navigateTo('/profile');
  }
});
