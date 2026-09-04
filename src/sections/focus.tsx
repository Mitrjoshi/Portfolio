import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { useState } from 'react'
import { RevealText } from '../components/reveal-text'
import { InView } from '../components/in-view'
import { AnimatePresence, motion } from 'motion/react'
import { SectionAttribute } from '../components/section-attribute'

export const Focus = () => {
  return (
    <BorderContainer>
      <Container className="corner-border-top-right relative border-x-0 border-t">
        <div className="p-5 py-20! md:p-10">
          <SectionAttribute text="Tracks" />

          <div>
            <RevealText
              lines={[
                <p className="text-center text-3xl font-medium md:text-6xl">
                  Primarily <span className="text-secondary">focused on</span>
                </p>,
              ]}
            />
            <InView>
              <p className="text-secondary slide-up-fade-in mx-auto mt-4 text-center text-lg lg:max-w-[40%]">
                Ten years of shipping, settled into three tracks that sharpen
                each other every day.
              </p>
            </InView>
          </div>

          <div className="mt-10 md:mt-20">
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
      'Building scalable, responsive, and high-performance web applications with React and TypeScript.',
    duration: '3+ YEARS',
  },
  {
    title: 'Frontend Engineering',
    description:
      'Creating maintainable frontend architectures, reusable components, and seamless API integrations.',
    duration: '4+ YEARS',
  },
  {
    title: 'Creative Development',
    description:
      'Crafting interactive interfaces with smooth animations, modern UI patterns, and engaging digital experiences.',
    duration: '4+ YEARS',
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
    <div className="mx-auto grid items-center gap-10 md:grid-cols-2 lg:max-w-[75%]">
      <div className="relative aspect-square w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={`/focus/focus_${activeIndex + 1}.svg`}
            alt={activeItem.title}
            className="absolute inset-0 h-full w-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: 'easeInOut',
            }}
          />
        </AnimatePresence>
      </div>

      <div className="space-y-6 text-center md:text-left">
        <div key={activeIndex} className="space-y-6">
          <div className="space-y-2">
            <p className="carousel-reveal text-3xl font-medium text-nowrap">
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
