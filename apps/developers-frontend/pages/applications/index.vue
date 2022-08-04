<script setup lang="ts">
import { useGetClientsQuery } from '~/graphql/operations/get-clients';

useProvideModal('createApplicationModal');

const { data } = await useGetClientsQuery({
  context: {
    fetchOptions: {
      headers: useRequestHeaders()
    }
  }
});
</script>

<template>
  <div class="container">
    <ApplicationListViewHeader />
    <ApplicationListItem v-for="client in data?.clients" :key="client.id" :client="client" />
    <CreateApplicationModal />
  </div>
</template>
