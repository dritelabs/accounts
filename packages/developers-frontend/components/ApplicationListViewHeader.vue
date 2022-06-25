<script setup lang="ts">
const modal = useModal("createApplicationModal");
</script>

<template>
	<div class="columns">
		<div class="column is-narrow">
			<p class="title">Applications</p>
		</div>
		<div class="column"></div>
		<div class="column is-narrow">
			<button class="button is-link" @click="modal.toggle">
				<strong> Create Application </strong>
			</button>
		</div>
	</div>
</template>