import {fireDb} from '~/plugins/firebase.js'
export default {
	created () {
		fireDb.ref(this.$route.path.split('/').pop()).once('value').then(snapshot => {
			this.snapshot = snapshot.val()
		})
	},
	data: () => ({
		snapshot: null
	})
}
