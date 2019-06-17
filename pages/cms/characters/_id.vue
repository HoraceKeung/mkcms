<template>
	<section>

	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
export default {
	layout: 'form',
	created () {
		this.itemType = this.$route.path.split('/').slice(-2)[0]
		this.body = JSON.parse(JSON.stringify(this.$store.state.itemInView || this.dataModel))
	},
	computed: {
		snapshot () { return this.$store.state.snapshot }
	},
	data: () => ({
		itemType: null,
		body: null,
		updateTimestamp: false
	})
}
</script>
