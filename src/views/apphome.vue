<template>
	<router-view></router-view>
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
