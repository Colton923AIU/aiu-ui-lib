import * as React from 'react'

import type { TFlexProps } from './Flex.types'

const Flex = ({ styles, align, dir, justify, h, w, children }: TFlexProps) => {
  return (
    <div
      style={{
        display: 'flex',
        width: w || undefined,
        height: h || undefined,
        alignItems: align || 'center',
        flexDirection: dir || 'column',
        justifyContent: justify || 'center',
        ...styles,
      }}
    >
      {children}
    </div>
  )
}

export default Flex
