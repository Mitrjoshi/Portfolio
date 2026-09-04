import { useEffect, useRef } from 'react'

type ScreenTransitionProps = {
  text: string
  onMidpoint: () => void
  onComplete: () => void
}

const ScreenTransition = ({
  text,
  onMidpoint,
  onComplete,
}: ScreenTransitionProps) => {
  const SECTIONS = 8

  const midpointRef = useRef(onMidpoint)
  const completeRef = useRef(onComplete)

  midpointRef.current = onMidpoint
  completeRef.current = onComplete

  // TEMP: disable timers while designing the midpoint state
  useEffect(() => {
    const midpointTimer = setTimeout(() => {
      midpointRef.current()
    }, 1000)

    const completeTimer = setTimeout(() => {
      completeRef.current()
    }, 1800)

    return () => {
      clearTimeout(midpointTimer)
      clearTimeout(completeTimer)
    }
  }, [])

  return (
    <div className="screen-transition">
      <div className="screen-transition-sections">
        {Array.from({ length: SECTIONS }).map((_, index) => (
          <div
            key={index}
            className="screen-transition-section line-background-uni bg-[#faf7e6] dark:bg-[#18170f]"
            style={
              {
                '--index': index,
                '--reverse-index': SECTIONS - 1 - index,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div>
        <p className="screen-transition-text">
          {text} <span className="text-primary">.</span>
        </p>
      </div>
    </div>
  )
}

export default ScreenTransition
