let defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
	theme: {
		colors: {...defaultConfig.theme.colors,
			'gold': '#fda90f',
			'gold-600': '#d88700',

			'coal-400': '#545350',
			'coal': '#686c6c',
			'coal-600': '#2c3232',
			'coal-700': '#201f1b',
			'coal-800': '#111',
			'coal-900': '#0e0e0c',

			'blue': '#89d6fc'
		},
		spacing: {...defaultConfig.theme.spacing,
			'7': '1.75rem',
			'14': '3.5rem',
			'36': '9rem'
		},
		minWidth: {...defaultConfig.theme.minWidth,
			'4': '1rem',
			'14': '3.5rem'
		},
		maxWidth: {...defaultConfig.theme.maxWidth,
			'40': '10rem'
		},
		minHeight: {...defaultConfig.theme.minHeight,
			'40': '10rem'
		},
		borderColor: theme => ({
			...theme('colors'),
			default: theme('colors.coal')
		}),
		cursor: {...defaultConfig.theme.cursor,
			'grab': 'grab'
		},
		container: {
			center: true,
			padding: '1rem'
		}
	}
}
