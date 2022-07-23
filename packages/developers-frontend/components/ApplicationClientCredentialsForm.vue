<script setup lang="ts">
import { Client } from "~/generated/operations";

const props = defineProps<{ client: Client }>();
const modal = useModal("applicationPublicKeyDetailsModal");

const publicKeysConfiguration = useState("publicKeysConfiguration", () =>
	props.client.jwksUri ? "jwks_uri" : "jwks"
);

const client = useState("client", () => props.client);
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
			<div class="field-label is-normal">
				<label class="label"> Client Secret: </label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<div class="columns is-justify-content-space-around">
							<div class="column">
								<input
									class="input"
									type="password"
									placeholder="Text input"
									disabled
									value="0oa4s42dj2BzTxke05d7"
								/>
							</div>
							<div class="column is-narrow">
								<div class="button is-link is-light">Generate new secret</div>
							</div>
						</div>
					</div>
					<p class="help"></p>
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
							id="jwks"
							type="radio"
							value="jwks"
							v-model="publicKeysConfiguration"
						/>
						<label for="jwks"> Save keys in Okta </label>
						<input
							class="is-checkradio is-small is-link"
							id="jwks_uri"
							type="radio"
							value="jwks_uri"
							v-model="publicKeysConfiguration"
						/>
						<label for="jwks_uri"> Use a URL to fetch keys dynamically </label>
					</div>
				</div>
			</div>
		</div>

		<div
			class="field is-horizontal"
			v-show="publicKeysConfiguration === 'jwks_uri'"
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
				publicKeysConfiguration === 'jwks' &&
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
							<button class="button is-link is-light">Generate new key</button>
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
											<a @click="modal.toggle">
												{{ jwk.kid }}
											</a>
										</td>
										<td>
											<ApplicationPublicKeyDetailsModal :jwk="jwk" />
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
			<button class="button is-link is-light">Cancel</button>
			<button class="button is-link">Save</button>
		</div>
	</article>
</template>