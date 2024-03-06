import * as React from 'react'
import styles from '../global.scss'
import type { TTheme } from '../_types/TTheme'
import defaultTheme from '../perdoceo'

export type Schemes = 'light' | 'dark'

export interface ThemeContextProps {
  theme: TTheme
  handleNewTheme: (theme: TTheme) => void
  handleNewScheme: (scheme: Schemes) => void
  scheme: Schemes
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
)

export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export interface ThemeProviderProps {
  children: React.ReactNode
  scheme?: Schemes
}

export const ThemeProvider: React.FC = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<TTheme>(defaultTheme)
  const [scheme, setScheme] = React.useState<Schemes>('light')

  const handleNewTheme = (theme: TTheme) => {
    return setTheme(theme)
  }

  const handleNewScheme = (scheme: Schemes) => {
    const root = document.documentElement

    root.setAttribute('data-pec-color-scheme', scheme)
    return setScheme(scheme)
  }

  const applyThemeStyles = (theme: TTheme, container: HTMLElement) => {
    const styleString = Object.entries(theme).reduce((acc, [selector, styles]) => {
      const styleBlock = Object.entries(styles).reduce(
        (block, [property, value]) => block + `${property}: ${value};\n`,
        ''
      )
      return acc + `${selector} { ${styleBlock} }\n`
    }, '')

    const styleElement = document.createElement('style')
    styleElement.appendChild(document.createTextNode(styleString))

    container.appendChild(styleElement)
  }

  React.useEffect(() => {
    const root = document.documentElement

    setScheme(root.getAttribute('data-pec-color-scheme') as Schemes | null)
    const themeContainer = document.getElementById('theme-provider-root')
    console.log('themeContainer: ', themeContainer)
    if (themeContainer) {
      applyThemeStyles(theme, themeContainer)
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, handleNewTheme, scheme, handleNewScheme }}
    >
      <div id="theme-provider-root" {...styles}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
