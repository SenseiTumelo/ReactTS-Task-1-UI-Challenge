import React from 'react'
import btnStyle from './Button.module.css'

type btnProps = {
    text: string,
    style: React.CSSProperties
}
export const Button: React.FC<btnProps> = ({text, style}) => {
  

  return (
    <button style={style} className={btnStyle.button}>{text}</button>
  )
}
