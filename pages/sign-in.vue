<template>
	<section class="container">
		<div class="flex py-4">
			<div><img class="h-16 w-16 cursor-pointer" src="/icon.png" alt="logo" @click="$router.push('/')"></div>
		</div>
		<div class="max-w-md mx-auto">
			<h1 class="font-bold text-3xl mb-6">Sign in to CMS</h1>
			<form class="flex flex-col">
				<div class="form-group mb-4">
					<label for="email-input">Email</label>
					<input id="email-input" class="form-control" type="email" v-model="email">
				</div>
				<div class="form-group mb-4">
					<label for="password-input">Password</label>
					<input id="password-input" class="form-control" type="password" v-model="password">
				</div>
				<button type="submit" class="mx-auto" @click.prevent="signIn"><mk-button text="SIGN IN" icon="arrow"/></button>
			</form>
		</div>
	</section>
</template>

<script>
import {fireAuth} from '~/plugins/firebase.js'
export default {
	layout: 'landing',
	methods: {
		signIn () {
			fireAuth.signInWithEmailAndPassword(this.email, this.password).then(res => {
				if (res.user) { this.$router.push('/cms') }
			}).catch(err => {
				console.log(err)
			})
		}
	},
	data: () => ({
		email: null,
		password: null
	})
}
</script>
