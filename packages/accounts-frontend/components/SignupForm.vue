<script setup lang="ts">
const payload = useState('payload', () => ({
  email: '',
  password: '',
  confirmPassword: ''
}))

async function handleSubmit() {
  try {
    await $fetch('/api/signup', {
      method: 'POST',
      body: payload.value,
    })
  } catch (e) {
    console.log(e.response.statusText)
  }
}
</script>


<template>
  <form @submit.prevent="handleSubmit">
    <h1 class="is-size-1 has-text-weight-bold mb-5">Create an account</h1>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input is-medium has-background-light is-border-none"
          type="email"
          placeholder="Email:"
          v-model="payload.email"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input
          class="input is-medium has-background-light is-border-none"
          type="password"
          placeholder="Password:"
          v-model="payload.password"
        />
      </div>
    </div>
    <div class="field mb-4">
      <label class="label">Confirm password</label>
      <div class="control">
        <input
          class="input is-medium has-background-light is-border-none"
          type="password"
          placeholder="Password:"
          v-model="payload.confirmPassword"
        />
      </div>
    </div>
    <div class="control">
      <button type="submit" class="button is-dark is-medium is-fullwidth">Create account</button>
    </div>
    <div class="control">
      <a
        class="is-block is-dark is-fullwidth has-text-black has-text-centered p-3"
      >Do you have an account?</a>
    </div>
  </form>
</template>