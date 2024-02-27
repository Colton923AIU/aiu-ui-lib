// The Mandatory Generic Type will consume a type with
// optional typings, and return a type with all keys non-optional.

export type Mandatory<T> = {
  [K in keyof T]-?: T[K]
}

// The TransformedCSS Generic Type will transform the shortened
// version of css for component props to React.CSSProperties

import type { CSSProperties } from 'react'
type ValidTable<T> = {
  [K in keyof T]: K extends keyof CSSProperties ? T[K] : never
}
type ShortenedCSSTable = {
  h: 'height'
  w: 'width'
  align: 'alignItems'
  justify: 'justifyContent'
  display: 'display'
  dir: 'flexDirection'
}
export type TransformedCSS<T> = ValidTable<{
  [K in keyof T as K extends keyof ShortenedCSSTable
    ? ShortenedCSSTable[K]
    : never]: T[K]
}>
