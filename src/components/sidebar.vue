<template>
	<div class="wrapper">
		<nav id="sidebar" class="sidebar">
			<ul class="sidebar--parent">
				<li v-for="(item, i) in navitems" :key="i" :data-target="item.target" class="has-children">
					<div class="is-flex">
						<a href="javascript:void(0)" @click.prevent="onItemClick(item)">
							<i :class="`${item.icon} is-size-6 mr-3 font-color`"></i>
							<span class="is-size-6">{{ item.name }}</span>
						</a>
						<div :data-target="item.target" class="has-text-right arrow">
							<i v-if="item.hasChevron" class="fas fa-chevron-left left-icon font-color"></i>
						</div>
					</div>
					<ul data-child="true" :id="item.target" class="child-list" v-if="item.children.length > 0">
						<li v-for="(child, i) in item.children" :key="i">
							<a href="javascript:void(0)" @click.prevent="onItemClick(child)">
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

	props: {
		navitems: {
			type: Array,
			required: true,
		},
		// onItemClick: {
		// 	type: Function,
		// 	required: true,
		// },
	},

	data() {
		return {};
	},
	mounted() {
		let $sidebarDropdowns = document.querySelectorAll(".arrow");

		if ($sidebarDropdowns.length > 0) {
			$sidebarDropdowns.forEach((el) => {
				el.addEventListener("click", () => {
					const target = el.dataset.target || el.dataset.child;
					const $target = document.getElementById(target);

					if ($target && target !== "true") {
						$target.classList.toggle("has-list-active");
						// if ($target.style.display === "block") {
						// 	$target.style.display = "none";
						// } else {
						// 	$target.style.display = "block";
						// }

						//Rotate Icon
						let icon = el.getElementsByClassName("left-icon");
						icon[0].classList.toggle("rotate-icon");
					}
				});
			});
		}
	},
	methods: {
		onItemClick(item) {
			if (item.children.length === 0) this.$emit("onNavigate", item);
		},
	},
};
</script>

<style lang="scss" scoped>
hr {
	background-color: #3d4957;
}
</style>
