import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { motion } from 'motion/react'
import { RevealText } from '../components/reveal-text'
import { InView } from '../components/in-view'

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
  return (
    <BorderContainer>
      <Container className="corner-border-top-right relative border-x-0 border-t">
        <div className="p-5 py-20! md:p-10">
          <div className="bg-primary text-background absolute top-0 left-0 w-fit px-3 py-1 text-xs font-medium tracking-widest">
            Skills
          </div>

          <div className="space-y-6">
            <InView>
              <RevealText
                lines={[
                  <p className="text-4xl font-medium md:max-w-[40%]">
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
                <SkillCard index={i} skill={skill} key={i} />
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
}: {
  skill: (typeof skills)[number]
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: 'easeOut',
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
