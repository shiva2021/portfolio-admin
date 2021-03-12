<template>
	<div class="dashboard">
		<Sidebar @onclick="onItemClick" :isOpen="isNavOpen" @close="toggleNav" :navitems="items"></Sidebar>
		<div id="maincontent" class="">
			<div class="menu p-3">
				<span class="is-size-4" style="cursor: pointer;" @click="toggleNav">
					<i class="fas fa-bars"></i>
				</span>
			</div>
			<router-view></router-view>
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
					path: "",
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
						{
							name: "User Permissions",
							path: "permissions",
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

		onItemClick(item) {
			console.log(`/app/${this.currentApp.text}/${item.path}`);
			this.$router.push(`/app/${this.currentApp.text}/${item.path}`);
		},
	},
};
</script>

<style></style>
