import React from 'react'

type props = {
    children: React.ReactNode,
    className?: string
}
export const ContentContainer: React.FC<props> = ({children, className}) => {
  return (
    <div className={className} style={{maxWidth: 1200, padding: 10}}>{children}</div>
  )
}
