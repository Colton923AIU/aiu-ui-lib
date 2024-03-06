import type { CSSProperties } from 'react'

export type ThemeTitles = 'perdoceo' | 'aiu-system' | 'ctu' | 'cal-southern' | 'aiu'

export type Elements =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'a'
  | 'input'
  | 'img'
  | 'div'
  | 'span'

export type TTheme = {
  title: ThemeTitles
} & Record<Elements, Partial<CSSProperties>>
