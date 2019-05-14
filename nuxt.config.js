export default {
	mode: 'spa',
	loading: false,
	manifest: {
		name: 'Mortal Kombat Kompanion',
		short_name: 'MK Kompanion',
		theme_color: '#fda913',
		orientation: 'portrait'
	},
	modules: ['nuxt-purgecss', '@nuxtjs/pwa'],
	purgeCSS: {
		mode: 'postcss'
	},
	build: {
		postcss: {
			plugins: {
				tailwindcss: './tailwind.config.js'
			}
		}
	},
	css: ['~/assets/css/global.css'],
	plugins: ['~/plugins/firebase.js', '~/plugins/main.js'],
	router: {
		middleware: 'routeGuard'
	}
}
