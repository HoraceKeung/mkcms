import {fireDb} from '~/plugins/firebase.js'
export default {
	layout: 'form',
	created () {
		this.itemType = this.$route.path.split('/').slice(-2)[0]
		this.body = JSON.parse(JSON.stringify(this.$store.state.itemInView || this.dataModel))
	},
	methods: {
		save () {
			let ref = this.$route.params.id
			if (this.$route.params.id === 'new') {
				ref = fireDb.ref().child(this.itemType).push().key
				this.body.id = ref
			}
			fireDb.ref(`${this.itemType}/${ref}`).set(this.body, err => {
				if (this.$route.params.id === 'new') this.$router.push(`/cms/${this.itemType}`)
				alert(err || 'Data saved successfully!')
			})
		},
		del () {
			fireDb.ref(`${this.itemType}/${this.$route.params.id}`).remove().then(() => {
				this.$router.push(`/cms/${this.itemType}`)
				alert('Data deleted successfully!')
			}).catch(error => {
				console.log("Remove failed: " + error.message)
			})
		}
	},
	data: () => ({
		itemType: null,
		body: null
	})
}
