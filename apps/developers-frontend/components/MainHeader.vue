<script setup lang="ts">
import { useGetViewerQuery } from '~~/graphql/operations/get-viewer';

const { data } = await useGetViewerQuery({
  context: {
    fetchOptions: {
      headers: useRequestHeaders()
    }
  }
});

const isAuthenticated = computed(() => !!data.value?.viewer);
</script>

<template>
  <nav class="navbar py-1" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">
          <img src="/symbol.svg" />
          <strong :style="{ fontSize: '1.8em', marginLeft: '.3em' }">Drite</strong>
        </NuxtLink>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <NuxtLink class="button is-ghost">
              <strong>Docs</strong>
            </NuxtLink>
            <a class="button is-ghost" href="/api/signin" v-if="!isAuthenticated">
              <strong>Sign in</strong>
            </a>
            <NuxtLink class="button is-ghost" to="/applications" v-else>
              <strong>My Apps</strong>
            </NuxtLink>
            <a class="button is-primary is-light" href="/api/logout" v-if="isAuthenticated">
              <strong>Log out</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
