import { useRef } from 'react'
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from 'framer-motion'

import { BorderContainerInner } from '../components/border-container-inner'
import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { SectionAttribute } from '../components/section-attribute'

const STATS = [
  {
    value: '10+',
    label: 'Years designing',
    height: 46,
  },
  {
    value: '150+',
    label: 'Websites designed',
    height: 100,
  },
  {
    value: '50+',
    label: 'Products shipped',
    height: 47,
  },
  {
    value: '10+',
    label: 'Industries worked',
    height: 38,
  },
]

export const ByTheNumbers = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    /*
     * This creates the scroll distance.
     * The user visually stays inside this section
     * while the bars fill.
     */
    <div ref={sectionRef} className="relative h-[320vh]">
      {/*
       * Keep the actual section pinned below the 81px header.
       */}
      <div className="sticky top-[81px] h-[calc(100vh-81px)] overflow-hidden">
        <BorderContainerInner className="corner-border-top-right bg-background! h-full w-full border-x">
          <div className="flex h-full flex-col p-5 py-10 md:p-10">
            <SectionAttribute text="By The Numbers" />

            <div className="mt-10 flex w-full flex-col items-center md:mt-14">
              <RevealText
                lines={[
                  <p className="mx-auto w-fit text-center text-3xl font-medium md:text-5xl">
                    Ten years{' '}
                    <span className="text-secondary">by the numbers.</span>
                  </p>,
                ]}
              />

              <InView>
                <p className="text-secondary slide-up-fade-in mx-auto mt-2 text-center text-lg lg:max-w-[60ch]">
                  Products shipped, teams joined, systems maintained — the
                  decade counted rather than described.
                </p>
              </InView>
            </div>

            {/*
             * Fixed chart height is important.
             * The percentage heights of individual bars
             * are calculated against this.
             */}
            <div className="mt-auto grid h-[280px] grid-cols-2 items-end gap-4 md:h-[320px] md:grid-cols-4 md:gap-8">
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
  /*
   * First block:
   * always 100% filled.
   *
   * Remaining scroll:
   *
   * 0.00 → 0.33 = Block 2
   * 0.33 → 0.66 = Block 3
   * 0.66 → 1.00 = Block 4
   */

  const animatedScale = useTransform(
    progress,
    index === 1 ? [0, 0.333] : index === 2 ? [0.333, 0.666] : [0.666, 1],
    [0, 1],
    {
      clamp: true,
    }
  )

  return (
    <div className="flex h-full min-w-0 flex-col justify-end">
      <p className="mb-2 text-3xl leading-none font-medium md:text-4xl">
        {stat.value}
      </p>

      <div
        className="diagonal-line-background border-foreground relative w-full shrink-0 overflow-hidden border"
        style={{
          height: `${stat.height}%`,
        }}
      >
        {index === 0 ? (
          /*
           * Block 1 starts filled.
           */
          <div className="bg-primary absolute inset-0" />
        ) : (
          /*
           * Blocks 2–4 progressively fill
           * from bottom → top.
           */
          <motion.div
            className="bg-primary absolute inset-0"
            style={{
              scaleY: animatedScale,
              transformOrigin: 'bottom center',
            }}
          />
        )}
      </div>

      <p className="text-secondary mt-4 shrink-0 text-sm">{stat.label}</p>
    </div>
  )
}
