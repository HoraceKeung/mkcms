export const state = () => ({
	user: null,
	snapshot: null,
	itemInView: null,
	charSnapshot: null,
	charItemInView: null
})

export const mutations = {
	setUser (state, obj) {
		state.user = obj
	},
	setSnapshot (state, snapshot) {
		state.snapshot = snapshot
	},
	setItemInView (state, obj) {
		state.itemInView = obj
	},
	setCharSnapshot (state, snapshot) {
		state.charSnapshot = snapshot
	},
	setCharItemInView (state, obj) {
		state.charItemInView = obj
	}
}
