import {fireDb} from '~/plugins/firebase.js'
export default {
	created () {
		this.itemType = this.$route.path.split('/').pop()
		fireDb.ref(this.itemType).once('value').then(snapshot => {
			this.snapshot = snapshot.val()
		})
	},
	methods: {
		view (item) {
			this.$store.commit('setItemInView', item)
			this.$router.push(`/cms/${this.itemType}/${item.id}`)
		},
		add () {
			this.$store.commit('setItemInView', null)
			this.$router.push(`/cms/${this.itemType}/new`)
		}
	},
	data: () => ({
		itemType: null,
		snapshot: null
	})
}
