<script setup lang="ts">
import { Client } from "~/generated/operations";

const router = useRouter();
const props = defineProps<{ client: Client }>();
</script>

<template>
  <article class="media is-align-items-center is-clickable is-hoverable">
    <figure class="media-left">
      <p class="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div
          class="columns is-justify-content-space-between is-align-items-center"
        >
          <div
            class="column"
            @click="router.push(`/applications/${props.client.id}`)"
          >
            <p>
              <strong>
                {{ props.client?.name }}
              </strong>
              <br />
              <span> Client ID: {{ props?.client?.id }} </span>
            </p>
          </div>
          <div class="column is-flex is-justify-content-end">
            <div class="dropdown is-right is-hoverable">
              <div class="dropdown-trigger">
                <i class="mdi mdi-dots-vertical is-size-4" />
              </div>
              <div class="dropdown-menu" id="dropdown-menu6" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item"> Delete </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>