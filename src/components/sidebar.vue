<template>
	<div class="wrapper">
		<nav id="sidebar" class="sidebar">
			<ul id="idsidebar--parent" class="sidebar--parent">
				<li href="javascript:void(0)" class="closebtn is-size-3" @click="toggle">
					<div class="has-text-right">
						&times;
					</div>
				</li>
				<li v-for="(item, i) in navitems" :key="i" :data-target="item.target" class="has-children">
					<div class="is-flex">
						<a href="javascript:void(0)" @click.prevent="onItemClick(item)">
							<i :class="`${item.icon} is-size-6 mr-3 font-color`"></i>
							<span class="is-size-6">{{ item.name }}</span>
						</a>
						<div :data-target="item.target" class="has-text-right arrow">
							<i :id="`iconId${item.target}`" v-if="item.children.length > 0" class="fas fa-chevron-left left-icon font-color"></i>
						</div>
					</div>
					<ul data-child="true" :id="item.target" class="child-list" v-if="item.children.length > 0">
						<li v-for="(child, i) in item.children" :key="i">
							<div class="is-flex">
								<a href="javascript:void(0)" class="full-width" @click.prevent="onItemClick(child)">
									<i :class="`${child.icon} is-size-6 mr-3 font-color`"></i>
									<span class="is-size-6">{{ child.name }}</span>
								</a>
							</div>
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
		isOpen: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {};
	},
	watch: {
		isOpen(bVal) {
			if (bVal) {
				this.openNav();
			} else {
				this.collapseSidebar();
			}
		},
	},
	mounted() {
		let $sidebarDropdowns = document.querySelectorAll(".arrow");

		if ($sidebarDropdowns.length > 0) {
			$sidebarDropdowns.forEach((el) => {
				el.addEventListener("click", this.toggleMenu.bind(this));
			});
		}
	},
	methods: {
		onItemClick(item) {
			if (item.children.length === 0) {
				debugger;
				this.toggle();
				this.$emit("onclick", item);
			}
		},

		openNav() {
			console.log(window.screen.width);
			document.getElementById("sidebar").classList.add("has-increased-width");

			/** On mobile/tablet screens, the width must occupy the complete width of the screen */
			if (window.matchMedia("(max-width: 769px)").matches) {
				document.getElementById("sidebar").style.width = window.screen.width + "px";
			}

			// document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
			setTimeout(() => {
				document.getElementById("idsidebar--parent").classList.add("is-not-hidden");
			}, 500);
			document.getElementById("maincontent").classList.add("margin-shift");
		},

		collapseSidebar() {
			document.getElementById("sidebar").classList.remove("has-increased-width");

			/** On mobile/tablet screens, the width must be explicitely set to 0 */
			if (window.matchMedia("(max-width: 769px)").matches) {
				document.getElementById("sidebar").style.width = "0px";
			}
			// document.body.style.backgroundColor = "white";
			document.getElementById("idsidebar--parent").classList.remove("is-not-hidden");
			document.getElementById("maincontent").classList.remove("margin-shift");
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
		toggle() {
			this.$emit("close", false);
		},
	},
};
</script>

<style lang="scss" scoped>
hr {
	background-color: #3d4957;
}
</style>
