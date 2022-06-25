<script setup lang="ts">
import {
  Client,
  useAddJwkToClientMutation,
  useCreateJwkPairMutation,
  useUpdateClientMutation,
  useUpdateClientSecretMutation,
} from "~/generated/operations";

const props = defineProps<{ client: Client }>();
const modal = useModal("applicationPublicKeyDetailsModal");
const applicationJWKPairModal = useModal("applicationJWKPairModal");

const client = ref<Client>(JSON.parse(JSON.stringify(props.client)));
const currentPrivateKey = ref("");
const currentPublicKey = ref("");

const { mutate: updateClient } = useUpdateClientMutation(() => ({
  variables: {
    input: {
      id: client.value.id,
      contacts: client.value.contacts,
      description: client.value.description,
      grantTypes: client.value.grantTypes,
      jwksUri: client.value.jwksUri,
      logoUri: client.value.logoUri,
      name: client.value.name,
      policyUri: client.value.policyUri,
      publicKeysConfiguration: client.value.publicKeysConfiguration,
      redirectUris: client.value.redirectUris,
      refreshTokenRotationType: client.value.refreshTokenRotationType,
      responseTypes: client.value.responseTypes,
      softwareId: client.value.softwareId,
      softwareVersion: client.value.softwareVersion,
      tokenEndpointAuthMethod: client.value.tokenEndpointAuthMethod,
      tosUri: client.value.tosUri,
      uri: client.value.uri,
    },
  },
}));

const { mutate: updateClientSecret } = useUpdateClientSecretMutation(() => ({
  refetchQueries: "active",
  variables: {
    input: {
      id: client.value.id,
    },
  },
}));

const { mutate: createJWKPairMutation } = useCreateJwkPairMutation(() => ({
  refetchQueries: "active",
}));

const { mutate: addJWKToClientMutation } = useAddJwkToClientMutation(() => ({
  refetchQueries: "active",
  variables: {
    input: {
      clientId: client.value.id,
      jwk: currentPublicKey.value,
    },
  },
}));

async function handleCreateJWKPairMutationClick() {
  const response = await createJWKPairMutation();

  currentPrivateKey.value = response.data.createJWKPair.privateKey;
  currentPublicKey.value = response.data.createJWKPair.publicKey;

  applicationJWKPairModal.toggle();
}

async function handleJWKPairSave() {
  await addJWKToClientMutation();

  applicationJWKPairModal.toggle();
}

async function handleSetPublicKeyClick(jwk: any) {
  currentPublicKey.value = jwk;

  modal.toggle();
}
</script>

<template>
  <article class="box is-shadowless">
    <p class="title is-4">Client credentials</p>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label"> Client ID </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              disabled
              :value="client.id"
            />
          </div>
          <p class="help">
            Public identifier for the client that is required for all OAuth
            flows.
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label"> Client Authentication </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="is-checkradio is-small is-link"
              id="client_secret_basic"
              type="radio"
              value="client_secret_basic"
              :checked="
              	client.tokenEndpointAuthMethod === 'client_secret_basic'
              "
              v-model="client.tokenEndpointAuthMethod"
            />
            <label for="client_secret_basic"> Client secret </label>
            <input
              class="is-checkradio is-small is-link"
              id="private_key_jwt"
              type="radio"
              value="private_key_jwt"
              :checked="client.tokenEndpointAuthMethod === 'private_key_jwt'"
              v-model="client.tokenEndpointAuthMethod"
            />
            <label for="private_key_jwt"> Public key / Private key </label>
          </div>
        </div>
      </div>
    </div>

    <div
      class="field is-horizontal"
      v-show="client.tokenEndpointAuthMethod === 'client_secret_basic'"
    >
      <div class="field-label">
        <label class="label"> Client Secret </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="card is-shadowless is-bordered">
            <header
              class="card-header is-shadowless p-3 has-background-white-ter"
            >
              <p class="card-header-title" />
              <div class="buttons">
                <button
                  type="button"
                  class="button is-ghost"
                  @click="updateClientSecret()"
                >
                  Generate new secret
                </button>
              </div>
            </header>
            <div class="card-content">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Secret</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                        disabled
                        :value="props.client.secret"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="field is-horizontal"
      v-show="client.tokenEndpointAuthMethod === 'private_key_jwt'"
    >
      <div class="field-label is-normal">
        <label class="label"> Public keys configuration </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="is-checkradio is-small is-link"
              id="local"
              type="radio"
              value="local"
              v-model="client.publicKeysConfiguration"
            />
            <label for="local"> Save keys local </label>
            <input
              class="is-checkradio is-small is-link"
              id="remote"
              type="radio"
              value="remote"
              v-model="client.publicKeysConfiguration"
            />
            <label for="remote"> Use a URL to fetch keys dynamically </label>
          </div>
        </div>
      </div>
    </div>

    <div
      class="field is-horizontal"
      v-show="
      	client.tokenEndpointAuthMethod === 'private_key_jwt' &&
      	client.publicKeysConfiguration === 'remote'
      "
    >
      <div class="field-label is-normal">
        <label class="label"> URL: </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="client.jwksUri"
            />
          </div>
          <p class="help"></p>
        </div>
      </div>
    </div>

    <div
      class="field is-horizontal"
      v-show="
      	client.publicKeysConfiguration === 'local' &&
      	client.tokenEndpointAuthMethod === 'private_key_jwt'
      "
    >
      <div class="field-label is-normal"></div>
      <div class="field-body">
        <div class="field">
          <div class="card is-shadowless is-bordered">
            <header
              class="card-header is-shadowless p-3 has-background-white-ter"
            >
              <p class="card-header-title" />
              <button
                type="button"
                class="button is-link is-light"
                @click="handleCreateJWKPairMutationClick"
              >
                Generate new key
              </button>
            </header>
            <div class="card-content">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>KID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="jwk in props?.client?.jwks?.keys">
                    <td>
                      <a @click="handleSetPublicKeyClick(jwk)">
                        {{ jwk.kid }}
                      </a>
                    </td>
                    <td>
                      <ApplicationPublicKeyDetailsModal
                        :jwk="currentPublicKey"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

    <hr />

    <p class="title is-4">Application</p>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label"> Application name </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              name="name"
              class="input"
              type="text"
              placeholder="Text input"
              v-model="client.name"
            />
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
            <input
              class="input"
              type="text"
              placeholder="Text input"
              disabled
              :value="client.type"
            />
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
        <label class="label"> Terms of Service URI </label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="client.tosUri"
            />
          </div>
          <p class="help">
            The location of the Terms of Service page for this application.
          </p>
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
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="client.policyUri"
            />
          </div>
          <p class="help">
            The location of the Privacy Policy page for this application.
          </p>
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
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="client.logoUri"
            />
          </div>
          <p class="help">
            Location of your logo image. The image must be: In PNG, JPG, or GIF
            format Smaller than 1 MB in size
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
            <header
              class="card-header is-shadowless p-3 has-background-white-ter"
            >
              <p class="card-header-title"></p>
              <button
                type="button"
                class="button is-link is-light"
                @click="client.redirectUris.push('')"
              >
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

    <hr />

    <div class="buttons is-justify-content-end">
      <button type="button" class="button is-link is-light">Cancel</button>
      <button type="button" class="button is-link" @click="updateClient()">
        Save
      </button>
    </div>
    <ApplicationJWKPairModal
      :private-key="currentPrivateKey"
      :public-key="currentPublicKey"
      @save="handleJWKPairSave"
    />
  </article>
</template>