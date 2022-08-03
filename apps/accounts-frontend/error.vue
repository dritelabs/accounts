<template>
  <div class="container">
    <h1>{{ error.message }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object
});

const handleError = () => clearError({ redirect: '/' });
</script>
