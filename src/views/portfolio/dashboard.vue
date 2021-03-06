<template>
	<div>
		<h1 class="title">This is a dashboard for Portfolio Application</h1>
	</div>
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
