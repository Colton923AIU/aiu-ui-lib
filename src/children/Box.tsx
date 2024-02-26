import * as React from 'react'

export const Box = () => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '1px',
        margin: '1px',
      }}
    />
  )
}

export const Boxes = () => {
  return (
    <>
      <Box key={'box_1'} />
      <Box key={'box_2'} />
      <Box key={'box_3'} />
    </>
  )
}
