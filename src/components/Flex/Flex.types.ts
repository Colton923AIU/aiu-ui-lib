import type { TDiv, alignment } from '@/components/_types/Html.types'

interface IFlexOptions extends TDiv {
  dir?: 'column' | 'row'
  justify?: alignment
  align?: alignment
  children?: React.ReactNode
}

export type TFlexProps = IFlexOptions
