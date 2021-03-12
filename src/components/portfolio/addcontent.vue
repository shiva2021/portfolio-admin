<template>
	<div>
		<section class="section is-medium has-background-dark">
			<h1 class="title has-text-white">
				Add Content
			</h1>
		</section>
		<div class="container is-fluid example">
			<b-field label="Product Details">
				<editor :onReady="onEditorReady" @imageRemove="onImageDelete" @editorInput="onEditorInput"></editor>
			</b-field>
		</div>
	</div>
</template>

<script>
import editor from "@/reusable/Editor/ckeditor.vue";
export default {
	components: {
		editor,
	},
};
</script>

<style></style>
