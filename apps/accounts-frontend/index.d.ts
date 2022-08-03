declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {}
  interface PrivateRuntimeConfig {
    host: string;
    serverHost: string;
    memcachedHost: string;
    secretCookiePassword: string;
    authorizationCodeExpirationTime: string | number;
    accessTokenExpirationTime: string | number;
    refreshTokenExpirationTime: string | number;
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {};
