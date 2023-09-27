const { ui } = require('./src/features/ui/config.ts')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: ui.screens,
    container: ui.container,
    colors: ui.colors,
    zIndex: ui.zIndex,
    extend: {
      btnSize: ui.btnSize,
      inputSize: ui.inputSize,
    },
  },
  plugins: [
    require('@qpokychuk/tailwind-button-plugin')({
      withFocusStyles: false,
    }),
    require('./tailwind.input.js'),
    require('@qpokychuk/tailwind-ratio-plugin'),
  ],
}
