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
		console.log(this.isAuthenticated);
		if (!this.isAuthenticated) await this.$store.dispatch("GET_USER");
		if (localStorage.getItem("app-name")) this.$store.commit("setCurrentApp", localStorage.getItem("app-name"));
	},
};
</script>
<style lang="scss"></style>
