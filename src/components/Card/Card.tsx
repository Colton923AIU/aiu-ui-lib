import * as React from 'react'

import type { ICardProps } from './Card.types'
import { getBorderRadius } from '../_utils/getBorderRadius'
import { getShadow } from '../_utils/getShadow'
import IncludeTheme from '../IncludeTheme/IncludeTheme'
import stylec from './Card.module.scss'

const Card = ({ children, styles, bg, radius, shadow, h, w }: ICardProps) => {
  return (
    <IncludeTheme>
      <div
        className={stylec.card}
        style={{
          display: 'flex',
          width: w || undefined,
          height: h || undefined,
          backgroundColor: bg || 'var(--pec-primary-color-9)',
          borderRadius: getBorderRadius(radius),
          boxShadow: getShadow(shadow),
          ...styles,
        }}
      >
        {children}
      </div>
    </IncludeTheme>
  )
}

export default Card
