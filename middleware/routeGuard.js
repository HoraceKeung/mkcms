export default ({ store, route, redirect }) => {
	if (!store.state.user && route.path.includes('/cms')) return redirect('/sign-in')
}
