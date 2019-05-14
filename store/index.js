export const state = () => ({
	user: null
})

export const mutations = {
	setUser (state, obj) {
		state.user = obj
	}
}
