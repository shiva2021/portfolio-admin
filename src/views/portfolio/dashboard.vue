<template>
	<div class="dashboard">
		<Sidebar @toggleMenu="toggleMenu" :closeNav="collapseSidebar" :navitems="items" @onNavigate="onNavigate"></Sidebar>
		<div id="IdPortfolio" class="pl-5 pt-3">
			<span class="is-size-4" style="cursor: pointer;" @click="openNav">&#9776;</span>
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
				},
				{
					name: "Manage Content",
					target: "content",
					children: [
						{
							name: "Add Content",
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
							children: [],
							icon: "fas fa-plus",
						},
					],
					icon: "fas fa-heading",
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

		toggleMenu(e) {
			let el = e.currentTarget;
			const target = el.dataset.target || el.dataset.child;
			const $target = document.getElementById(target);

			if ($target && target !== "true") {
				$target.classList.toggle("has-list-active");

				//Rotate Icon
				this.rotateArrow(el, target);
			}

			//Close other opened nodes (if any)
			this.closeOtherNodes(target);
		},

		closeOtherNodes(target) {
			let openNodes = document.getElementsByClassName("has-list-active");
			if (openNodes.length > 1) {
				$.each(openNodes, (i, el) => {
					let parent = el ? el.parentElement : "";
					if (parent) {
						let parentTarget = parent.dataset.target;
						if (target !== parentTarget) {
							el.classList.toggle("has-list-active");

							//rotate icon
							this.rotateArrow(parent, parentTarget);
						}
					}
				});
			}
		},

		rotateArrow(el, target) {
			let icon = el.getElementsByClassName("left-icon") ? el.getElementsByClassName("left-icon")[`iconId${target}`] : "";

			if (icon) {
				if (!icon.classList.contains("rotate-icon") && !icon.classList.contains("rotate-icon-rev")) {
					icon.classList.toggle("rotate-icon");
				} else if (icon.classList.contains("rotate-icon")) {
					icon.classList.add("rotate-icon-rev");
					icon.classList.remove("rotate-icon");
				} else {
					icon.classList.add("rotate-icon");
					icon.classList.remove("rotate-icon-rev");
				}
			}
		},
	},
};
</script>

<style></style>
