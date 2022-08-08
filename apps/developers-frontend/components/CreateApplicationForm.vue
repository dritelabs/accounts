<script setup lang="ts">
import { useCreateClientMutation, CreateClientMutationVariables } from '~/graphql/operations/create-client';

const { executeMutation } = useCreateClientMutation();
const modal = useModal('createApplicationModal');
const variables = ref<CreateClientMutationVariables>({
  input: {
    name: '',
    description: '',
    type: ''
  }
});

async function handleSubmit() {
  await executeMutation(variables.value, {
    fetchOptions: {
      headers: useRequestHeaders()
    }
  });

  variables.value.input.name = '';
  variables.value.input.description = '';
  variables.value.input.type = '';

  modal.toggle();
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="field">
      <label class="label"> Name </label>
      <div class="control">
        <input
          class="input"
          type="text"
          name="name"
          placeholder="Text input"
          v-model="variables.input.name"
        />
      </div>
    </div>
    <div class="field">
      <label class="label"> Description </label>
      <div class="control">
        <textarea
          class="textarea"
          name="description"
          placeholder="Textarea"
          v-model="variables.input.description"
        />
      </div>
    </div>
    <div class="field">
      <input
        class="is-checkradio is-small"
        id="web"
        type="radio"
        name="type"
        v-model="variables.input.type"
        value="web"
      />
      <label for="web">
        <strong> Web Application </strong>
      </label>
      <p class="help">
        Server-side applications where authentication and tokens are handled on the server (for example, Go,
        Java, ASP.Net, Node.js, PHP)
      </p>
    </div>
    <div class="field">
      <input
        class="is-checkradio is-small"
        id="browser"
        type="radio"
        name="type"
        v-model="variables.input.type"
        value="browser"
      />
      <label for="browser">
        <strong> Single-page Application </strong>
      </label>
      <p class="help">
        Single-page web applications that run in the browser where the client receives tokens (for example,
        Javascript, Angular, React, Vue)
      </p>
    </div>
    <div class="field">
      <input
        class="is-checkradio is-small"
        id="native"
        type="radio"
        name="type"
        v-model="variables.input.type"
        value="native"
      />
      <label for="native">
        <strong> Native Application </strong>
      </label>
      <p class="help">
        Desktop or mobile applications that run natively on a device and redirect users to a non-HTTP callback
        (for example, iOS, Android, React Native)
      </p>
    </div>
    <footer class="buttons is-flex is-justify-content-end">
      <button type="button" class="button is-link is-light" @click="modal.toggle">Cancel</button>
      <button type="submit" class="button is-link">Create</button>
    </footer>
  </form>
</template>
