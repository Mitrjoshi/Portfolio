import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const images = [
  '/projects/screenshots/pathlens.png',
  '/projects/screenshots/vertex.png',
  '/projects/screenshots/basecamp.png',
  '/projects/screenshots/fevikwik.png',
  '/projects/screenshots/indra.png',
  '/projects/screenshots/kelloggs.png',
  '/projects/screenshots/maaza.png',
  '/projects/screenshots/sprite.png',
  '/projects/screenshots/milka-pokora.png',
  '/projects/screenshots/fevikwik.png',
  '/projects/screenshots/indra.png',
  '/projects/screenshots/kelloggs.png',
  '/projects/screenshots/maaza.png',
  '/projects/screenshots/sprite.png',
  '/projects/screenshots/milka-pokora.png',
]

export const HomeScreenShots = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  })

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [5, 1, 1])

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-17.25 h-[calc(100dvh-69px)] w-full overflow-hidden md:top-20.25 md:h-[calc(100dvh-81px)]">
        <motion.div
          style={{ scale, transformOrigin: 'center center' }}
          className="grid h-full grid-cols-3 grid-rows-5 gap-1 md:grid-cols-5 md:grid-rows-3"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="h-full w-full overflow-hidden bg-linear-to-b from-gray-200 to-gray-100 p-4"
            >
              <img
                src={img}
                className="h-full w-full object-contain object-center"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
