import { background } from '@chakra-ui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				background: '#0A0A0A',
				subtitle: '#C7C7C7',
				primary: '#D3E97A',
			},
			fontFamily: {
				'bebas' : ['Bebas Neue', 'cursive'],
				'manrope': ['Manrope', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			}
		},
  },
  plugins: [],
}

