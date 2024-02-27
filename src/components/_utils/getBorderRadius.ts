import { sizes } from '../_types/Html.types'

export const getBorderRadius = (size: sizes) => {
  switch (size) {
    case 'xs': {
      return '3px'
    }
    case 'sm': {
      return '5px'
    }
    case 'md': {
      return '8px'
    }
    case 'lg': {
      return '12px'
    }
    case 'xl': {
      return '15px'
    }
    default: {
      return '3px'
    }
  }
}
