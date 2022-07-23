<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const params = new URLSearchParams(route.query as any).toString();
</script>

<template>
	<form method="post" :action="`/api/signup?${params}`" class="is-50w">
		<p
			class="title is-size-3 has-text-weight-bold has-text-link-dark mb-5 has-text-centered"
		>
			Create your Xarples account
		</p>

		<p class="subtitle is-size-6 mb-5 has-text-centered">
			Already have an account? <a href="/signin"> Sign in </a>
		</p>

		<div class="field">
			<label class="label"> Email </label>
			<div class="control">
				<input
					type="email"
					name="email"
					class="input is-normal"
					placeholder="Email:"
				/>
			</div>
		</div>
		<div class="field">
			<label class="label"> Password </label>
			<div class="control">
				<input
					type="password"
					name="password"
					class="input is-normal"
					placeholder="Password:"
				/>
			</div>
		</div>
		<div class="field">
			<label class="label"> Confirm password </label>
			<div class="control">
				<input
					type="password"
					name="password"
					class="input is-normal"
					placeholder="Password:"
				/>
			</div>
		</div>
		<div class="control">
			<button class="button is-link is-dark is-normal is-fullwidth">
				<strong> Sign in </strong>
			</button>
		</div>
		<div
			v-if="route.query.error_description"
			@click="router.push('/signup')"
			class="notification is-danger"
		>
			<button type="button" class="delete"></button>
			{{ route.query.error_description }}
		</div>
	</form>
</template>