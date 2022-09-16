<script setup lang="ts">
import {
  AuthorizationRequest,
  validateAuthorizationRequest
} from '~/services/authorization-code/validate-authorization-request';
import { AsyncReturnType } from '..';

const validationError = ref<any>(undefined);
const route = useRoute();
const keyValues = useQueryKeyValues();
const arrayValues = useQueryArrayValues();
const scopeNames = route.query?.scope ? (route.query.scope as string).split(' ') : [];

const validation = (await validateAuthorizationRequest(route.query as AuthorizationRequest).catch((err) => {
  validationError.value = err;
})) as AsyncReturnType<typeof validateAuthorizationRequest>;

const { data: client, error: clientError } = await useClient(validation?.client_id);

const { data: user } = await useUser();
const { data: scopes } = await useScopes({
  filters: {
    names: route.query?.scope as string[]
  }
});

definePageMeta({
  middleware: ['auth']
});
// onMounted(() => {
//   if (client.value?.isFirstParty) {
//     const form = document.querySelector<HTMLFormElement>("#form-allow");

//     form.submit();
//   }
// });
</script>

<template>
  <main class="is-flex is-flex-grow-1 is-justify-content-center is-align-items-center">
    <section class="section is-flex is-flex-grow-1 is-justify-content-center is-align-items-center">
      <div class="container" v-if="validationError">
        {{ validationError?.message }}
      </div>
      <div class="container" v-else-if="clientError">
        {{ clientError?.data?.error_description }}
      </div>
      <div class="container" v-else-if="!client?.redirectUris.includes(validation.redirect_uri)">
        The client is not authorized to request an authorization code using this method.
      </div>
      <div class="container" v-else-if="!client?.grantTypes?.includes(validation.response_type)">
        The redirect_uri is invalid
      </div>
      <div class="container" v-else-if="!scopeNames.length || scopeNames.length !== scopes.items?.length">
        The requested scope is invalid, unknown, or malformed
      </div>
      <!-- v-show="!client.is_first_party" -->
      <div class="container" v-else>
        <div class="columns is-centered">
          <div class="column is-5">
            <p class="title has-text-centered">{{ client?.name }}</p>
            <p class="subtitle has-text-centered">wants access to your Driten account:</p>
            <div class="is-flex is-align-items-center is-justify-content-center mb-5">
              <figure class="image mr-2">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png" />
              </figure>
              <span> {{ user?.email }} </span>
            </div>
            <div class="has-border-bottom mb-4" v-for="scope in scopes?.items">
              <p class="has-text-weight-bold">{{ scope?.displayName }}</p>
              <p>{{ scope.description }}</p>
            </div>
            <p class="mb-5">
              By clicking allow, you allow this app and Driten to use information in accordance with the
              respective terms of service and privacy policies. you can change this and other Account
              Permissions at any time.
              <!-- https://myaccount.google.com/permissions -->
            </p>
            <form id="form-allow" method="post" action="/api/authorize/allow">
              <input v-for="(value, key) in keyValues" type="hidden" :name="key" :value="value" :key="key" />
              <select v-for="(value, key) in arrayValues" :name="key" multiple hidden>
                <option v-for="(option, key) in value" selected :value="option">
                  {{ option }}
                </option>
              </select>
              <button type="submit" class="button is-primary is-medium is-fullwidth mb-3">
                <strong>Allow</strong>
              </button>
            </form>
            <form method="post" action="/api/authorize/cancel">
              <input v-for="(value, key) in keyValues" type="hidden" :name="key" :value="value" :key="key" />
              <select v-for="(value, key) in arrayValues" :name="key" multiple hidden>
                <option v-for="option in value" selected :value="option">
                  {{ option }}
                </option>
              </select>
              <button type="submit" class="button is-primary is-light is-medium is-fullwidth">
                <strong>Cancel</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
