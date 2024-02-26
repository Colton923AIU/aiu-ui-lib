import * as React from 'react'

import type { ICardOptions } from './Card.types'
import { getBorderRadius } from '../../lib/getBorderRadius'
import { getShadow } from '../../lib/getShadow'

export interface CardProps extends ICardOptions {
  children: React.ReactNode
}

const Card = ({ children, styles, bg, radius, shadow, h, w }: CardProps) => {
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
