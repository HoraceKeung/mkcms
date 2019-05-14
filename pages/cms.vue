<template>
	<section class="container">
		CMS
		<button type="button" @click="signOut">SIGN OUT</button>
	</section>
</template>

<script>
import {fireAuth} from '~/plugins/firebase.js'
export default {
	methods: {
		signOut () {
			fireAuth.signOut().then(() => {
				this.$router.push('/')
			})
		}
	}
}
</script>
