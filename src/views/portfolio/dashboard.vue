<template>
	<div>
		<!-- Sidebar -->
		<div id="idSidebar" class="sidebar">
			<a href="">
				<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
				<span class="is-size-6">Item1</span>
				<i class="fas fa-chevron-left left-icon font-color"></i>
			</a>
			<a href="">
				<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
				<span class="is-size-6">Item1</span>
				<i class="fas fa-chevron-left left-icon font-color"></i>
			</a>
			<a href="">
				<i class="fas fa-chart-line is-size-6 mr-3 font-color"></i>
				<span class="is-size-6">Item1</span>
				<i class="fas fa-chevron-left left-icon font-color"></i>
			</a>
			<a href="">Item4</a>
			<a href="">Item5</a>
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
