<template>
	<section class="section is-medium">
		<div class="container">
			<div class="columns">
				<div class="column is-half">
					<div class="columns is-centered">
						<div class="column is-two-thirds">
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
											<input class="input" v-model="creds.username" type="text" placeholder="xyz@gmail.com" />
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
				<div class="column"></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			creds: {
				username: "",
				password: "",
			},
		};
	},
	methods: {
		saveData() {},
	},
};
</script>

<style></style>
