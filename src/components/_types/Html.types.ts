import { CSSProperties } from "react";

export type alignment = 'center' | 'right' | 'left' | 'space-around' | 'space-between' | 'space-evenly' | 'flex-start' | 'flex-end'
export type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface TDiv {
    w?: string | undefined,
    h?: string | undefined,
    styles?: CSSProperties
}
