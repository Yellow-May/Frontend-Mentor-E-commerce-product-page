module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			orange: {
				DEFAULT: 'hsl(26, 100%, 55%)',
				pale: 'hsl(25, 100%, 94%)',
			},
			blue: {
				'very-dark': 'hsl(220, 13%, 13%)',
				'dark-grayish': 'hsl(219, 9%, 45%)',
				grayish: 'hsl(220, 14%, 75%)',
				'light-grayish': 'hsl(223, 64%, 98%)',
			},
			white: {
				DEFAULT: 'hsl(0, 0%, 100%)',
			},
			black: {
				DEFAULT: 'hsl(0, 0%, 0%)',
			},
		},
		extend: {
			backgroundImage: {},
			fontFamily: {
				'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
			},
			screens: {
				md: '960px',
			},
		},
	},
	plugins: [],
};
