import { useState } from 'react'
import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { SectionAttribute } from '../components/section-attribute'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const images = [
  {
    cat: 'apps',
    items: [
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
      {
        image: '/projects/pathlens.png',
      },
    ],
  },
]

export const Screenshots = () => {
  const [currentTab, setCurrentTab] = useState<
    'apps' | 'websites' | 'campaigns'
  >('apps')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
            data-tab-active={currentTab === 'apps'}
            onClick={() => setCurrentTab('apps')}
            className="data-[tab-active=true]:border-primary border-b-2 border-transparent px-4 py-2 duration-200"
          >
            Apps <span className="text-secondary ml-2">33</span>
          </button>
          <button
            data-tab-active={currentTab === 'websites'}
            onClick={() => setCurrentTab('websites')}
            className="data-[tab-active=true]:border-primary border-b-2 border-transparent px-4 py-2 duration-200"
          >
            Websites <span className="text-secondary ml-2">24</span>
          </button>
          <button
            data-tab-active={currentTab === 'campaigns'}
            onClick={() => setCurrentTab('campaigns')}
            className="data-[tab-active=true]:border-primary border-b-2 border-transparent px-4 py-2 duration-200"
          >
            Campaigns <span className="text-secondary ml-2">7</span>
          </button>
        </div>

        <InView className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images
            .filter((item) => item.cat === currentTab)
            .flatMap((item) => item.items)
            .slice(0, 12)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item.image)}
                className="slide-up-fade-in group hover:border-primary/75 aspect-4/3 cursor-pointer overflow-hidden border border-transparent duration-400"
              >
                <img
                  src={item.image}
                  className="h-full w-full object-cover duration-500 group-hover:scale-105"
                />
              </div>
            ))}
        </InView>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10"
        >
          <div className="relative mx-auto flex h-full w-full items-center justify-center">
            <div className="mx-auto flex max-w-[70vw] items-center justify-center gap-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-background/50 hover:bg-primary text-foreground flex aspect-square h-12 cursor-pointer items-center justify-center border duration-200 hover:text-black"
              >
                <ChevronLeft />
              </button>

              <img
                src={selectedImage}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full object-contain"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="bg-background/50 hover:bg-primary text-foreground flex aspect-square h-12 cursor-pointer items-center justify-center border duration-200 hover:text-black"
              >
                <ChevronRight />
              </button>

              <button
                onClick={() => setSelectedImage(null)}
                className="bg-background/50 hover:bg-primary text-foreground absolute top-0 right-0 flex aspect-square h-12 cursor-pointer items-center justify-center border duration-200 hover:text-black"
              >
                <X />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
