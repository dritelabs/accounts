<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const params = new URLSearchParams(route.query as any).toString();
</script>

<template>
  <form method="post" :action="`/api/signup?${params}`" class="is-50w">
    <p class="title is-size-3 has-text-weight-bold mb-5 has-text-centered">Create your Drite account</p>

    <p class="subtitle is-size-6 mb-5 has-text-centered">
      Already have an account? <a href="/signin"> Sign in </a>
    </p>
    <div class="field is-grouped">
      <div class="control is-expanded">
        <div class="field">
          <label class="label">First name</label>
          <div class="control">
            <input type="text" name="firstName" class="input is-medium" placeholder="First name:" />
          </div>
        </div>
      </div>
      <div class="control is-expanded">
        <div class="field">
          <label class="label">Last name</label>
          <div class="control">
            <input type="text" name="lastName" class="input is-medium" placeholder="Last name:" />
          </div>
        </div>
      </div>
    </div>
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
    <div class="field">
      <label class="label"> Confirm password </label>
      <div class="control">
        <input type="password" name="confirmPassword" class="input is-medium" placeholder="Password:" />
      </div>
    </div>
    <button class="button is-link is-dark is-medium is-fullwidth">
      <strong> Sign up </strong>
    </button>
    <div v-if="route.query.error_description" @click="router.push('/signup')" class="notification is-danger">
      <button type="button" class="delete"></button>
      {{ route.query.error_description }}
    </div>
  </form>
</template>
