<template>
	<div>
		<!-- Sidebar -->
		<div id="idSidebar" class="sidebar">
			<a href="">Item1</a>
			<hr />
			<a href="">Item2</a>
			<hr />
			<a href="">Item3</a>
			<hr />
			<a href="">Item4</a>
			<hr />
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
	background-color: $primary-dark;
}
</style>
