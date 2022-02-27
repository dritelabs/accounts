<script setup lang="ts">
const route = useRoute()
const params = new URLSearchParams(route.query as any).toString()

</script>

<template>
  <form method="post" :action="`/api/signin?${params}`">
    <h1 class="is-size-1 has-text-weight-bold mb-5">Sign in</h1>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          type="email"
          name="email"
          class="input is-medium has-background-light is-border-none"
          placeholder="Email:"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input
          type="password"
          name="password"
          class="input is-medium has-background-light is-border-none"
          placeholder="Password:"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-dark is-medium is-fullwidth">Sign in</button>
    </div>
    <div class="control">
      <a class="is-block is-dark is-fullwidth has-text-black has-text-centered p-3">Forgot password?</a>
    </div>
  </form>
</template>