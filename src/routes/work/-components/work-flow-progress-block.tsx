import { useEffect, useState } from 'react'

export const WorkFlowProgressBlock = ({
  index,
  text,
  description,
  ongoing,
}: {
  index: number
  text: string
  description: string
  ongoing: boolean
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!ongoing) {
      setProgress(0)
      return
    }

    // Start from the left every time this block becomes active.
    setProgress(0)

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setProgress(100)
      })
    })

    return () => cancelAnimationFrame(frame)
  }, [ongoing])

  return (
    <div
      data-ongoing={ongoing}
      className="bg-background relative border p-3 transition-[filter] duration-200 data-[ongoing=true]:brightness-120 md:p-4"
    >
      <div className="space-y-4">
        <p
          className={`text-xs transition-colors duration-200 ${
            ongoing ? 'text-primary' : 'text-secondary'
          }`}
        >
          {String(index).padStart(2, '0')}
        </p>

        <div className="space-y-2">
          <p className="font-medium">{text}</p>

          <p className="text-secondary text-xs">{description}</p>
        </div>
      </div>

      {/* Track */}
      <div className="bg-secondary/50 absolute bottom-0 left-0 w-full" />

      {/* Active progress only */}
      <div
        style={{
          width: `${progress}%`,
        }}
        className={`bg-green-accent/85 absolute bottom-0 left-0 h-[2px] transition-[width] ease-linear ${
          ongoing ? 'duration-[2000ms]' : 'duration-0'
        }`}
      />
    </div>
  )
}
