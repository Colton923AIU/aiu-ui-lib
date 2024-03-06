import * as React from 'react'
import { ThemeProvider } from '../../themes/ThemeProvider'

export interface IIncludeThemeProps {
  children: React.ReactNode
}

const IncludeTheme = ({ children }: IIncludeThemeProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default IncludeTheme
