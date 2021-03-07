<template>
	<section class="section">
		<h1 class="title">This is a dashboard for Board</h1>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},
	created() {
		console.log(this.currentApp);
	},
};
</script>

<style></style>
