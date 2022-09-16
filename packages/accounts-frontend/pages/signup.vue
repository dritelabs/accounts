<script setup lang="ts">
definePageMeta({
  layout: 'unauthenticated',
  middleware: 'redirect'
});
</script>

<template>
  <main class="is-flex is-flex-grow-1 is-justify-content-center is-align-items-stretch">
    <div class="container is-fluid">
      <div class="columns mt-6 is-8 is-justify-content-center">
        <div class="column is-8 is-flex is-justify-content-center is-align-items-center has-background-white">
          <SignupForm />
        </div>
      </div>
    </div>
  </main>
</template>
