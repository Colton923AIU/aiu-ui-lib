import * as React from 'react'
const NextIcon = () => {
  return (
    <svg width={'50px'} height={'50px'} viewBox="0 0 50 50">
      <g>
        <rect
          x="5"
          y="5"
          width="10"
          height="40"
          fill="#ffffff"
          style={{
            boxShadow: '1px 1px 3px #000',
          }}
        />
        <polygon
          points="20,5 45,25 20,45"
          fill="#ffffff"
          style={{
            boxShadow: '1px 1px 3px #000',
          }}
        />
      </g>
    </svg>
  )
}

export default NextIcon
