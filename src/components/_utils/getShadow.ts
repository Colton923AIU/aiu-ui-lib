import { sizes } from '../_types/Html.types'

export const getShadow = (size: sizes) => {
  switch (size) {
    case 'xs': {
      return '1px 1px 1px 0px rgba(0,0,90,0.5)'
    }
    case 'sm': {
      return '1px 1px 3px 0px rgba(0,0,90,0.5)'
    }
    case 'md': {
      return '2px 2px 5px 0px rgba(0,0,90,0.5)'
    }
    case 'lg': {
      return '1px 1px 8px 0px rgba(0,0,90,0.5)'
    }
    case 'xl': {
      return '0px 0px 12px 1px rgba(0,0,90,0.5)'
    }
    default: {
      return '1px 1px 1px 0px rgba(0,0,90,0.5)'
    }
  }
}
