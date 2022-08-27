<script setup lang="ts">
const route = useRoute();
const { $bulmaToast } = useNuxtApp();

onMounted(() => {
  route.query.error_description &&
    $bulmaToast({
      type: 'is-danger',
      message: route.query.error_description as string
    });
});
</script>

<template>
  <div class="is-100vh is-flex is-flex-direction-column">
    <Header />
    <hr class="m-0" />
    <div>
      <slot />
    </div>
  </div>
</template>
