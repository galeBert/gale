// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

// This function let us to get the opacity color of our customize color. Refer to this link https://tailwindcss.com/docs/customizing-colors#using-css-variables
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mp4}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Avenir Next"', ...fontFamily.sans],
      clash: ['"Clash"'],
      clashSemibold: ['"Clash-Semibold"'],
      montserrat: ['"Montserrat"']
    },
    extend: {
      letterSpacing: {
        mostWide: '.50rem'
      },
      animation: {
        rotate: 'rotate 5s linear infinite',
        marquee: 'marquee 10s linear infinite',
        backwardMarquee: 'backwardMarquee 6s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-43.4%)' },
        },
        backwardMarquee: {
          '0%': { transform: 'translateX(-43.4%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      fontSize: {
        'heading-2xl': ['124px', { lineHeight: '125%', fontWeight: '800' }],
        'heading-xl': ['96px', { lineHeight: '125%', fontWeight: '500' }],
        'label-xl': ['40px', { lineHeight: '125%', fontWeight: '600' }],
        'label-l': ['24px', { lineHeight: '125%', fontWeight: '600' }],
        'label-md': ['16px', { lineHeight: '125%', fontWeight: '800' }],
        'paragraph-md': ['16px', { lineHeight: '125%', fontWeight: '500' }],
      },
      colors: {
        true: {
          white: '#FFFFFF',
          black: '#000000',
        },
        base: {
          white: '#F6F6F6',
          black: '#1E1E1E',
        },
        primary: {
          100: withOpacityValue('--tw-color-primary-100'),
          200: withOpacityValue('--tw-color-primary-200'),
          300: withOpacityValue('--tw-color-primary-300'),
          400: withOpacityValue('--tw-color-primary-400'),
          500: withOpacityValue('--tw-color-primary-500'),
          600: withOpacityValue('--tw-color-primary-600'),
          700: withOpacityValue('--tw-color-primary-700'),
          800: withOpacityValue('--tw-color-primary-800'),
          900: withOpacityValue('--tw-color-primary-900'),
        },
        orange: {
          100: withOpacityValue('--tw-color-orange-100'),
          200: withOpacityValue('--tw-color-orange-200'),
          300: withOpacityValue('--tw-color-orange-300'),
          400: withOpacityValue('--tw-color-orange-400'),
          500: withOpacityValue('--tw-color-orange-500'),
          600: withOpacityValue('--tw-color-orange-600'),
          700: withOpacityValue('--tw-color-orange-700'),
          800: withOpacityValue('--tw-color-orange-800'),
          900: withOpacityValue('--tw-color-orange-900'),
        },
        green: {
          100: withOpacityValue('--tw-color-green-100'),
          200: withOpacityValue('--tw-color-green-200'),
          300: withOpacityValue('--tw-color-green-300'),
          400: withOpacityValue('--tw-color-green-400'),
          500: withOpacityValue('--tw-color-green-500'),
          600: withOpacityValue('--tw-color-green-600'),
          700: withOpacityValue('--tw-color-green-700'),
          800: withOpacityValue('--tw-color-green-800'),
          900: withOpacityValue('--tw-color-green-900'),
        },
        gray: {
          100: withOpacityValue('--tw-color-gray-100'),
          200: withOpacityValue('--tw-color-gray-200'),
          300: withOpacityValue('--tw-color-gray-300'),
          400: withOpacityValue('--tw-color-gray-400'),
          500: withOpacityValue('--tw-color-gray-500'),
          600: withOpacityValue('--tw-color-gray-600'),
          700: withOpacityValue('--tw-color-gray-700'),
          800: withOpacityValue('--tw-color-gray-800'),
          900: withOpacityValue('--tw-color-gray-900'),
        },
        dark: {
          100: withOpacityValue('--tw-color-dark-100'),
          200: withOpacityValue('--tw-color-dark-200'),
          300: withOpacityValue('--tw-color-dark-300'),
          400: withOpacityValue('--tw-color-dark-400'),
          500: withOpacityValue('--tw-color-dark-500'),
          600: withOpacityValue('--tw-color-dark-600'),
          700: withOpacityValue('--tw-color-dark-700'),
          800: withOpacityValue('--tw-color-dark-800'),
          900: withOpacityValue('--tw-color-dark-900'),
        },
      },
    },
  },
  plugins: [],
}
