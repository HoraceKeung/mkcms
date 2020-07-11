<template>
	<section>
		<media-form v-if="body" :media="body" @save="onSave"/>
		<modal-action-confirm msg="Sure want to delete this item?" @confirm="del"/>
	</section>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'
import { v4 as uuid } from 'uuid'
import mediaMixin from '~/assets/js/mediaMixin'
export default {
	mixins: [mediaMixin],
	layout: 'form',
	created () {
		this.body = JSON.parse(JSON.stringify(this.$store.state.charItemInView || this.dataModel))
	},
	computed: {
		charSnapshot () { return this.$store.state.charSnapshot || [] },
		charMediaPath () { return `characterModel/${this.$store.state.itemInView.id}/media` }
	},
	methods: {
		onSave ({body, updateTimestamp}) {
			this.body = body
			let clone = JSON.parse(JSON.stringify(this.charSnapshot))
			let index = this.$route.params.mediaIndex
			if (updateTimestamp) {
				this.body.lastUpdated = new Date().toISOString()
				this.updateCharTimestamp(this.body.lastUpdated)
			}
			if (index === 'new') {
				this.body.id = uuid()
				clone.unshift(this.body)
			} else {
				clone[index] = this.body
			}
			fireDb.ref(this.charMediaPath).set(clone, err => {
				if (index === 'new' && !err) this.$router.go('-1')
				alert(err || 'Data saved successfully!')
			})
		},
		del () {
			let clone = JSON.parse(JSON.stringify(this.charSnapshot))
			clone.splice(this.$route.params.mediaIndex, 1)
			fireDb.ref(this.charMediaPath).set(clone).then(() => {
				this.$router.go('-1')
				alert('Data deleted successfully!')
			}).catch(error => {
				console.log("Remove failed: " + error.message)
			})
		},
		updateCharTimestamp (time) {
			let char = JSON.parse(JSON.stringify(this.$store.state.itemInView))
			char.lastUpdated = time
			fireDb.ref(`characters/${this.$route.params.i}`).set(char, err => {
				if (err) alert(err)
			})
		}
	},
	data: () => ({
		body: null
	})
}
</script>
