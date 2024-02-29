import * as React from 'react'
import styles from './SlideController.module.scss'
import { useSlideContext } from '../SlideManager/SlideContextProvider'
import Icons from './_icons'

const SlideController = () => {
  const {
    h,
    w,
    slideNumber,
    slides,
    nextSlide,
    playing,
    togglePlaying,
    restartSlides,
  } = useSlideContext()
  const [showController, setShowController] = React.useState<boolean>(true)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseY = e.clientY
      const range1 = mouseY <= 100
      const range2 = window.innerHeight - mouseY <= 200

      if (range1 || range2) {
        if (showController === false) {
          const controller = document.getElementById('slides_controller')
          controller.className = styles.show
          return setShowController(true)
        } else {
          return
        }
      } else {
        if (showController === true) {
          const controller = document.getElementById('slides_controller')
          controller.className = styles.hide

          return setShowController(false)
        } else {
          return
        }
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [showController])

  return (
    <div
      className={showController ? styles.show : styles.hide}
      id={'slides_controller'}
      style={{
        width: w,
        height: h,
        position: 'absolute',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,0.3',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '60px',
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              textAlign: 'center',
              color: '#fff',
            }}
          >
            {slides[slideNumber].title}
          </span>
        </div>
        <div
          style={{
            width: '100%',
            height: '80px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          {slideNumber < slides.length - 1 ? (
            <>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 1rem',
                }}
                onClick={togglePlaying}
              >
                {playing ? <Icons.PauseIcon /> : <Icons.PlayIcon />}
              </div>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 1rem',
                }}
                onClick={nextSlide}
              >
                <Icons.NextIcon />
              </div>
            </>
          ) : (
            <div
              style={{
                width: '50px',
                height: '50px',
                margin: '0 1rem',
              }}
              onClick={restartSlides}
            >
              <Icons.RestartIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SlideController
