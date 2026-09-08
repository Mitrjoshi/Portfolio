import { forwardRef, type PropsWithChildren } from 'react'

type BorderContainerProps = PropsWithChildren<{
  className?: string
}>

export const BorderContainer = forwardRef<HTMLDivElement, BorderContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={`${className} line-background`}>
        {children}
      </div>
    )
  }
)

BorderContainer.displayName = 'BorderContainer'
