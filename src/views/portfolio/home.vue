<template>
	<section class="section is-medium">
		<div class="container">
			<h1 class="title">{{ currentApp }}</h1>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},
};
</script>

<style></style>
