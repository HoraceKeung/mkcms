<template>
	<div>
		<div class="container flex py-4">
			<div class="mr-4"><img class="h-16 w-16 cursor-pointer" src="/icon.png" alt="logo" @click="$router.push('/cms')"></div>
			<h1 class="font-bold text-3xl uppercase my-auto text-gold">{{header}}</h1>
			<p class="cursor-pointer ml-auto my-auto" @click="signOut">Sign out</p>
		</div>
		<nuxt class="container py-4"/>
	</div>
</template>

<script>
import {fireAuth} from '~/plugins/firebase.js'
export default {
	computed: {
		header () {
			return this.$route.path.split('/').pop().replace(/([A-Z]+)/g, ' $1')
		}
	},
	methods: {
		signOut () {
			fireAuth.signOut().then(() => {
				this.$router.push('/')
			})
		}
	}
}
</script>
