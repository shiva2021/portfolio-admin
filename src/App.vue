<template>
	<div id="app">
		<div id="navbar">
			<Navbar v-if="isAuthenticated"></Navbar>
		</div>
		<router-view />
	</div>
</template>
<script>
import Navbar from "@/components/navbar";
import { mapGetters } from "vuex";
export default {
	components: {
		Navbar,
	},
	computed: {
		...mapGetters(["users", "isAuthenticated"]),
	},
	async created() {
		if (!this.isAuthenticated) await this.$store.dispatch("GET_USER");
	},
};
</script>
<style lang="scss"></style>
