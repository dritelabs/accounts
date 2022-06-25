<script setup lang="ts">
import {
	useCreateClientMutation,
	CreateClientInput,
} from "~~/generated/operations";

const modal = useModal("createApplicationModal");

const input = ref<CreateClientInput>({
	name: "",
	description: "",
	type: "",
});

const { mutate } = useCreateClientMutation({
	refetchQueries: "active",
});

async function handleSubmit() {
	await mutate({ input: input.value });

	input.value.name = "";
	input.value.description = "";
	input.value.type = "";

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
					v-model="input.name"
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
					v-model="input.description"
				/>
			</div>
		</div>
		<div class="field">
			<input
				class="is-checkradio is-small"
				id="web"
				type="radio"
				name="type"
				v-model="input.type"
				value="web"
			/>
			<label for="web">
				<strong> Web Application </strong>
			</label>
			<p class="help">
				Server-side applications where authentication and tokens are handled on
				the server (for example, Go, Java, ASP.Net, Node.js, PHP)
			</p>
		</div>
		<div class="field">
			<input
				class="is-checkradio is-small"
				id="browser"
				type="radio"
				name="type"
				v-model="input.type"
				value="browser"
			/>
			<label for="browser">
				<strong> Single-page Application </strong>
			</label>
			<p class="help">
				Single-page web applications that run in the browser where the client
				receives tokens (for example, Javascript, Angular, React, Vue)
			</p>
		</div>
		<div class="field">
			<input
				class="is-checkradio is-small"
				id="native"
				type="radio"
				name="type"
				v-model="input.type"
				value="native"
			/>
			<label for="native">
				<strong> Native Application </strong>
			</label>
			<p class="help">
				Desktop or mobile applications that run natively on a device and
				redirect users to a non-HTTP callback (for example, iOS, Android, React
				Native)
			</p>
		</div>
		<footer class="buttons is-flex is-justify-content-end">
			<button class="button is-link is-light" @click="modal.toggle">
				Cancel
			</button>
			<button class="button is-link">Create</button>
		</footer>
	</form>
</template>