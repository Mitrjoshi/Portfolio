import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { useState } from 'react'
import { RevealText } from '../components/reveal-text'
import { InView } from '../components/in-view'
import { AnimatePresence, motion } from 'motion/react'
import { SectionAttribute } from '../components/section-attribute'
import { ReactDevelopmentScene } from '../components/svg/react-development-scene'
import { FrontendEngineeringScene } from '../components/svg/frontend-engineer-scene'
import { CreativeDevelopmentScene } from '../components/svg/creative-development-scene'

export const Focus = () => {
  return (
    <BorderContainer>
      <Container className="corner-border-top-right relative border-x-0 border-t">
        <div className="p-5 py-20! md:p-10">
          <SectionAttribute text="Tracks" />
          <div className="flex w-full flex-col items-center">
            <RevealText
              lines={[
                <p className="mx-auto w-fit text-center text-3xl font-medium md:text-5xl">
                  Primarily <span className="text-secondary">focused on</span>
                </p>,
              ]}
            />

            <InView>
              <p className="text-secondary slide-up-fade-in mx-auto mt-2 text-center text-lg lg:max-w-[40ch]">
                {new Date().getFullYear() - 2022}+ years of building and
                shipping, focused across three disciplines that strengthen each
                other.
              </p>
            </InView>
          </div>
          <div className="mt-10">
            <Carousel />
          </div>
        </div>
      </Container>
    </BorderContainer>
  )
}

const carouselItems = [
  {
    title: 'React Development',
    description:
      'Building fast, scalable web applications with React, TypeScript, and modern frontend tooling.',
    duration: `${new Date().getFullYear() - 2022}+ Years`,
  },
  {
    title: 'Frontend Engineering',
    description:
      'Designing maintainable architectures, reusable component systems, and reliable API integrations.',
    duration: `${new Date().getFullYear() - 2022}+ Years`,
  },
  {
    title: 'Creative Development',
    description:
      'Creating interactive digital experiences through motion, micro-interactions, and thoughtful UI implementation.',
    duration: `${new Date().getFullYear() - 2022}+ Years`,
  },
]

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeItem = carouselItems[activeIndex]

  const handlePrevious = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, carouselItems.length - 1))
  }

  return (
    <div className="mx-auto grid items-center gap-10 overflow-hidden md:grid-cols-2 lg:max-w-[75%]">
      <div className="relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
            }}
          >
            {activeIndex === 0 ? (
              <ReactDevelopmentScene />
            ) : activeIndex === 1 ? (
              <FrontendEngineeringScene />
            ) : (
              <CreativeDevelopmentScene />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="space-y-6 text-center md:text-left">
        <div key={activeIndex} className="space-y-6">
          <div className="space-y-2">
            <p className="carousel-reveal text-3xl font-medium">
              {activeItem.title}
            </p>

            <p className="text-secondary carousel-reveal carousel-reveal-delay-1 text-xs">
              {activeItem.duration}
            </p>
          </div>

          <p className="text-secondary carousel-reveal carousel-reveal-delay-2">
            {activeItem.description}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 md:justify-start">
          <button
            onClick={handlePrevious}
            disabled={activeIndex === 0}
            className="hover:bg-primary disabled:hover:text-foreground bg-secondary/10 hover:text-background flex aspect-square h-12 cursor-pointer items-center justify-center border duration-200 disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === carouselItems.length - 1}
            className="hover:bg-primary disabled:hover:text-foreground bg-secondary/10 hover:text-background flex aspect-square h-12 cursor-pointer items-center justify-center border duration-200 disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
