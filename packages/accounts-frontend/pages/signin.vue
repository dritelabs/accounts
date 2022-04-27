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
        <div class="column is-6 has-text-centered">
          <p class="title is-1">Join our Community</p>
          <p class="subtitle is-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </main>
</template>
