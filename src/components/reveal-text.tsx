import type { ReactNode } from 'react'

type RevealTextProps = {
  lines: ReactNode[]
  delay?: number
}

export const RevealText = ({ lines, delay = 0 }: RevealTextProps) => {
  return (
    <div className="reveal-text">
      {lines.map((line, index) => (
        <div key={index} className="reveal-text-line">
          <div
            className="reveal-text-content"
            style={{
              animationDelay: `${delay + index * 0.12}s`,
            }}
          >
            {line}
          </div>
        </div>
      ))}
    </div>
  )
}
