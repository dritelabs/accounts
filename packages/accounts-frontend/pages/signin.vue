<script setup lang="ts">
definePageMeta({
  layout: 'unauthenticated'
})
</script>

<template>
  <main class="is-flex is-flex-grow-1 is-justify-content-center is-align-items-center">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5">
          <SignInForm />
        </div>
      </div>
    </div>
  </main>
</template>
