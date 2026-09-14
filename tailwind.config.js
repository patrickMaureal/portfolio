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
        background: '#F7F7F5',
        panel: '#FFFFFF',
        panelAlt: '#F1F1EE',
        subtitle: '#5B5B5B',
        muted: '#7A7A7A',
        primary: '#151515',
        border: '#E4E4E1',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(17, 17, 17, 0.08)',
      },
    },
  },
  plugins: [],
}

