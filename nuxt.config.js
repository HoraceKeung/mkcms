export default {
	mode: 'spa',
	loading: false,
	manifest: {
		name: 'Mortal Kombat Kompanion',
		short_name: 'MK Kompanion',
		theme_color: '#fda913',
		orientation: 'portrait'
	},
	modules: ['@nuxtjs/pwa'],
	build: {
		postcss: {
			plugins: {
				tailwindcss: './tailwind.config.js'
			}
		}
	},
	css: ['~/assets/css/global.css'],
	plugins: ['~/plugins/main.js']
}
