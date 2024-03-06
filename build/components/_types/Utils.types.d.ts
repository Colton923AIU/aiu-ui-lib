export type Mandatory<T> = {
    [K in keyof T]-?: T[K];
};
import type { CSSProperties } from 'react';
type ValidTable<T> = {
    [K in keyof T]: K extends keyof CSSProperties ? T[K] : never;
};
type ShortenedCSSTable = {
    h: 'height';
    w: 'width';
    align: 'alignItems';
    justify: 'justifyContent';
    display: 'display';
    dir: 'flexDirection';
};
export type TransformedCSS<T> = ValidTable<{
    [K in keyof T as K extends keyof ShortenedCSSTable ? ShortenedCSSTable[K] : never]: T[K];
}>;
export {};
