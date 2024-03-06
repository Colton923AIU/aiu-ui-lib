import * as React from 'react';
export type Slide = {
    title: string;
    children?: React.ReactNode;
    time: number;
};
export interface ISlidesProps {
    slides: Slide[];
}
declare const Slides: ({ slides }: ISlidesProps) => JSX.Element;
export default Slides;
