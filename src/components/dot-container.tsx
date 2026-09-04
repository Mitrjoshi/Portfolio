import React from 'react'

type DotContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export const DotContainer = ({
  children,
  className = '',
  ...props
}: DotContainerProps) => {
  return (
    <div className={`dotted-background ${className}`} {...props}>
      {children}
    </div>
  )
}
