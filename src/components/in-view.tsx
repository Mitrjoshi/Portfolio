import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type InViewProps = {
  children: ReactNode
  className?: string
  animationClassName?: string
  once?: boolean
  amount?: number
}

export const InView = ({
  children,
  className = '',
  animationClassName = 'slide-up-fade-in',
  once = true,
  amount = 0.3,
}: InViewProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, {
    once,
    amount,
  })

  return (
    <motion.div
      ref={ref}
      className={`${className} ${isInView ? animationClassName : 'opacity-0'}`}
    >
      {children}
    </motion.div>
  )
}
