import { useRef } from 'react'

export const WelcomeTransition = ({
  text,
  onComplete,
}: {
  text: string
  onComplete: () => void
}) => {
  const completed = useRef(false)
  const SECTIONS = 8

  const handleComplete = () => {
    if (completed.current) return

    completed.current = true

    setTimeout(() => {
      onComplete()
    }, 200)
  }

  return (
    <div onAnimationEnd={handleComplete} className="welcome-screen-transition">
      <div className="welcome-screen-transition-sections">
        {Array.from({ length: SECTIONS }).map((_, index) => (
          <div
            key={index}
            className="welcome-screen-transition-section line-background-uni bg-[#faf7e6] dark:bg-[#18170f]"
            style={
              {
                '--index': index,
                '--reverse-index': SECTIONS - 1 - index,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="welcome-screen-transition-wrap">
        <p className="welcome-screen-transition-text">
          {text} <span className="text-primary">.</span>
        </p>

        <p className="welcome-screen-transition-text welcome-screen-transition-highlight dark:text-foreground! text-black!">
          {text} <span className="text-primary">.</span>
        </p>
      </div>
    </div>
  )
}
