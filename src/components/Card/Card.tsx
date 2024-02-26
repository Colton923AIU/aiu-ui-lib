import * as React from 'react'

import type { ICardOptions } from './Card.types'
import { getBorderRadius } from '../../lib/getBorderRadius'
import { getShadow } from '../../lib/getShadow'

export interface CardProps extends ICardOptions {
  children: React.ReactNode
}

const Card = ({ children, styles, bg, radius, shadow, h, w }: CardProps) => {
  const br = getBorderRadius(radius)
  const sh = getShadow(shadow)

  return (
    <div
      style={{
        display: 'flex',
        width: w || undefined,
        height: h || undefined,
        backgroundColor: bg || '#0065A4',
        borderRadius: br,
        boxShadow: sh,
        ...styles,
      }}
    >
      {children}
    </div>
  )
}

export default Card
