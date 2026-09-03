import type { ComponentProps, PropsWithChildren } from 'react'

interface I_Props extends ComponentProps<'div'> {}

export const BorderContainerInner = ({
  children,
  className = '',
  ...props
}: PropsWithChildren<I_Props>) => {
  return (
    <div
      {...props}
      className={`line-background-inner mx-auto w-full max-w-[90vw] md:max-w-[75vw] ${className}`}
    >
      {children}
    </div>
  )
}
