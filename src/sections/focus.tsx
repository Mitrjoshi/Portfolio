import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { useState } from 'react'
import { RevealText } from '../components/reveal-text'

export const Focus = () => {
  return (
    <BorderContainer>
      <Container className="corner-border-top-right relative border-x-0 border-t">
        <div className="p-5 py-20! md:p-10">
          <div className="bg-primary text-background absolute top-0 left-0 w-fit px-3 py-1 text-xs font-medium tracking-widest">
            Tracks
          </div>

          <div>
            <RevealText
              lines={[
                <p className="text-center text-5xl font-medium">
                  Primarily <span className="text-secondary">focused on</span>
                </p>,
              ]}
            />
            <p className="text-secondary slide-up-fade-in mx-auto mt-4 text-center text-lg md:max-w-[40%]">
              Ten years of shipping, settled into three tracks that sharpen each
              other every day.
            </p>
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
    title: 'Product Design',
    description:
      'Most aspects of design and business, end-to-end, while shipping a product.',
    duration: '10+ YEARS',
  },
  {
    title: 'Frontend Development',
    description:
      'Building responsive, accessible, and high-performance interfaces for modern products.',
    duration: '8+ YEARS',
  },
  {
    title: 'Creative Development',
    description:
      'Blending interaction, motion, and technology to create polished digital experiences.',
    duration: '6+ YEARS',
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
    <div className="mx-auto grid max-w-[50%] md:grid-cols-2">
      <div />

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
