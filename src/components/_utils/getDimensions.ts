import type { compactSizes } from '../Button/Button.types'

const makeCompact = (size: compactSizes, width: number, height: number) => {
  if (size.includes('compact')) {
    const d_height = Math.floor(height * 0.9)
    const d_width = Math.floor(width * 0.8)
    return {
      h: d_height,
      w: d_width,
    }
  } else {
    return {
      h: height,
      w: width,
    }
  }
}

const getDimensions: (size: compactSizes) => { h: number; w: number } = (size) => {
  let dim = ''
  let height = 16
  let width = 32

  switch (size.replace('-compact', '')) {
    case 'xs': {
      break
    }
    case 'sm': {
      height += 8
      width += 16
    }
    case 'md': {
      height += 16
      width += 32
    }
    case 'lg': {
      height += 32
      width += 64
    }
    case 'xl': {
      height += 64
      width += 128
    }
  }
  return makeCompact(size, width, height)
}

export default getDimensions
