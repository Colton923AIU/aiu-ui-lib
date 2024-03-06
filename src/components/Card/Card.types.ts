import type { TDiv, sizes } from '@/components/_types/Html.types'

export type ICardProps = {
  shadow?: sizes
  radius?: sizes
  bg?: string
  children?: React.ReactNode
} & TDiv
