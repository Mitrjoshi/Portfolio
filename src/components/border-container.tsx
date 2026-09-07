import { forwardRef, type PropsWithChildren } from 'react'

export const BorderContainer = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="line-background">
        {children}
      </div>
    )
  }
)

BorderContainer.displayName = 'BorderContainer'
