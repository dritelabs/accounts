<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="is-100vh">
    <MainHeader />
    <hr class="m-0" />
    <div class="container mt-4">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li>
                <NuxtLink :class="{ 'is-active': route.path === '/profile' }" to="/profile">
                  <strong>Dashboard</strong>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :class="{ 'is-active': route.path === '/profile/personal-info' }"
                  to="/profile/personal-info"
                >
                  <strong>Personal info</strong>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :class="{ 'is-active': route.path === '/profile/security' }" to="/profile/security">
                  <strong>Security</strong>
                </NuxtLink>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
