<template>
	<form action="">
		<div class="modal-card" style="width: auto;">
			<header class="modal-card-head">
				<p class="modal-card-title">Add Page</p>
				<button type="button" class="delete" @click="$emit('close')" />
			</header>
			<section class="modal-card-body">
				<b-field label="Page Name">
					<b-input type="text" :value="name" @input="onInput" placeholder="Name of the Page" required> </b-input>
				</b-field>
			</section>
			<footer class="modal-card-foot">
				<b-button label="Close" @click="close" />
				<b-button label="Add Page" @click="add" type="is-primary" />
			</footer>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		name: {
			type: String,
			default: "",
		},
		add: {
			type: Function,
			required: true,
		},
	},
	methods: {
		close() {
			this.$emit("close");
		},
		onInput(val) {
			this.$emit("input", val);
		},
	},
};
</script>

<style></style>
