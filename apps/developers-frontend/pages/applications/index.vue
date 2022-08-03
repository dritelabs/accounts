<script setup lang="ts">
import { useGetClientsQuery } from '~/generated/operations';

useProvideModal('createApplicationModal');

const headers = useRequestHeaders();

const { result } = useGetClientsQuery({
  context: {
    headers
  }
});
</script>

<template>
  <div class="container">
    <ApplicationListViewHeader />
    <ApplicationListItem v-for="client in result?.clients" :key="client.id" :client="client" />
    <CreateApplicationModal />
  </div>
</template>
