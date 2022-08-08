<script setup lang="ts">
import { Client } from '~/graphql/operations/schema';

const router = useRouter();
const props = defineProps<{ client: Client }>();
</script>

<template>
  <div
    class="card is-shadowless is-clickable is-hoverable"
    @click="router.push(`/applications/${props.client.id}`)"
  >
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ props.client?.name }}
          </p>
          <p class="subtitle is-6">Client ID: {{ props?.client?.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <article class="media is-align-items-center is-clickable">
    <figure class="media-left">
      <p class="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div class="columns is-justify-content-space-between is-align-items-center">
          <div class="column" @click="router.push(`/applications/${props.client.id}`)">
            <p>
              <strong>
                {{ props.client?.name }}
              </strong>
              <br />
              <span> Client ID: {{ props?.client?.id }} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template> -->
