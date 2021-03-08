<template>
	<div>
		<!-- Sidebar -->
		<div id="idSidebar" class="sidebar">
			<ul class="sidebar--parent">
				<li>
					<a href="javascript:void(0)">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
				</li>
				<li data-target="list1" class="has-children">
					<a href="javascript:void(0)">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
					<ul id="list1">
						<li>
							<a href="javascript:void(0)">
								<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
								<span class="is-size-6">Sub-Item1</span>
							</a>
						</li>
					</ul>
				</li>

				<li data-target="list2" class="has-children">
					<a href="javascript:void(0)">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
					<ul id="list2">
						<li>
							<a href="javascript:void(0)">
								<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
								<span class="is-size-6">Sub-Item1</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},
	mounted() {
		let $sidebarDropdowns = document.querySelectorAll(".has-children");
		if ($sidebarDropdowns.length > 0) {
			$sidebarDropdowns.forEach((el) => {
				el.addEventListener("click", () => {
					const target = el.dataset.target;
					const $target = document.getElementById(target);

					$target.classList.toggle("has-list-active");
					//Rotate Icon
					let icon = el.getElementsByClassName("left-icon");
					icon[0].classList.toggle("rotate-icon");
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

.has-children ul {
	display: none;
	transition: display 3s;
}

.rotate-icon {
	transition: 0.5s;
	transform: rotate(-90deg);
}

.has-list-active {
	display: block !important;
}
</style>
