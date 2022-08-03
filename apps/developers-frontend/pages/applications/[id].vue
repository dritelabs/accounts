<script setup lang="ts">
import { useGetClientQuery } from '~/generated/operations';

const route = useRoute();

useProvideModal('applicationPublicKeyDetailsModal');
useProvideModal('applicationJWKPairModal');

const headers = useRequestHeaders();

const { result, loading } = await useGetClientQuery(
  {
    id: route.params.id as string
  },
  {
    context: {
      headers
    }
  }
);
</script>

<template>
  <div class="container">
    <div class="columns mt-5 is-justify-content-center" v-if="!loading">
      <div class="column is-12">
        <ApplicationDetailsForm :client="result.client" />
        <!-- <ApplicationGeneralSettingsForm :client="result?.client" /> -->
        <hr />
        <!-- <ApplicationClientCredentialsForm :client="result?.client" /> -->
      </div>
    </div>
  </div>
</template>
