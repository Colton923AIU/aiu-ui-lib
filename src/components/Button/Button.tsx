import * as React from 'react'
import type { TButtonProps } from './Button.types'
import getDimensions from '../_utils/getDimensions'

const Button = ({
  label,
  children,
  h,
  onClick,
  size,
  styles,
  variant,
  w,
}: TButtonProps) => {
  const dims = getDimensions(size)
  return (
    <>
      {label ? (
        <label
          className={`label-${variant ? variant : 'default'}`}
          htmlFor={label}
          style={{
            height: h ? h : dims.h,
            width: w ? w : dims.w,
          }}
        >
          {label}
        </label>
      ) : null}
      <input
        className={`button-${variant ? variant : 'default'}`}
        style={{
          height: h ? h : dims.h,
          width: w ? w : dims.w,
          ...styles,
        }}
        id={label}
        onClick={() => {
          onClick
        }}
      >
        {children}
      </input>
    </>
  )
}

export default Button
