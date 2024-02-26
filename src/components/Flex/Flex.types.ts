import type { TDiv, alignment } from '@/lib/Html.types'

export interface IFlexOptions extends TDiv {
    dir?: 'column' | 'row',
    justify?: alignment,
    align?: alignment,
}
