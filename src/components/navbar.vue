<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
			</a>

			<a role="button" class="navbar-burger" @click="toggle" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item">
					Home
				</a>

				<a class="navbar-item">
					Documentation
				</a>

				<div data-target="more" class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						More
					</a>

					<div class="navbar-dropdown" id="more">
						<a class="navbar-item">
							About
						</a>
						<a class="navbar-item">
							Jobs
						</a>
						<a class="navbar-item">
							Contact
						</a>
						<hr class="navbar-divider" />
						<a class="navbar-item">
							Report an issue
						</a>
					</div>
				</div>

				<div data-target="new" class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						New
					</a>

					<div class="navbar-dropdown" id="new">
						<a class="navbar-item">
							About
						</a>
						<a class="navbar-item">
							Jobs
						</a>
						<a class="navbar-item">
							Contact
						</a>
						<hr class="navbar-divider" />
						<a class="navbar-item">
							Report an issue
						</a>
					</div>
				</div>
			</div>

			<div class="navbar-end">
				<div data-target="logout" class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						<div class="is-flex">
							<figure class="image is-32x32 mr-2">
								<img class="is-rounded" :src="user.profile_pic | AWS" />
							</figure>
							{{ user.fullname }}
						</div>
					</a>

					<div class="navbar-dropdown" id="logout">
						<a class="navbar-item">
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
		...mapGetters(["user", "isAuthenticated"]),
	},
	created() {
		console.log(this.user);
	},
	mounted() {
		/** The jQuery will trigger only at mobile viewport */
		if (window.matchMedia("(max-width: 767px)").matches) {
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
		toggleMenu() {},
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
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
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
