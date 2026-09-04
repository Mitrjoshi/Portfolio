import { useEffect, useRef, useState } from 'react'
import { SectionAttribute } from '../components/section-attribute'

const brands = [
  {
    title: 'Ogilvy',
    description: 'Creative experiences for brand impact.',
  },
  {
    title: 'Maaza',
    description: 'Refreshing experiences for consumer engagement.',
  },
  {
    title: 'Sprite',
    description: 'Energetic experiences for youth engagement.',
  },
  {
    title: 'Pidilite',
    description: 'Digital solutions for stronger engagement.',
  },
  {
    title: 'Cadbury',
    description: 'Memorable experiences for consumer delight.',
  },
  {
    title: 'ITC',
    description: 'Digital experiences across diverse brands.',
  },
  {
    title: 'Vadilal',
    description: 'Fun experiences for consumer campaigns.',
  },
  {
    title: 'Yippee',
    description: 'Interactive experiences for younger audiences.',
  },
  {
    title: 'Milka',
    description: 'Premium experiences for brand campaigns.',
  },
  {
    title: 'Flipkart',
    description: 'Scalable experiences for consumer engagement.',
  },
]

type HoveredBrand = {
  brand: (typeof brands)[number]
  x: number
} | null

export const CompaniesWorkedWith = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredBrand, setHoveredBrand] = useState<HoveredBrand>(null)
  const [typedDescription, setTypedDescription] = useState('')
  const [typingState, setTypingState] = useState<
    'idle' | 'thinking' | 'typing' | 'done'
  >('idle')

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement>,
    brand: (typeof brands)[number]
  ) => {
    const container = containerRef.current

    if (!container) return

    const itemRect = event.currentTarget.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    const itemCenter = itemRect.left - containerRect.left + itemRect.width / 2

    // Prevent card from going too far outside the container.
    const cardHalfWidth = 120

    const x = Math.max(
      cardHalfWidth,
      Math.min(itemCenter, containerRect.width - cardHalfWidth)
    )

    setHoveredBrand({
      brand,
      x,
    })
  }

  useEffect(() => {
    if (!hoveredBrand) {
      setTypedDescription('')
      setTypingState('idle')
      return
    }

    setTypedDescription('')
    setTypingState('thinking')

    let interval: ReturnType<typeof setInterval> | undefined

    const thinkingTimeout = setTimeout(() => {
      const words = hoveredBrand.brand.description.split(' ')
      let index = 0

      setTypingState('typing')

      interval = setInterval(() => {
        index += 1

        setTypedDescription(words.slice(0, index).join(' '))

        if (index >= words.length) {
          if (interval) clearInterval(interval)
          setTypingState('done')
        }
      }, 100)
    }, 250)

    return () => {
      clearTimeout(thinkingTimeout)

      if (interval) {
        clearInterval(interval)
      }
    }
  }, [hoveredBrand?.brand.title])

  return (
    <div className="relative p-5 md:p-10">
      <SectionAttribute text="Companies Worked With" />

      <div className="mx-auto pt-20 pb-15 text-center md:max-w-[40ch]">
        <p className="text-secondary">
          Plus many other projects I can't publicly share, but they're some of
          my favorite work.
        </p>
      </div>

      {/* This wrapper does NOT have overflow-hidden */}
      <div
        ref={containerRef}
        className="relative mx-auto w-full md:max-w-[75%] lg:max-w-[60%]"
      >
        {/* Hover card is OUTSIDE the overflow-hidden marquee */}
        {hoveredBrand && (
          <div
            key={hoveredBrand.brand.title}
            style={{
              left: hoveredBrand.x,
            }}
            className="brand-card-reveal bg-background pointer-events-none absolute bottom-[calc(100%+20px)] z-20 min-w-60 -translate-x-1/2 space-y-2 border p-4"
          >
            <div className="flex items-center gap-2">
              <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />

              <p className="text-secondary font-medium whitespace-nowrap">
                {hoveredBrand.brand.title}
              </p>
            </div>

            <p className="text-secondary min-h-5">
              {typingState === 'thinking' ? (
                <span className="thinking-dots inline-flex items-center">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              ) : (
                <>
                  {typedDescription}

                  {typingState === 'typing' && (
                    <span className="typing-caret text-primary ml-0.5 inline-block">
                      |
                    </span>
                  )}
                </>
              )}
            </p>
          </div>
        )}

        {/* Only marquee content gets clipped */}
        <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div
            className="marquee-track flex w-max items-center gap-6 md:gap-10"
            style={{
              animationPlayState: hoveredBrand ? 'paused' : 'running',
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.title}-${index}`}
                onMouseEnter={(event) => handleMouseEnter(event, brand)}
                onMouseLeave={() => setHoveredBrand(null)}
                className="group flex shrink-0 cursor-default items-center gap-6 md:gap-10"
              >
                <p className="text-secondary group-hover:text-foreground text-xl font-medium whitespace-nowrap transition-colors duration-200 md:text-2xl">
                  {brand.title}
                </p>

                <span className="bg-primary h-[4px] w-[4px] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
