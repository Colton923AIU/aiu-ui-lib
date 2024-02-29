import * as React from 'react'
import type { Slide } from '../Slides'

export interface SlideContextScope {
  w: string
  h: string
  slideNumber: number
  changeToSlide: (slideNumber: number) => void
  nextSlide: () => void
  prevSlide: () => void
  togglePlaying: () => void
  restartSlides: () => void
  slides: Slide[]
  playing: boolean
}

export const SlideContext = React.createContext<SlideContextScope | null>(null)

export type SlideContextProviderProps = {
  children: React.ReactNode
  width: string
  height: string
  slides: Slide[]
}

export const SlideContextProvider = ({
  children,
  height,
  width,
  slides,
}: SlideContextProviderProps) => {
  const [slideNumber, setSlideNumber] = React.useState<number>(0)
  const [playing, setPlaying] = React.useState<boolean>(false)
  const [currentTimer, setCurrentTimer] = React.useState<NodeJS.Timeout | null>(null)
  const [timeSpentOnSlide, setTimeSpentOnSlide] = React.useState<number | null>(null)

  const slideCount = slides.length

  const changeToSlide = (slideNumber: number) => {
    if (slideNumber === null || slideCount === null) return null
    if (slideNumber <= slideCount && slideNumber >= 0) {
      return setSlideNumber(slideNumber)
    } else {
      return null
    }
  }

  const nextSlide = () => {
    if (slideNumber < slideCount - 1) {
      if (currentTimer) {
        clearTimeout(currentTimer)
        setCurrentTimer(null)
      }
      setTimeSpentOnSlide(new Date().getTime())

      return changeToSlide(slideNumber + 1)
    } else {
      return null
    }
  }

  const prevSlide = () => {
    if (slideNumber > 0) {
      return changeToSlide(slideNumber - 1)
    } else {
      return null
    }
  }

  const togglePlaying = () => {
    setPlaying(!playing)
  }

  const restartSlides = () => {
    setSlideNumber(0)
    setPlaying(false)
    setCurrentTimer(null)
    setTimeSpentOnSlide(null)
  }

  const value = {
    w: width,
    h: height,
    slideNumber: slideNumber,
    slides: slides,
    changeToSlide: changeToSlide,
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    togglePlaying: togglePlaying,
    restartSlides: restartSlides,
    playing: playing,
  }

  React.useEffect(() => {
    const timeOnSlide = slides[slideNumber].time

    if (timeSpentOnSlide === null) {
      setTimeSpentOnSlide(new Date().getTime())
    }

    if (playing) {
      const len =
        timeOnSlide -
        (Math.floor(new Date().getTime() / 1000) -
          Math.floor(timeSpentOnSlide / 1000))
      console.log(len)

      const timer = setTimeout(() => {
        nextSlide()
      }, len * 1000)

      setCurrentTimer(timer)
      return
    } else {
      if (currentTimer) {
        clearTimeout(currentTimer)
        setCurrentTimer(null)
      }

      return
    }
  }, [slideNumber, playing])

  return <SlideContext.Provider value={value}>{children}</SlideContext.Provider>
}

export const useSlideContext = () => {
  return React.useContext(SlideContext)
}
