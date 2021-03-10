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
			],
		};
	},
	methods: {
		onNavigate(item) {
			console.log(item.name);
		},

		openNav() {
			document.getElementById("sidebar").classList.add("has-increased-width");
			document.body.classList.add("has-dull-body");
			setTimeout(() => {
				document.getElementsByClassName("sidebar--parent")[0].style.display = "block";
			}, 500);
			document.getElementById("IdPortfolio").classList.add("margin-shift");
		},

		collapseSidebar() {
			document.getElementById("sidebar").classList.remove("has-increased-width");
			document.body.classList.remove("has-dull-body");
			document.getElementsByClassName("sidebar--parent")[0].style.display = "none";
			document.getElementById("IdPortfolio").classList.remove("margin-shift");
		},
	},
};
</script>

<style></style>
