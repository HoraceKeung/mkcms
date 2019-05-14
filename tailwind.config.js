let defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
	theme: {
		colors: {...defaultConfig.theme.colors,
			'york': '#fda913',
			'york-600': '#d88702',

			'coal-400': '#545350',
			'coal': '#686c6c',
			'coal-600': '#2c3232',
			'coal-700': '#201f1b',
			'coal-800': '#1f2424',
			'coal-900': '#0e0e0c'
		},
		spacing: {...defaultConfig.theme.spacing,
			'36': '9rem'
		},
		borderColor: theme => ({
			...theme('colors'),
			default: theme('colors.coal')
		}),
		container: {
			center: true,
			padding: '1rem'
		}
	}
}
