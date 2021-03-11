<template>
	<div class="dashboard">
		<Sidebar :isOpen="isNavOpen" @close="toggleNav" :navitems="items"></Sidebar>
		<div id="IdPortfolio" class="pt-3">
			<div class="menu pl-3 pb-3">
				<h1 class="subtitle">
					<span class="is-size-4" style="cursor: pointer;" @click="toggleNav">&#9776;</span>
					Menu
				</h1>
			</div>
			<section class="section is-medium has-background-dark">
				<h1 class="title">Dashboard</h1>
			</section>
		</div>
	</div>
</template>

<script>
import Sidebar from "@/components/sidebar.vue";
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},
	components: {
		Sidebar,
	},
	data() {
		return {
			items: [
				{
					name: "Dashboard",
					path: "dashboard",
					target: "",
					children: [],
					icon: "fas fa-chart-line",
				},
				{
					name: "Manage Content",
					target: "content",
					children: [
						{
							name: "Add Content",
							path: "addcontent",
							children: [],
							icon: "fas fa-plus",
						},
					],
					icon: "fas fa-heading",
				},
				{
					name: "Authorizations",
					target: "roles",
					children: [
						{
							name: "User Roles",
							path: "roles",
							children: [],
							icon: "fas fa-plus",
						},
					],
					icon: "fas fa-heading",
				},
			],
			isNavOpen: false,
		};
	},
	methods: {
		toggleNav() {
			this.isNavOpen = !this.isNavOpen;
		},
	},
};
</script>

<style></style>
