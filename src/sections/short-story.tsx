import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { SectionAttribute } from '../components/section-attribute'
import { motion, MotionValue, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export const ShortStory = () => {
  return (
    <div className="relative p-5 pt-20 md:p-10">
      <SectionAttribute text="How I Work" />

      <div className="relative grid items-start gap-8 lg:grid-cols-2">
        <InView className="top-30 h-fit self-start lg:sticky">
          <RevealText
            lines={[
              <p className="text-3xl font-medium">Long story short, </p>,
              <p className="text-3xl font-medium">I've been designing</p>,
              <p className="text-secondary text-3xl font-medium">
                for over 4 years
              </p>,
            ]}
          />

          <p className="text-secondary mt-4">2023 — Now · India, IST</p>
        </InView>

        <div className="space-y-8">
          <div className="">
            <ScrollText />
          </div>

          <div className="space-y-2">
            <p className="text-secondary text-lg font-light">
              And yes — I'm still deep in UX/UI and Figma every day.
            </p>
            <p className="text-primary text-lg font-light">
              That's the fun part.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="border px-4 py-1">
              <p className="text-secondary">hellohello</p>
            </div>
            <div className="border px-4 py-1">
              <p className="text-secondary">hello</p>
            </div>
            <div className="border px-4 py-1">
              <p className="text-secondary">hellohellohello</p>
            </div>
            <div className="border px-4 py-1">
              <p className="text-secondary">hello</p>
            </div>
            <div className="border px-4 py-1">
              <p className="text-secondary">hehellollo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Exercitationem, atque rerum unde harum veniam dolores adipisci labore minima
ipsa quis Lorem ipsum dolor sit amet consectetur adipisicing elit.
Exercitationem, atque rerum unde harum veniam dolores adipisci labore minima
ipsa quis`

export const ScrollText = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  })

  const words = text.split(' ')

  return (
    <div ref={ref}>
      <p className="text-2xl font-medium tracking-widest md:text-4xl">
        {words.map((word, index) => (
          <Word
            key={index}
            index={index}
            total={words.length}
            progress={scrollYProgress}
          >
            {word}
          </Word>
        ))}
      </p>
    </div>
  )
}

const Word = ({
  children,
  index,
  total,
  progress,
}: {
  children: React.ReactNode
  index: number
  total: number
  progress: MotionValue<number>
}) => {
  const revealStart = (index / total) * 0.8
  const revealEnd = revealStart + 0.08

  const blur = useTransform(progress, [revealStart, revealEnd], [4, 0])

  const y = useTransform(progress, [revealStart, revealEnd], [8, 0])
  const opacity = useTransform(progress, [revealStart, revealEnd], [0.8, 1])

  const color = useTransform(
    progress,
    [revealStart, revealEnd],
    ['var(--secondary)', 'var(--foreground)']
  )

  const filter = useTransform(blur, (value) => `blur(${value}px)`)

  return (
    <motion.span
      style={{
        filter,
        y,
        color,
        opacity,
      }}
      className="inline-block"
    >
      {children}&nbsp;
    </motion.span>
  )
}
