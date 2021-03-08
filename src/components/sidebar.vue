<template>
	<div class="wrapper">
		<nav id="sidebar" class="sidebar">
			<ul class="sidebar--parent">
				<li v-for="(item, i) in sidenav" :key="i" :data-target="item.target" class="has-children">
					<div class="is-flex">
						<a href="javascript:void(0)">
							<i :class="`${item.icon} is-size-6 mr-3 font-color`"></i>
							<span class="is-size-6">{{ item.name }}</span>
						</a>
						<div class="has-text-right arrow">
							<i v-if="item.hasChevron" class="fas fa-chevron-left left-icon font-color"></i>
						</div>
					</div>
					<ul :id="item.target" v-if="item.children.length > 0">
						<li v-for="(child, i) in item.children" :key="i">
							<a href="javascript:void(0)">
								<i :class="`${child.icon} is-size-6 mr-3 font-color`"></i>
								<span class="is-size-6">{{ child.name }}</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},

	data() {
		return {
			sidenav: [
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
	mounted() {
		let $sidebarDropdowns = document.querySelectorAll(".has-children");
		if ($sidebarDropdowns.length > 0) {
			$sidebarDropdowns.forEach((el) => {
				el.addEventListener("click", () => {
					const target = el.dataset.target;
					const $target = document.getElementById(target);

					if ($target) {
						$target.classList.toggle("has-list-active");
						//Rotate Icon
						let icon = el.getElementsByClassName("left-icon");
						icon[0].classList.toggle("rotate-icon");
					}
				});
			});
		}
	},
};
</script>

<style lang="scss" scoped>
hr {
	background-color: #3d4957;
}
</style>
