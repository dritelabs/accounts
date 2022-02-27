<script setup lang="ts">
const headers = useRequestHeaders()
const { data } = await useFetch('/api/me', {
  headers
})
</script>

<template>
  <main>
    <div>{{ data?.id }}</div>
  </main>
</template>