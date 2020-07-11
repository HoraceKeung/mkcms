export default {
	mode: 'spa',
	loading: false,
	manifest: {
		name: 'Mortal Kombat Kompanion',
		short_name: 'MK Kompanion',
		theme_color: '#fda913',
		orientation: 'portrait'
	},
	buildModules: ['@nuxtjs/tailwindcss'],
	modules: ['@nuxtjs/pwa'],
	plugins: ['~/plugins/firebase.js', '~/plugins/main.js'],
	router: {
		middleware: 'routeGuard'
	}
}
