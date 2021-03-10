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
			document.getElementById("sidebar").style.width = "17rem";
			document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
			setTimeout(() => {
				debugger;
				document.getElementsByClassName("sidebar--parent")[0].style.display = "block";
			}, 500);
			document.getElementById("IdPortfolio").style.marginLeft = "17rem";
		},

		collapseSidebar() {
			document.getElementById("sidebar").style.width = "0";
			document.body.style.backgroundColor = "white";
			document.getElementsByClassName("sidebar--parent")[0].style.display = "none";
			document.getElementById("IdPortfolio").style.marginLeft = "0";
		},
	},
};
</script>

<style></style>
