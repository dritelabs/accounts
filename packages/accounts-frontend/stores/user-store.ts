import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      this.user = await useFetch("/api/me", {
        headers: useRequestHeaders(),
      }).data;
    },
  },
});
