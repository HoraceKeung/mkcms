import whitelister from 'purgecss-whitelister'

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
	purgeCSS: {
		whitelist: () => whitelister([
			'./assets/css/*.css',
			'./node_modules/swiper/css/swiper.min.css',
			'./node_modules/flatpickr/dist/flatpickr.css'
		])
	},
	css: [],
	plugins: ['~/plugins/firebase.js', '~/plugins/main.js'],
	router: {
		middleware: 'routeGuard'
	}
}
