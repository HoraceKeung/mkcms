<template>
	<section></section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
export default {
	layout: 'form',
	computed: {
		snapshot () { return this.$store.state.snapshot }
	},
}
</script>
