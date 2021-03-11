<template>
	<router-view></router-view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},
	beforeRouteEnter(to, from, next) {
		if (to.name === "app-home") {
			next({ path: "/" });
		} else {
			next();
		}
	},
};
</script>

<style></style>
