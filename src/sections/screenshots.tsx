import { useState, useEffect } from 'react'
import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { SectionAttribute } from '../components/section-attribute'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '../components/button'

const images = [
  {
    cat: 'apps',
    items: [
      {
        image: '/projects/screenshots/pathlens.png',
        title: 'Pathlens',
      },
      {
        image: '/projects/screenshots/indra.png',
        title: 'De-beers Indra Online',
      },
      {
        image: '/projects/screenshots/vertex.png',
        title: 'Ogilvy AI Studio',
      },
      {
        image: '/projects/screenshots/basecamp.png',
        title: 'Ogilvy Basecamp',
      },
    ],
  },
  {
    cat: 'campaigns',
    items: [
      {
        image: '/projects/screenshots/fevikwik.png',
        title: 'AI Pack - Fevikwik',
      },
      {
        image: '/projects/screenshots/milka-pokora.png',
        title: 'Milka Pokora',
      },
      {
        image: '/projects/screenshots/kelloggs.png',
        title: 'Kelloggs Chocos',
      },
      {
        image: '/projects/screenshots/sprite.png',
        title: 'Sprite Joke in a Bottle',
      },
      {
        image: '/projects/screenshots/maaza.png',
        title: 'Maaza Ho Jaye',
      },
    ],
  },
]

const ITEMS_PER_PAGE = 12

export const Screenshots = () => {
  const [currentTab, setCurrentTab] = useState<'apps' | 'campaigns'>(
    'campaigns'
  )
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedImage, setSelectedImage] = useState<{
    image: string
    title: string
  } | null>(null)

  const allTabItems = images
    .filter((item) => item.cat === currentTab)
    .flatMap((item) => item.items)

  const totalPages = Math.max(1, Math.ceil(allTabItems.length / ITEMS_PER_PAGE))

  const currentItems = allTabItems.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  )

  const hasPrevPage = currentPage > 0
  const hasNextPage = currentPage < totalPages - 1

  const goToPrevPage = () => {
    if (hasPrevPage) setCurrentPage((page) => page - 1)
  }

  const goToNextPage = () => {
    if (hasNextPage) setCurrentPage((page) => page + 1)
  }

  // Reset to page 0 whenever the tab changes
  useEffect(() => {
    setCurrentPage(0)
  }, [currentTab])

  const selectedIndex = selectedImage
    ? currentItems.findIndex((item) => item.image === selectedImage.image)
    : -1

  const hasPrevImage = selectedIndex > 0
  const hasNextImage =
    selectedIndex !== -1 && selectedIndex < currentItems.length - 1

  const goToPrevImage = () => {
    if (hasPrevImage) setSelectedImage(currentItems[selectedIndex - 1])
  }

  const goToNextImage = () => {
    if (hasNextImage) setSelectedImage(currentItems[selectedIndex + 1])
  }

  return (
    <div className="relative space-y-10 border-t p-5 pt-20! md:p-10">
      <SectionAttribute text="Screenshots" />

      <div className="space-y-6">
        <InView>
          <RevealText
            lines={[
              <p className="text-3xl font-medium md:text-5xl">Everything,</p>,
              <p className="text-secondary text-3xl font-medium md:text-5xl">
                Up close.
              </p>,
            ]}
          />
        </InView>

        <InView>
          <p className="text-secondary slide-up-fade-in text-lg">
            Screens from shipped work — marketing sites on one tab, product and
            app interfaces on the other. Click any of them to open it full size.
          </p>
        </InView>
      </div>

      <div className="space-y-6">
        <div className="border-b">
          <button
            data-tab-active={currentTab === 'campaigns'}
            onClick={() => setCurrentTab('campaigns')}
            className="data-[tab-active=true]:border-primary cursor-pointer border-b-2 border-transparent px-4 py-2 duration-200"
          >
            Campaigns{' '}
            <span className="text-secondary ml-2">
              {
                images
                  .filter((item) => item.cat === 'campaigns')
                  .flatMap((item) => item.items).length
              }
            </span>
          </button>
          <button
            data-tab-active={currentTab === 'apps'}
            onClick={() => setCurrentTab('apps')}
            className="data-[tab-active=true]:border-primary cursor-pointer border-b-2 border-transparent px-4 py-2 duration-200"
          >
            Apps{' '}
            <span className="text-secondary ml-2">
              {
                images
                  .filter((item) => item.cat === 'apps')
                  .flatMap((item) => item.items).length
              }
            </span>
          </button>
        </div>

        <InView
          className="grid gap-4 md:grid-cols-4"
          key={`${currentTab}-${currentPage}`}
        >
          {currentItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              style={{ animationDelay: `${index * 60}ms` }}
              className="slide-up-fade-in group hover:border-primary/75 flex aspect-4/3 cursor-pointer items-center justify-center overflow-hidden border border-transparent bg-linear-to-b from-gray-200 to-gray-100 duration-400"
            >
              <img
                src={item.image}
                className="max-h-[85%] max-w-[85%] object-contain duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </InView>

        {totalPages > 1 && (
          <div className="flex w-full items-center justify-between gap-4">
            <Button
              size="sm"
              text="Previous"
              onClick={goToPrevPage}
              disabled={!hasPrevPage}
              className="disabled:cursor-not-allowed disabled:opacity-50"
            />
            <div>
              <p className="text-secondary">
                {currentPage + 1} of {totalPages}
              </p>
            </div>
            <div>
              <Button
                size="sm"
                text="Next"
                onClick={goToNextPage}
                disabled={!hasNextPage}
                className="disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-full w-full max-w-4xl items-center justify-center"
          >
            <div className="group hover:border-primary/75 flex aspect-4/3 cursor-pointer items-center justify-center overflow-hidden border border-transparent bg-linear-to-b from-gray-200 to-gray-100 duration-400">
              <img
                src={selectedImage.image}
                className="max-h-[85%] max-w-[85%] object-contain"
              />
            </div>

            {/* Prev button */}
            <button
              onClick={goToPrevImage}
              disabled={!hasPrevImage}
              className="bg-background/50 hover:bg-primary text-foreground absolute top-1/2 left-1 flex aspect-square h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center border duration-200 hover:text-black disabled:cursor-not-allowed disabled:opacity-50 sm:left-2 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Next button */}
            <button
              onClick={goToNextImage}
              disabled={!hasNextImage}
              className="bg-background/50 hover:bg-primary text-foreground absolute top-1/2 right-1 flex aspect-square h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center border duration-200 hover:text-black disabled:cursor-not-allowed disabled:opacity-50 sm:right-2 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="absolute top-0 right-0 flex w-full items-center justify-between">
              <p className="text-secondary font-medium">
                {selectedImage.title}
              </p>
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="dark:bg-background/50 bg-background hover:bg-primary text-foreground flex aspect-square h-9 w-9 cursor-pointer items-center justify-center border duration-200 hover:text-black sm:h-12 sm:w-12"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
