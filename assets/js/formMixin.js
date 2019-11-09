import {fireDb} from '~/plugins/firebase.js'
import uuid from 'uuid/v4'
export default {
	layout: 'form',
	created () {
		this.itemType = this.$route.path.split('/').slice(2, -1).join('/')
		this.body = JSON.parse(JSON.stringify(this.$store.state.itemInView || this.dataModel))
	},
	computed: {
		snapshot () { return this.$store.state.snapshot }
	},
	methods: {
		save () {
			let clone = JSON.parse(JSON.stringify(this.snapshot.filter(x => x)))
			let index = this.$route.params.i
			if (this.updateTimestamp) this.body.lastUpdated = new Date().toISOString()
			if (index === 'new') {
				if (this.body) {
					if (typeof this.body !== 'string') this.body.id = uuid()
					clone.unshift(this.body)
				}
			} else {
				clone[index] = this.body
			}
			fireDb.ref(this.itemType).set(clone, err => {
				if (index === 'new' && !err) this.$router.push(`/cms/${this.itemType}`)
				alert(err || 'Data saved successfully!')
			})
		},
		del () {
			let clone = JSON.parse(JSON.stringify(this.snapshot))
			clone.splice(this.$route.params.i, 1)
			fireDb.ref(this.itemType).set(clone).then(() => {
				this.$router.push(`/cms/${this.itemType}`)
				alert('Data deleted successfully!')
			}).catch(error => {
				console.log("Remove failed: " + error.message)
			})
		}
	},
	data: () => ({
		itemType: null,
		body: null,
		updateTimestamp: false
	})
}
