/// <reference types="react" />
import { TDiv, sizes } from '../_types/Html.types';
export type variants = 'light' | 'dark' | 'outline' | 'filled' | 'default';
export type compactSizes = sizes | 'xs-compact' | 'sm-compact' | 'md-compact' | 'lg-compact' | 'xl-compact';
interface IButtonProps extends TDiv {
    variant?: variants;
    size?: sizes;
    onClick?: ({ args }: any) => any;
    children?: React.ReactNode;
    label?: string;
}
export type TButtonProps = IButtonProps;
export {};
