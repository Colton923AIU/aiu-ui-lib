import type { TDiv, alignment } from '@/components/_types/Html.types'

export interface IFlexOptions extends TDiv {
  dir?: 'column' | 'row'
  justify?: alignment
  align?: alignment
}
