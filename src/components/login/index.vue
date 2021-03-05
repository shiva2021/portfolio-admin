<template>
	<section class="section is-medium">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-one-third">
					<div class="card">
						<div class="card-header">
							<h1 class="title is-size-4 p-4">
								Login to the Admin Portal
							</h1>
						</div>
						<div class="card-content">
							<div class="field">
								<label class="label">Email</label>
								<div class="control">
									<input class="input" v-model="creds.email" type="text" placeholder="xyz@gmail.com" />
								</div>
							</div>
							<div class="field">
								<label class="label">Password</label>
								<div class="control">
									<input class="input" v-model="creds.password" type="password" />
								</div>
							</div>
						</div>
						<div class="card-footer">
							<a class="button is-light is-fullwidth" @click="saveData">Login</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["users", "isAuthenticated"]),
	},
	data() {
		return {
			creds: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		async saveData() {
			try {
				await this.$store.dispatch("LOGIN", this.creds);
				debugger;
				if (this.isAuthenticated) this.$router.push("/");
			} catch (error) {}
		},
	},
};
</script>

<style></style>
