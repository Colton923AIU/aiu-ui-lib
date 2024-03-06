import * as React from 'react';
import type { Slide } from '../Slides';
export interface ISlideManagerProps {
    children: React.ReactNode;
    slides: Slide[];
}
declare const SlideManager: ({ children, slides }: ISlideManagerProps) => JSX.Element;
export default SlideManager;
