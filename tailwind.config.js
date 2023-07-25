/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '475px' },
        sm: { min: '476px', max: '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: '768px', max: '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: '1024px', max: '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: '1280px', max: '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': { min: '1536px', max: '1700px' },
        // => @media (min-width: 1536px) { ... }
        '3xl': { min: '1701px' },
      },
      fontFamily: {
        neon: 'Neon',
        alegreya: 'Alegreya',
        'alegreya-italic': 'Alegreya-Italic',
      },
      textShadow: {
        neon: '4.5px 6px 16px #FF3131',
        neon2: '16px 12px 32px #FF3131',
      },
      colors: {
        'neon-red': '#DC143C',
        'neon-blue': '#00FFFF',
        'dark-bg': '#000000',
        'dark-text': '#F5F5F5',
        'card-text': '#FFFFFF',
        'card-bg': 'hsl(249,55%,56%)',
        'card-border': '#6699FF',
      },
      keyframes: {
        flicker: {
          '0%, 25%, 50%, 75%, 100%': {
            textShadow: '4.5px 6px 16px #FF3131',
            opacity: '1',
          },
          '12.5%, 37.5%, 62.5%, 87.5%': {
            textShadow: '-4px 12px 32px #FF3131',
            opacity: '0.7',
          },
        },
        lineFlicker: {
          '0%, 25%, 50%, 75%, 100%': {
            dropShadow: '[5px_5px_10px_rgba(255,49,49,0.7)]',
            opacity: '1',
          },
          '12.5%, 37.5%, 62.5%, 87.5%': {
            dropShadow: '[0px_0px_10px_rgba(255,49,49,0.7)]',
            opacity: '0.7',
          },
        },
      },
      animation: {
        flicker: 'flicker 3.75s infinite',
        lineFlicker: 'lineFlicker 3.75s infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
