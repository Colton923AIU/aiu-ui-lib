import * as React from 'react'
import Slide from './Slide'
import SlideController from './SlideController'
import SlideManager from './SlideManager'
import IncludeTheme from '../IncludeTheme/IncludeTheme'

export type Slide = {
  title: string
  children?: React.ReactNode
  time: number
}

export interface ISlidesProps {
  slides: Slide[]
}

const Slides = ({ slides }: ISlidesProps) => {
  return (
    <IncludeTheme>
      <SlideManager slides={slides}>
        <div
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '800px',
            maxHeight: '600px',
            position: 'absolute',
          }}
        >
          <SlideController />
          <Slide />
        </div>
      </SlideManager>
    </IncludeTheme>
  )
}

export default Slides
