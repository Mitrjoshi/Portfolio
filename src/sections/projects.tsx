import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'motion/react'
import { ArrowRight, PlusIcon } from 'lucide-react'

import { Button } from '../components/button'
import { RevealText } from '../components/reveal-text'
import { useTransitionNavigate } from '../providers/transition-navigation'

const projects = [
  {
    title: 'Pathlens',
    platform: 'SaaS App',
    image: '/projects/pathlens.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium!',
  },
  {
    title: 'Retail',
    platform: 'Interactive Web',
    image:
      'https://cdn.sanity.io/images/uh01905c/production/e842ff688dba7aeab1c3d07e5eae4d26894df4d9-2500x1406.avif?w=1600&q=75&auto=format',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium!',
  },
  {
    title: 'Brand',
    platform: 'Web Platform',
    image:
      'https://cdn.sanity.io/images/uh01905c/production/e842ff688dba7aeab1c3d07e5eae4d26894df4d9-2500x1406.avif?w=1600&q=75&auto=format',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium!',
  },
  {
    title: 'Consumer',
    platform: 'Mobile Web',
    image:
      'https://cdn.sanity.io/images/uh01905c/production/e842ff688dba7aeab1c3d07e5eae4d26894df4d9-2500x1406.avif?w=1600&q=75&auto=format',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium!',
  },
  {
    title: 'Product',
    platform: 'Microsite',
    image:
      'https://cdn.sanity.io/images/uh01905c/production/e842ff688dba7aeab1c3d07e5eae4d26894df4d9-2500x1406.avif?w=1600&q=75&auto=format',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium!',
  },
  {
    title: 'Interactive',
    platform: 'Digital Experience',
    image:
      'https://cdn.sanity.io/images/uh01905c/production/e842ff688dba7aeab1c3d07e5eae4d26894df4d9-2500x1406.avif?w=1600&q=75&auto=format',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium!',
  },
]

type Project = (typeof projects)[number]

export const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null)

  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [openProject, setOpenProject] = useState<number | null>(null)

  const { transitionTo } = useTransitionNavigate()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const parent = projectsRef.current

    if (!parent) return

    const rect = parent.getBoundingClientRect()

    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  const openProjectPage = (project: Project) => {
    transitionTo('/projects/$title', project.title, {
      title: project.title.toLowerCase(),
    })
  }

  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-8 p-5 pt-10 md:p-10 lg:flex-row">
        <div className="w-full pt-12">
          <RevealText
            lines={[
              <p className="text-3xl font-medium md:text-6xl">
                Explore my work,{' '}
                <span className="block">
                  process <span className="text-secondary">and more.</span>
                </span>
              </p>,
            ]}
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-secondary slide-up-fade-in text-lg">
            Case studies and side explorations across web, SaaS, and apps. Keep
            exploring, there's more than just UI design.
          </p>

          <div className="slide-up-fade-in flex flex-wrap items-center gap-4">
            <Button text="Screenshots Instead" showIcon />
            <Button text="Explore AI Work" showIcon />
          </div>
        </div>
      </div>

      {/* Parent for grid + cursor card */}
      <div ref={projectsRef} className="relative">
        <div className="grid divide-y border-t p-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:p-0 lg:grid-cols-6">
          {projects.map((project, i) => {
            const isOpen = openProject === i

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  height: isOpen ? 'auto' : 88,
                }}
                transition={{
                  height: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                onMouseEnter={(event) => {
                  handleMouseMove(event)
                  setHoveredProject(project)
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => {
                  /*
                   * Mobile:
                   * Toggle accordion.
                   *
                   * Desktop:
                   * Navigate directly to project.
                   */
                  if (window.innerWidth < 768) {
                    setOpenProject((current) => (current === i ? null : i))

                    return
                  }

                  openProjectPage(project)
                }}
                className="group relative cursor-pointer overflow-hidden md:aspect-9/16 md:!h-auto"
              >
                {/* Same content */}
                <div className="absolute inset-0 z-10 flex justify-between p-4">
                  {/* Same title/content */}
                  <motion.div
                    layout="position"
                    transition={{
                      layout: {
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className={`${
                      isOpen ? 'self-end' : 'self-center'
                    } md:self-end`}
                  >
                    <div className="transition-all duration-300 md:group-hover:translate-y-2 md:group-hover:opacity-0">
                      <p
                        className={`text-lg font-medium transition-colors duration-300 md:text-xl lg:text-2xl ${
                          isOpen ? 'text-white' : ''
                        }`}
                      >
                        {project.title}
                      </p>

                      {/* Platform → Open Project */}
                      <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                          <motion.button
                            key="open-project"
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation()
                              openProjectPage(project)
                            }}
                            initial={{
                              opacity: 0,
                              y: 5,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: -5,
                            }}
                            transition={{
                              duration: 0.2,
                              delay: 0.15,
                            }}
                            className="text-primary flex cursor-pointer items-center gap-2 text-sm"
                          >
                            Open project
                            <ArrowRight size={18} strokeWidth={1} />
                          </motion.button>
                        ) : (
                          <motion.p
                            key="platform"
                            initial={{
                              opacity: 0,
                              y: 5,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: -5,
                            }}
                            transition={{
                              duration: 0.15,
                            }}
                            className="text-secondary"
                          >
                            {project.platform}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Same Plus / Close icon */}
                  <motion.div
                    layout="position"
                    transition={{
                      layout: {
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className={`${
                      isOpen ? 'self-start' : 'self-center'
                    } md:self-start`}
                  >
                    <PlusIcon
                      className={`transition-all duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0 ${
                        isOpen
                          ? 'text-primary rotate-45'
                          : 'text-secondary rotate-0'
                      }`}
                      size={32}
                      strokeWidth={1}
                    />
                  </motion.div>
                </div>

                {/* Pattern background */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="line-background-uni absolute inset-0 z-2 md:hidden"
                />

                {/* 
                  Image is always rendered at its final 16:10 size.
                  Parent simply reveals/clips it as accordion opens.
                */}
                <div className="relative aspect-16/10 w-full md:hidden">
                  <motion.img
                    initial={false}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Desktop cursor preview */}
        {hoveredProject && (
          <ProjectCard project={hoveredProject} x={smoothX} y={smoothY} />
        )}
      </div>
    </div>
  )
}

const ProjectCard = ({
  project,
  x,
  y,
}: {
  project: Project
  x: ReturnType<typeof useSpring>
  y: ReturnType<typeof useSpring>
}) => {
  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none absolute top-0 left-0 z-50 hidden md:block"
    >
      <div className="project-cursor-card bg-background w-[380px] -translate-x-1/2 -translate-y-1/2 border">
        <img
          src={project.image}
          className="aspect-16/10 w-full object-cover"
          alt={project.title}
        />

        <div className="p-4 py-2">
          <p className="text-lg font-medium">{project.title}</p>

          <p className="text-secondary mb-4 text-sm">{project.description}</p>

          <p className="text-primary flex items-center gap-2 text-sm">
            Open project
            <ArrowRight strokeWidth={1} size={18} />
          </p>
        </div>
      </div>
    </motion.div>
  )
}
