<script setup lang="ts">
const modal = useModal("createApplicationModal");
</script>

<template>
  <div :class="['modal', { 'is-active': modal.isActive.value }]">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Application</p>
        <button class="delete" aria-label="close" @click="modal.toggle"></button>
      </header>
      <section class="modal-card-body">
        <CreateApplicationForm />
      </section>
      <!-- <footer class="modal-card-foot is-justify-content-end">
        <button class="button is-link is-light" @click="modal.toggle">
          Cancel
        </button>
        <button class="button is-link"> Create </button>
      </footer> -->
    </div>
  </div>
</template>