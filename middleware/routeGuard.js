export default ({ store, route, redirect }) => {
	if (!store.state.user && route.path !== '/' && route.path !== '/terms' && route.path !== '/sign-in') return redirect('/sign-in')
}
