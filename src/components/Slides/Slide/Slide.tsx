import * as React from 'react'
import styles from './Slide.module.scss'
import { useSlideContext } from '../SlideManager/SlideContextProvider'

const Slide = () => {
  const { w, h, slides, slideNumber } = useSlideContext()

  return (
    <div
      style={{
        width: w,
        height: h,
        overflow: 'hidden',
      }}
    >
      {slides[slideNumber].children}
    </div>
  )
}

export default Slide
