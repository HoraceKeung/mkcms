module.exports = {
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		borderColor: theme => ({
			...theme('colors'),
			default: theme('colors.coal')
		}),
		extend: {
			colors: {
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
			spacing: {
				'7': '1.75rem',
				'14': '3.5rem',
				'36': '9rem'
			},
			minWidth: {
				'4': '1rem',
				'14': '3.5rem'
			},
			maxWidth: {
				'40': '10rem'
			},
			minHeight: {
				'40': '10rem'
			},
			cursor: {
				'grab': 'grab'
			}
		}
	}
}
