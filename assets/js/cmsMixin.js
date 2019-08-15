import {fireDb} from '~/plugins/firebase.js'
export default {
	created () {
		this.$store.commit('setSnapshot', null)
		this.$store.commit('setItemInView', null)
		this.itemType = this.$route.path.split('/').slice(2).join('/')
		fireDb.ref(this.itemType).once('value').then(snapshot => {
			this.$store.commit('setSnapshot', snapshot.val())
		})
	},
	computed: {
		snapshot () { return this.$store.state.snapshot }
	},
	methods: {
		view (item, index) {
			this.$store.commit('setItemInView', item)
			this.$router.push(`/cms/${this.itemType}/${index}`)
		},
		add () {
			this.$store.commit('setItemInView', null)
			this.$router.push(`/cms/${this.itemType}/new`)
		}
	},
	data: () => ({
		itemType: null
	})
}
