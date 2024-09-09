import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const colors = {
  default: 'default',
  red: 'red',
  grass: 'grass',
  purple: 'purple',
  sea: 'sea',
  orange: 'orange',
}

const ThemeContext = createContext<IThemeContextValue>({} as IThemeContextValue)

export const useThemeContext = () => useContext(ThemeContext)

export function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>((Cookies.get('theme') as Theme) || Theme.light)
  const [color, setColor] = useState<Color>((Cookies.get('color') as Color) || colors.default)

  useEffect(() => {
    document.body.classList.toggle('dark', theme === Theme.dark)
    Cookies.set('theme', theme, { expires: 365 })
  }, [theme])

  useEffect(() => {
    for (const [, color] of Object.entries(colors)) {
      document.body.classList.remove(color)
    }

    document.body.classList.add(colors[color])
    Cookies.set('color', color, { expires: 365 })
  }, [color])

  useEffect(() => {}, [color])

  const dark = () => setTheme(Theme.dark)
  const light = () => setTheme(Theme.dark)
  const toggle = () => setTheme(theme === Theme.dark ? Theme.light : Theme.dark)

  function changeColor(color: Color) {
    setColor(color)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        dark,
        light,
        toggle,
        color,
        changeColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export type Color = keyof typeof colors

enum Theme {
  dark = 'dark',
  light = 'light',
}

interface IThemeContextValue {
  theme: Theme
  dark(): void
  light(): void
  toggle(): void
  color: string
  changeColor(value: string): void
}
