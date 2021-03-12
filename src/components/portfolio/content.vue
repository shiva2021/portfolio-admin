<template>
	<div>
		<section class="section is-small has-background-secondary">
			<h1 class="title has-text-white">
				Manage Content
			</h1>
		</section>
		<div class="container is-fluid has-text-right mt-2">
			<a class="button is-transparent" @click="toggle">
				<i class="fas fa-plus mr-2"></i>
				Add Page
			</a>
		</div>
		<div class="container is-fluid example">
			<!-- <b-field label="Product Details">
				<editor :onReady="onEditorReady" @imageRemove="onImageDelete" @editorInput="onEditorInput"></editor>
			</b-field> -->
			<div class="columns is-variable is-multiline is-0-mobile is-1-desktop">
				<div class="column is-one-quarter clickable" v-for="(section, i) in sections" :key="i" @click.prevent="navigate(section)">
					<div class="tile is-parent">
						<article class="tile is-child notification is-primary">
							<p class="title">{{ section.page }}</p>
							<p class="subtitle">Click to Edit</p>
						</article>
					</div>
				</div>
				<div class="column is-half">
					<!-- <editor :onReady="onEditorReady" @imageRemove="onImageDelete" @editorInput="onEditorInput"></editor> -->
				</div>
			</div>
		</div>

		<b-modal v-model="isActive" has-modal-card trap-focus :destroy-on-hide="false" aria-role="dialog" aria-label="Example Modal" aria-modal>
			<template>
				<Form @close="toggle" :name="page" v-model="page" :add="onAdd"></Form>
			</template>
		</b-modal>
	</div>
</template>

<script>
import editor from "@/reusable/Editor/ckeditor.vue";
import Form from "@/components/portfolio/modalform.vue";
export default {
	components: {
		editor,
		Form,
	},
	data() {
		return {
			sections: [],
			isActive: false,
			page: "",
		};
	},
	async created() {
		try {
			let { data } = await this.$axios.get("/api/rx/PF/Page");
			this.sections = data;
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		async onAdd() {
			try {
				let { data } = this.$axios.post("/api/portfolio/add/page", { page: this.page });
				this.sections = data;
				this.toggle();
			} catch (error) {
				console.log(error);
			}
		},
		toggle() {
			this.page = "";
			this.isActive = !this.isActive;
		},
		navigate(section) {
			console.log(section);
		},
	},
};
</script>

<style></style>
