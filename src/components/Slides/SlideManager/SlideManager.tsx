import * as React from 'react'
import { SlideContextProvider } from './SlideContextProvider'
import type { Slide } from '../Slides'

export interface ISlideManagerProps {
  children: React.ReactNode
  slides: Slide[]
}

const SlideManager = ({ children, slides }: ISlideManagerProps) => {
  return (
    <SlideContextProvider height="100%" width="100%" slides={slides}>
      {children}
    </SlideContextProvider>
  )
}

export default SlideManager
