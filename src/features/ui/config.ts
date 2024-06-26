export const colors = {
  primary: '#d21c4b',
  white: '#fff',
  black: '#242424',
  transparent: 'rgba(0,0,0,0)',
  green: '#009432',
  yellow: '#f79f1f',
  // primary: '#778beb', // Фиолетовый
  // primary: '#10ac84', // Бирюзовый
  red: '#d63031',
  gray: '#DDD',
  ['gray-light']: '#F5F7FB',

  light: {
    100: '#FFFFFF',
    200: '#F6F6F6',
    300: '#F5F7FB',
    400: '#ccc',
  },

  dark: {
    100: '#323232',
    200: '#303030',
    300: '#282828',
    400: '#181818',
  },
}

export const elementsSizes = {
  xs: '32px',
  sm: '40px',
  base: '48px',
  lg: '64px',
}

export const screens = {
  xs: 420 + 29.98 + 'px',
  sm: 580 + 29.98 + 'px',
  md: 720 + 29.98 + 'px',
  lg: 1200 + 29.98 + 'px',

  xl: 1366 + 29.98 + 'px',
}

export const container = {
  xs: 420 + 'px',
  sm: 580 + 'px',
  md: 720 + 'px',
  lg: 1200 + 'px',
  xl: 1320 + 'px',
}

export const zIndex = [0, 321, 322, 323, 324, 325, 326, 327, 328, 329, 'auto']

export const ui = {
  colors,
  elementsSizes,
  btnSize: elementsSizes,
  inputSize: elementsSizes,
  screens,
  container,
  zIndex,
}
