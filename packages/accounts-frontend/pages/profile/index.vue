<script setup lang="ts">
definePageMeta({
  layout: 'main',
  middleware: ['auth']
});
</script>

<template>
  <main>
    <p class="title is-3">Hi there, welcome</p>
    <p class="subtitle is-6">
      Manage your info, privacy, and security to make Drite work better for you. Learn more
    </p>
  </main>
</template>
