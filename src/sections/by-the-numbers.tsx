import { useRef, useState } from 'react'
import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { BorderContainerInner } from '../components/border-container-inner'
import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { SectionAttribute } from '../components/section-attribute'
import { useTransitionNavigate } from '../providers/transition-navigation'

const STATS = [
  {
    value: `${new Date().getFullYear() - 2022}+`,
    label: 'Years building',
    height: 40,
  },
  { value: '50+', label: 'Websites developed', height: 100 },
  { value: '10+', label: 'Products shipped', height: 50 },
  { value: '5+', label: 'Industries worked in', height: 16 },
]

// Splits "50+" into { number: 50, suffix: '+' } so the digits can be
// animated as a count while any trailing text stays static.
const parseStatValue = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/)

  if (!match) {
    return { number: 0, suffix: value }
  }

  return { number: parseInt(match[1], 10), suffix: match[2] }
}

export const ByTheNumbers = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { transitionTo } = useTransitionNavigate()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={sectionRef} className="relative h-auto sm:h-[320vh]">
      <div className="h-auto overflow-hidden sm:sticky sm:top-17.25 sm:h-[calc(100vh-69px)] md:top-20.25 md:h-[calc(100vh-81px)]">
        <BorderContainerInner className="corner-border-top-right bg-background! h-full w-full border-x">
          <div className="flex h-full flex-col p-5 py-10 md:p-10">
            <SectionAttribute text="By The Numbers" />

            <div className="mt-10 flex w-full flex-col items-center md:mt-14">
              <RevealText
                lines={[
                  <p className="mx-auto w-fit text-center text-3xl font-medium md:text-5xl">
                    Built over the years,{' '}
                    <span className="text-secondary">
                      measured by the numbers.
                    </span>
                  </p>,
                ]}
              />

              <InView>
                <p className="text-secondary slide-up-fade-in mx-auto mt-2 text-center text-lg lg:max-w-[60ch]">
                  Websites developed, products shipped, and industries explored
                  — a snapshot of the work behind the code.
                </p>
              </InView>

              <button
                onClick={() => transitionTo('/profile', 'Profile')}
                className="group hover:text-primary hover:border-primary mt-8 flex w-fit cursor-pointer items-center gap-1 border-b pb-1 duration-200"
              >
                <p>Read the full profile</p>

                <ArrowRight
                  className="duration-200 group-hover:translate-x-1"
                  size={18}
                />
              </button>
            </div>

            {/* Mobile */}
            <div className="mt-12 grid h-[400px] grid-cols-2 items-end gap-4 sm:hidden">
              {STATS.map((stat, index) => (
                <StatBar
                  key={stat.label}
                  stat={stat}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>

            {/* sm+ — original layout */}
            <div className="mt-auto hidden h-[280px] grid-cols-2 items-end gap-4 sm:grid md:h-[320px] md:grid-cols-4 md:gap-8">
              {STATS.map((stat, index) => (
                <StatBar
                  key={stat.label}
                  stat={stat}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </BorderContainerInner>
      </div>
    </div>
  )
}

type StatBarProps = {
  stat: {
    value: string
    label: string
    height: number
  }
  index: number
  progress: MotionValue<number>
}

const StatBar = ({ stat, index, progress }: StatBarProps) => {
  const { number, suffix } = parseStatValue(stat.value)

  // Each stat gets its own slice of the scroll range so the bars/numbers
  // step in one after another rather than all animating at once.
  const segment = 1 / STATS.length
  const rangeStart = index * segment
  const rangeEnd = rangeStart + segment

  const animatedScale = useTransform(progress, [rangeStart, rangeEnd], [0, 1], {
    clamp: true,
  })

  const animatedCount = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [0, number],
    {
      clamp: true,
    }
  )

  const [displayNumber, setDisplayNumber] = useState(0)

  useMotionValueEvent(animatedCount, 'change', (latest) => {
    setDisplayNumber(Math.round(latest))
  })

  const displayValue = `${displayNumber}${suffix}`

  return (
    <>
      {/* Mobile only */}
      <div className="flex h-full min-h-0 min-w-0 flex-col sm:hidden">
        <p className="mb-2 shrink-0 text-3xl leading-none font-medium">
          {displayValue}
        </p>

        {/* Bar height fits inside remaining container space */}
        <div className="relative min-h-0 flex-1">
          <div
            className="diagonal-line-background border-foreground absolute bottom-0 left-0 w-full overflow-hidden border"
            style={{
              height: `${stat.height}%`,
            }}
          >
            <motion.div
              className="bg-primary absolute inset-0"
              style={{
                scaleY: animatedScale,
                transformOrigin: 'bottom center',
              }}
            />
          </div>
        </div>

        <p className="text-secondary mt-4 shrink-0 text-center text-sm">
          {stat.label}
        </p>
      </div>

      {/* sm+ — exact old bar structure */}
      <div className="hidden h-full min-w-0 flex-col justify-end sm:flex">
        <p className="mb-2 text-3xl leading-none font-medium md:text-4xl">
          {displayValue}
        </p>

        <div
          className="diagonal-line-background border-foreground relative w-full shrink-0 overflow-hidden border"
          style={{
            height: `${stat.height}%`,
          }}
        >
          <motion.div
            className="bg-primary absolute inset-0"
            style={{
              scaleY: animatedScale,
              transformOrigin: 'bottom center',
            }}
          />
        </div>

        <p className="text-secondary mt-4 shrink-0 text-center text-sm">
          {stat.label}
        </p>
      </div>
    </>
  )
}
