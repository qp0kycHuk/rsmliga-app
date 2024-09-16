export const colors = {
  primary: withOpacity('--primary-rgb'),
  green: withOpacity('--green-rgb'),
  yellow: withOpacity('--yellow-rgb'),
  blue: withOpacity('--blue-rgb'),
  red: withOpacity('--red-rgb'),
  orange: withOpacity('--orange-rgb'),
  purple: withOpacity('--purple-rgb'),
  // primary: '#778beb', // Фиолетовый
  // primary: '#10ac84', // Бирюзовый
  gray: '#DDD',
  white: '#fff',
  black: '#242424',
  transparent: 'rgba(0,0,0,0)',
  ['gray-light']: '#F5F7FB',
  l1: withOpacity('--bg1-rgb'),
  l2: withOpacity('--bg2-rgb'),
  l3: withOpacity('--bg3-rgb'),
  default: withOpacity('--default-rgb'),

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

function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue: number }) => {
    if (opacityValue !== undefined) {
      return 'rgba(var(' + variableName + '), ' + opacityValue + ')'
    }

    return 'rgba(var(' + variableName + '), 1)'
  }
}
