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

export type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

// It is always important to ensure you import/export something when augmenting a type
export {};
