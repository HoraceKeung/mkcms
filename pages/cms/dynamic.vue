<template>
	<section>
		<form v-if="body">
			<div class="form-group">
				<label for="home-input">Featured Home</label>
				<input id="home-input" class="form-control" v-model="body.featuredHome">
			</div>
			<div class="form-group">
				<label for="tip-input">Featured Tip</label>
				<input id="tip-input" class="form-control" v-model="body.featuredTip">
			</div>
			<button class="btn btn-gold" type="submit" @click.prevent="save">Save</button>
		</form>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
import cmsMixin from '~/assets/js/cmsMixin'
export default {
	mixins: [cmsMixin],
	layout: 'form',
	methods: {
		save () {
			fireDb.ref(this.itemType).set(this.body, err => {
				alert(err || 'Data saved successfully!')
			})
		}
	},
	watch: {
		snapshot (val) { this.body = JSON.parse(JSON.stringify(val)) }
	},
	data: () => ({
		body: null
	})
}
</script>
