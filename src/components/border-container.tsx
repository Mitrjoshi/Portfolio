import type { PropsWithChildren } from 'react'

export const BorderContainer = ({ children }: PropsWithChildren) => {
  return <div className="line-background">{children}</div>
}
