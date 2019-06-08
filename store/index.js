export const state = () => ({
	user: null,
	snapshot: null,
	itemInView: null
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
	}
}
