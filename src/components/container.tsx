import type { HTMLAttributes, PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Container = ({
  children,
  className = '',
  ...props
}: ContainerProps) => {
  return (
    <div
      className={`bg-background mx-auto w-full max-w-[90vw] border-x md:max-w-[75vw] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
