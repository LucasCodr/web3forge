import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Sora', 'sans-serif'],
			mono: ['Space Mono', 'monospace']
		},
		extend: {
			maxHeight: {
				logs: 'calc(100% - 96px)'
			},
			keyframes: {
				pop: {
					'0%': {
						backgroundColor: '#ffffff30'
					},
					'100%': {
						backgroundColor: 'initial'
					}
				}
			},
			animation: {
				pop: 'pop 1s ease-in-out forwards'
			}
		}
	},
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#006FEE',
					'primary-content': '#ECEDEE',
					secondary: '#9353d3',
					'secondary-content': '#ECEDEE',
					accent: '#37cdbe',
					'accent-content': '#ECEDEE',
					neutral: '#18181b',
					'neutral-content': '#ECEDEE',
					'base-100': '#000000',
					'base-200': '#18181b',
					'base-300': '#27272a',

					'--rounded-btn': '12px'
				}
			}
		]
	},
	plugins: [daisyui]
} satisfies Config;
