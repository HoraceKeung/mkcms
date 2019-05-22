export const state = () => ({
	user: null,
	itemInView: null
})

export const mutations = {
	setUser (state, obj) {
		state.user = obj
	},
	setItemInView (state, obj) {
		state.itemInView = obj
	}
}
