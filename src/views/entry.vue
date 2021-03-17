<template>
	<div>
		<section class="section is-medium has-background-light">
			<div class="container">
				<h1 class="title has-text-dark pl-4">Manage Your Applications</h1>
			</div>
		</section>

		<section class="section">
			<div class="columns">
				<div class="column is-one-third" v-for="(app, i) in apps" :key="i" @click.prevent="navigate(app)">
					<div class="tile is-parent">
						<article class="tile is-child notification is-primary">
							<p class="title">{{ app.name }}</p>
							<p class="subtitle">Go To Dashboard</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},
	created() {},
	data() {
		return {
			apps: [
				{
					name: "Barter",
					text: "barter",
				},
				{
					name: "Portfolio",
					text: "portfolio",
				},
			],
		};
	},
	methods: {
		navigate(app) {
			console.log(app);
			this.$router.push(`/app/${app.text}`);
		},
	},
};
</script>

<style lang="scss" scoped>
.column:hover {
	cursor: pointer;
}
</style>
