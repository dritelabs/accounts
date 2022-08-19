<script setup lang="ts">
definePageMeta({
  layout: 'unauthenticated',
  middleware: 'redirect'
});
</script>

<template>
  <main class="is-100vh is-flex is-flex-grow-1 is-justify-content-center is-align-items-stretch">
    <div class="container is-fluid is-100vh">
      <div class="columns mt-0 is-variable is-8 is-100h">
        <div
          class="column is-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-background-link-dark has-text-white"
        >
          <div class="is-75w">
            <p class="title is-1 has-text-white">Drite</p>
            <p class="subtitle is-3 has-text-white">New name, same great account.</p>
            <small class="is-3 has-text-light">
              We changed our name to Wise — because we’re so much more than transfers.
            </small>
          </div>
        </div>
        <div class="column is-8 is-flex is-justify-content-center is-align-items-center has-background-white">
          <SignInForm />
        </div>
      </div>
    </div>
  </main>
</template>
