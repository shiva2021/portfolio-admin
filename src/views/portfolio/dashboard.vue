<template>
	<div class="dashboard">
		<Sidebar :closeNav="collapseSidebar" :navitems="items" @onNavigate="onNavigate"></Sidebar>
		<div id="IdPortfolio">
			<span style="font-size: 30px; cursor: pointer;" @click="openNav">&#9776; open</span>
		</div>
	</div>
</template>

<script>
import Sidebar from "@/components/sidebar.vue";
export default {
	components: {
		Sidebar,
	},
	data() {
		return {
			items: [
				{
					name: "Dashboard",
					target: "",
					children: [],
					icon: "fas fa-chart-line",
					hasChevron: false,
				},
				{
					name: "Manage Content",
					target: "content",
					children: [
						{
							name: "Add Content",
							children: [],
							icon: "fas fa-plus",
							hasChevron: false,
						},
					],
					icon: "fas fa-heading",
					hasChevron: true,
				},
				{
					name: "Authorizations",
					target: "roles",
					children: [
						{
							name: "User Roles",
							children: [],
							icon: "fas fa-plus",
							hasChevron: false,
						},
					],
					icon: "fas fa-heading",
					hasChevron: true,
				},
			],
		};
	},
	methods: {
		onNavigate(item) {
			console.log(item.name);
			if (window.matchMedia("(max-width: 769px)").matches) {
				this.collapseSidebar();
			}
		},

		openNav() {
			console.log(window.screen.width);
			document.getElementById("sidebar").classList.add("has-increased-width");

			/** On mobile/tablet screens, the width must occupy the complete width of the screen */
			if (window.matchMedia("(max-width: 769px)").matches) {
				document.getElementById("sidebar").style.width = window.screen.width + "px";
			}

			document.body.classList.add("has-dull-body");
			setTimeout(() => {
				document.getElementById("idsidebar--parent").classList.add("is-not-hidden");
			}, 500);
			document.getElementById("IdPortfolio").classList.add("margin-shift");
		},

		collapseSidebar() {
			document.getElementById("sidebar").classList.remove("has-increased-width");

			/** On mobile/tablet screens, the width must be explicitely set to 0 */
			if (window.matchMedia("(max-width: 769px)").matches) {
				document.getElementById("sidebar").style.width = "0px";
			}
			document.body.classList.remove("has-dull-body");
			document.getElementById("idsidebar--parent").classList.remove("is-not-hidden");
			document.getElementById("IdPortfolio").classList.remove("margin-shift");
		},
	},
};
</script>

<style></style>
