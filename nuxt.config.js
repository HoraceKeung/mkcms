export default {
	mode: 'spa',
	loading: false,
	manifest: {
		name: 'MKXI CMS',
		short_name: 'MKXI CMS',
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
