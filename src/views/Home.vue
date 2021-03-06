<template>
	<section class="section is-medium">
		<div class="container">
			<h1 class="title">Welcome to {{ currentApp.name }} Application</h1>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},
	created() {
		// debugger;
		console.log(this.currentApp);
	},
};
</script>

<style></style>
