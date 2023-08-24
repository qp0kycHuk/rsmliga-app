const tailwindButtonPlugin = require('@qpokychuk/tailwind-button-plugin')
const { ui } = require('./src/features/ui/config.ts')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
    tailwindButtonPlugin({
      withFocusStyles: true,
    }),
    require('./tailwind.input.js'),
  ],
}
