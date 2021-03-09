<template>
	<div class="dashboard">
		<Sidebar :navitems="items" @onNavigate="onNavigate"></Sidebar>
		<section class="section is-medium">
			<h1>This is the Dashboard</h1>
		</section>
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
	},
};
</script>

<style></style>
