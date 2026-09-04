import { useRef } from 'react'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { motion, useScroll, useTransform } from 'motion/react'
import { RevealText } from '../components/reveal-text'
import { InView } from '../components/in-view'
import { SectionAttribute } from '../components/section-attribute'

const skills = [
  {
    title: 'React',
    image: '/skills/reactjs.svg',
  },
  {
    title: 'TypeScript',
    image: '/skills/typescript.svg',
  },
  {
    title: 'JavaScript',
    image: '/skills/javascript.svg',
  },
  {
    title: 'Next.js',
    image: '/skills/nextjs.svg',
  },
  {
    title: 'TanStack',
    image: '/skills/tanstack.svg',
  },
  {
    title: 'Tailwind CSS',
    image: '/skills/tailwindcss.svg',
  },
  {
    title: 'Node.js',
    image: '/skills/nodejs.svg',
  },
  {
    title: 'AWS',
    image: '/skills/aws.svg',
  },
  {
    title: 'Git & GitHub',
    image: '/skills/git.svg',
  },
  {
    title: 'AI Integration',
    image: '/skills/gemini.svg',
  },
]

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  })

  return (
    <BorderContainer>
      <Container className="corner-border-top-right relative border-x-0 border-t">
        <div ref={sectionRef} className="p-5 py-20! md:p-10">
          <SectionAttribute text="Skills" />

          <div className="space-y-6">
            <InView>
              <RevealText
                lines={[
                  <p className="text-3xl font-medium md:max-w-[40%] md:text-6xl">
                    Built with a stack that values{' '}
                    <span className="text-secondary">speed, scale & craft</span>
                    .
                  </p>,
                ]}
              />
            </InView>

            <InView>
              <p className="slide-up-fade-in text-secondary text-lg md:max-w-[40%]">
                Not just a stack — a daily practice. These are the tools I rely
                on to turn ideas into fast, polished, production-ready products.
              </p>
            </InView>

            <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
              {skills.map((skill, i) => (
                <SkillCard
                  index={i}
                  skill={skill}
                  scrollProgress={scrollYProgress}
                  key={skill.title}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </BorderContainer>
  )
}

const SkillCard = ({
  skill,
  index,
  scrollProgress,
}: {
  skill: (typeof skills)[number]
  index: number
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) => {
  const start = 0.3 + index * 0.035
  const end = start + 0.12

  const opacity = useTransform(
    scrollProgress,
    [start, end, 0.85, 1],
    [0, 1, 1, 0]
  )

  const y = useTransform(scrollProgress, [start, end, 0.85, 1], [40, 0, 0, -20])

  const scale = useTransform(
    scrollProgress,
    [start, end, 0.85, 1],
    [0.9, 1, 1, 0.95]
  )

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
      }}
      className="w-full space-y-4"
    >
      <div className="border-primary bg-accent flex aspect-square items-center justify-center border">
        <img
          src={skill.image}
          alt={skill.title}
          className="h-[60%] w-[60%] object-contain"
        />
      </div>

      <p className="text-secondary text-center text-sm">{skill.title}</p>
    </motion.div>
  )
}
