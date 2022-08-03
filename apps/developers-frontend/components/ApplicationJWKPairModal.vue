<script setup lang="ts">
import { Client } from '~/generated/operations';

const props = defineProps<{ privateKey: any; publicKey: any }>();

const emit = defineEmits(['save']);

const modal = useModal('applicationJWKPairModal');
</script>

<template>
  <div :class="['modal', { 'is-active': modal.isActive.value }]">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add a public key</p>
        <button class="delete" aria-label="close" @click="modal.toggle"></button>
      </header>
      <section class="modal-card-body">
        <p class="mb-2">
          <strong> Public key </strong>
        </p>
        <pre class="mb-4"> {{ props.publicKey }} </pre>
        <p class="">
          <strong> Private key - Copy this! </strong>
        </p>
        <p class="mb-2">
          The private key appears only once for enhanced security. Copy this key and store it somewhere safe
          for use later.
        </p>
        <pre> {{ props.privateKey }} </pre>
      </section>
      <footer class="modal-card-foot is-justify-content-end">
        <button class="button is-link is-light" @click="modal.toggle">Cancel</button>
        <button class="button is-link" @click="emit('save', props.publicKey)">Save</button>
      </footer>
    </div>
  </div>
</template>
