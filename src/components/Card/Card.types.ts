import type { TDiv, sizes } from '@/components/_types/Html.types'

interface ICardProps extends TDiv {
  shadow?: sizes
  radius?: sizes
  bg?: string
  children?: React.ReactNode
}

export type TCardProps = ICardProps
