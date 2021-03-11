<template>
	<nav class="navbar nav-background-color" role="navigation" aria-label="main navigation">
		<div class="navbar-brand ml-4">
			<router-link class="navbar-item" to="/">
				<h1 class="is-size-5">Admin App</h1>
			</router-link>

			<a role="button" class="navbar-burger" @click="toggle" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-end mr-4">
				<div data-target="apps" class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link" v-if="!currentApp">
						Application
					</a>
					<a class="navbar-link" v-else>
						{{ currentApp.name }}
					</a>
					<div class="navbar-dropdown" id="apps">
						<a class="navbar-item" :data-app="app.text" @click.prevent="changeApp(app)" v-for="(app, i) in apps" :key="i">
							{{ app.name }}
						</a>
					</div>
				</div>
				<div data-target="logout" class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						<div class="is-flex mt-2">
							<figure v-if="user.profile_pic" class="image is-32x32 mr-2">
								<img alt="No Image Found" class="is-rounded" :src="user.profile_pic | AWS" />
							</figure>
							{{ user.fullname }}
						</div>
					</a>

					<div class="navbar-dropdown" id="logout">
						<a class="navbar-item" @click="logout">
							Logout
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["user", "isAuthenticated", "currentApp"]),
	},
	data() {
		return {
			apps: [
				{
					name: "Barter",
					text: "barter",
				},
				{
					name: "Portfolio",
					text: "portfolio",
				},
			],
		};
	},

	mounted() {
		/** The jQuery will trigger only at mobile viewport */
		if (window.matchMedia("(max-width: 769px)").matches) {
			const $navDropdowns = document.querySelectorAll(".navbar-item.has-dropdown");
			if ($navDropdowns.length > 0) {
				// Add a click event on each of them
				$navDropdowns.forEach((el) => {
					const target = el.dataset.target;
					const $target = document.getElementById(target);
					$target.style.display = "none";

					el.addEventListener("click", () => {
						// Get the target from the "data-target" attribute
						const target = el.dataset.target;
						const $target = document.getElementById(target);

						if ($target.style.display === "block") {
							$target.style.display = "none";
						} else {
							$target.style.display = "block";
						}
					});
				});
			}
		}
	},
	methods: {
		toggle() {
			document.querySelector(".navbar-menu").classList.toggle("is-active");
		},
		logout() {
			this.$store.dispatch("LOGOUT");
			this.$router.push("/login");
		},
		changeApp(app) {
			this.$store.commit("setCurrentApp", app);
			localStorage.setItem("app-name", JSON.stringify(app));
			console.log(this.currentApp);
			this.$router.push("/app");
		},
	},
};
</script>

<style lang="scss">
.profile {
	position: relative;
	width: 50%;
}

.middle {
	transition: 0.5s ease;
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	text-align: center;
}

.profile:hover .profile-img {
	opacity: 0.5;
	cursor: pointer;
}

.profile:hover .middle {
	opacity: 1;
	cursor: pointer;
}

#profilepic {
	// width: 8rem;
	// height: 9rem;
	object-fit: cover;
}
</style>
