<script setup lang="ts">
import { Client } from '~/generated/operations';

const props = defineProps<{ jwk: Client['jwks']['keys'][0] }>();
const modal = useModal('applicationPublicKeyDetailsModal');
</script>

<template>
  <div :class="['modal', { 'is-active': modal.isActive.value }]">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Public key</p>
        <button class="delete" aria-label="close" @click="modal.toggle"></button>
      </header>
      <section class="modal-card-body">
        <pre> {{ props.jwk }} </pre>
      </section>
      <footer class="modal-card-foot is-justify-content-end">
        <button class="button is-link is-light" @click="modal.toggle">Cancel</button>
      </footer>
    </div>
  </div>
</template>
