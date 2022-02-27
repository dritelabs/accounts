<script setup lang="ts">
const route = useRoute()

const keyValues = Object.keys(route.query).reduce((prev, current) => {
  if (Array.isArray(route.query[current])) {
    return { ...prev }
  }
  return { ...prev, [current]: route.query[current] }
}, {})

const arrayValues = Object.keys(route.query).reduce((prev, current) => {
  if (!Array.isArray(route.query[current])) {
    return { ...prev }
  }
  return { ...prev, [current]: route.query[current] }
}, {})

const [
  { data: user },
  { data: client },
  { data: scopes },
] = await Promise.all([
  useFetch(`/api/me`, {
    headers: useRequestHeaders()
  }),
  useFetch(`/api/clients/${route.query.client_id}`, {
    headers: useRequestHeaders()
  }),
  useFetch(`/api/scopes`, {
    headers: useRequestHeaders(),
    params: {
      names: route.query?.scope
    }
  })
])

definePageMeta({
  layout: 'authenticated'
})
</script>

<template>
  <main class="is-flex is-flex-grow-1 is-justify-content-center is-align-items-center">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5">
          <p class="title has-text-centered">{{ client?.client_name }}</p>
          <p class="subtitle has-text-centered">wants access to your Driten account:</p>
          <div class="is-flex is-align-items-center is-justify-content-center mb-5">
            <figure class="image mr-2">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png" />
            </figure>
            <span>{{ user?.email }}</span>
          </div>
          <div class="has-border-bottom mb-4" v-for="scope in scopes.items">
            <p class="has-text-weight-bold">{{ scope?.displayName }}</p>
            <p>{{ scope.description }}</p>
          </div>
          <p class="mb-5">
            By clicking allow, you allow this app and Driten to use information
            in accordance with the respective terms of service and privacy policies.
            you can change this and other Account Permissions at any time.
            <!-- https://myaccount.google.com/permissions -->
          </p>
          <form method="post" action="/authorize/allow">
            <input
              v-for="(value, key) in keyValues"
              type="hidden"
              :name="key"
              :value="value"
              :key="key"
            />
            <select v-for="(value, key) in arrayValues" :name="key" multiple hidden>
              <option v-for="(option, key) in value" selected :value="option">{{ option }}</option>
            </select>
            <button type="submit" class="button is-dark is-medium is-fullwidth mb-3">Allow</button>
          </form>
          <form method="post" action="/authorize/cancel">
            <input
              v-for="(value, key) in keyValues"
              type="hidden"
              :name="key"
              :value="value"
              :key="key"
            />
            <select v-for="(value, key) in arrayValues" :name="key" multiple hidden>
              <option v-for="(option, key) in value" selected :value="option">{{ option }}</option>
            </select>
            <button type="submit" class="button is-light is-medium is-fullwidth">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>