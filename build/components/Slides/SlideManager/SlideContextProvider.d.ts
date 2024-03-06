import * as React from 'react';
import type { Slide } from '../Slides';
export interface SlideContextScope {
    w: string;
    h: string;
    slideNumber: number;
    changeToSlide: (slideNumber: number) => void;
    nextSlide: () => void;
    prevSlide: () => void;
    togglePlaying: () => void;
    restartSlides: () => void;
    slides: Slide[];
    playing: boolean;
}
export declare const SlideContext: React.Context<SlideContextScope>;
export type SlideContextProviderProps = {
    children: React.ReactNode;
    width: string;
    height: string;
    slides: Slide[];
};
export declare const SlideContextProvider: ({ children, height, width, slides, }: SlideContextProviderProps) => JSX.Element;
export declare const useSlideContext: () => SlideContextScope;
