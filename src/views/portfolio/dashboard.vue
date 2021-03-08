<template>
	<div>
		<!-- Sidebar -->
		<div id="idSidebar" class="sidebar">
			<ul class="sidebar--parent">
				<li>
					<a href="">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
				</li>
				<li>
					<a href="">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
				</li>
				<li>
					<a href="">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
				</li>
				<li>
					<a href="">
						<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
						<span class="is-size-6">Item1</span>
						<i class="fas fa-chevron-left left-icon font-color"></i>
					</a>
					<ul>
						<li>
							<a href="">
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
};
</script>

<style lang="scss" scoped>
hr {
	background-color: #3d4957;
}
</style>
