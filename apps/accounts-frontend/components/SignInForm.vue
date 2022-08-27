<script setup lang="ts">
const route = useRoute();
const params = new URLSearchParams(route.query as any).toString();
</script>

<template>
  <form method="post" :action="`/api/signin?${params}`" class="is-50w">
    <p class="title is-size-3 has-text-weight-bold mb-5 has-text-centered">Welcome back.</p>
    <p class="subtitle is-size-6 mb-5 has-text-centered">New to Drite? <a href="/signup"> Sign up </a></p>
    <div class="field">
      <label class="label"> Email </label>
      <div class="control">
        <input type="email" name="email" class="input is-medium" placeholder="Email:" />
      </div>
    </div>
    <div class="field">
      <label class="label"> Password </label>
      <div class="control">
        <input type="password" name="password" class="input is-medium" placeholder="Password:" />
      </div>
    </div>
    <button class="button is-primary is-medium is-fullwidth">
      <strong class="mx-4"> Sign in </strong>
      <!-- <font-awesome-icon icon="fa-solid fa-lg fa-lock" /> -->
    </button>
    <NuxtLink to="/signin">
      <button class="button is-ghost is-fullwidth">Forgot password?</button>
    </NuxtLink>
  </form>
</template>
