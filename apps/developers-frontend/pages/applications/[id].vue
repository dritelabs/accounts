<script setup lang="ts">
import { useGetClientQuery } from '~/graphql/operations/get-client';

const route = useRoute();

useProvideModal('applicationPublicKeyDetailsModal');
useProvideModal('applicationJWKPairModal');

const headers = useRequestHeaders();

const { data, fetching } = await useGetClientQuery({
  variables: {
    id: route.params.id as string
  },
  context: {
    fetchOptions: {
      headers: useRequestHeaders()
    }
  }
});
</script>

<template>
  <div class="container">
    <div class="columns mt-5 is-justify-content-center" v-if="!fetching">
      <div class="column is-12">
        <ApplicationDetailsForm :client="data.client" />
        <!-- <ApplicationGeneralSettingsForm :client="result?.client" /> -->
        <hr />
        <!-- <ApplicationClientCredentialsForm :client="result?.client" /> -->
      </div>
    </div>
  </div>
</template>
