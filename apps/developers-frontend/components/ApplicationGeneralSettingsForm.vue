<script setup lang="ts">
import { Client } from '~/generated/operations';

const props = defineProps<{ client: Client }>();

const client = ref<Client>(JSON.parse(JSON.stringify(props.client)));
</script>

<template>
  <article class="box is-shadowless">
    <form>
      <p class="title is-4">General settings</p>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> Application name </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input name="name" class="input" type="text" placeholder="Text input" v-model="client.name" />
            </div>
            <p class="help"></p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> Application type </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Text input" disabled :value="client.type" />
            </div>
            <p class="help"></p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> Grant types </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="is-checkradio is-small is-link"
                id="authorization_code"
                type="checkbox"
                name="authorization_code"
                :checked="client.grantTypes.includes('authorization_code')"
                value="authorization_code"
                v-model="client.grantTypes"
              />
              <label for="authorization_code"> Authorization code </label>
              <input
                class="is-checkradio is-small is-link"
                id="client_credentials"
                type="checkbox"
                name="client_credentials"
                :checked="client.grantTypes.includes('client_credentials')"
                value="client_credentials"
                v-model="client.grantTypes"
              />
              <label for="client_credentials"> Client credentials </label>
              <input
                class="is-checkradio is-small is-link"
                id="refresh_token"
                type="checkbox"
                name="refresh_token"
                :checked="client.grantTypes.includes('refresh_token')"
                value="refresh_token"
                v-model="client.grantTypes"
              />
              <label for="refresh_token"> Refresh token </label>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> Refresh token behavior </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="is-checkradio is-small is-link"
                id="rotate"
                type="radio"
                :checked="client.refreshTokenRotationType === 'rotate'"
                value="rotate"
                v-model="client.refreshTokenRotationType"
              />
              <label for="rotate"> Rotate token after every use </label>
              <input
                class="is-checkradio is-small is-link"
                id="static"
                type="radio"
                :checked="client.refreshTokenRotationType === 'static'"
                value="static"
                v-model="client.refreshTokenRotationType"
              />
              <label for="static"> Use persistent token </label>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> Terms of Service URI </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="client.tosUri" />
            </div>
            <p class="help">The location of the Terms of Service page for this application.</p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> Policy URI </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="client.policyUri" />
            </div>
            <p class="help">The location of the Privacy Policy page for this application.</p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> Logo URI </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="client.logoUri" />
            </div>
            <p class="help">
              Location of your logo image. The image must be: In PNG, JPG, or GIF format Smaller than 1 MB in
              size
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label"> Redirect URIs </label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="card is-shadowless is-bordered">
              <header class="card-header is-shadowless p-3 has-background-white-ter">
                <p class="card-header-title"></p>
                <button type="button" class="button is-link is-light" @click="client.redirectUris.push('')">
                  Add redirect URI
                </button>
              </header>
              <div class="card-content">
                <table class="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>URI</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(_, index) in client.redirectUris">
                      <td>
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                          v-model="client.redirectUris[index]"
                        />
                      </td>
                      <td class="is-flex is-justify-content-end">
                        <button
                          type="button"
                          class="button is-link is-light"
                          @click="client.redirectUris.splice(index, 1)"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons is-justify-content-end">
        <button type="button" class="button is-link is-light">Cancel</button>
        <button type="button" class="button is-link">Save</button>
      </div>
    </form>
  </article>
</template>
