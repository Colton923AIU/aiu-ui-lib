import * as React from 'react'

import type { TCardProps } from './Card.types'
import { getBorderRadius } from '../_utils/getBorderRadius'
import { getShadow } from '../_utils/getShadow'

const Card = ({ children, styles, bg, radius, shadow, h, w }: TCardProps) => {
  return (
    <div
      style={{
        display: 'flex',
        width: w || undefined,
        height: h || undefined,
        backgroundColor: bg || '#0065A410',
        borderRadius: getBorderRadius(radius),
        boxShadow: getShadow(shadow),
        ...styles,
      }}
    >
      {children}
    </div>
  )
}

export default Card
