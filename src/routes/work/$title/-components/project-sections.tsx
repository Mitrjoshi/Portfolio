import { ArrowUpRightIcon } from 'lucide-react'
import { InView } from '../../../../components/in-view'
import { RevealText } from '../../../../components/reveal-text'
import { Separator } from '../../../../components/separator'
import type { ProjectSectionItem } from '../../../../constants/projects'

export const ProjectSection = ({
  project_section,
  index,
  label,
  color,
}: {
  project_section: ProjectSectionItem
  index: number
  label: string
  color: string
}) => {
  return (
    <div className="space-y-10 p-5 pt-10! pb-20! md:space-y-20 md:p-10 md:pt-20! md:pb-40!">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-secondary text-sm">
            <span style={{ color }}>0{index}</span> · {label}
          </p>
          <InView className="space-y-4 md:space-y-8">
            <RevealText
              lines={[
                <p className="text-2xl font-medium md:text-4xl">
                  {project_section.title}
                </p>,
              ]}
            />
          </InView>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            {project_section.details.map((item, index) => (
              <InView key={index} className="space-y-4 md:space-y-8">
                <p className="slide-up-fade-in text-secondary">{item}</p>
              </InView>
            ))}
          </div>

          {project_section?.tags && project_section?.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project_section.tags.map((item, index) => (
                <div
                  className="hover:border-green border px-2 py-1 duration-200"
                  key={index}
                >
                  <p className="text-secondary text-sm">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {project_section.numbers && project_section.numbers.length > 0 && (
        <div className="space-y-5">
          <Separator />

          <div className="flex flex-wrap gap-10">
            {project_section.numbers.map((item, index) => (
              <div className="flex-1" key={index}>
                <p
                  style={{
                    color,
                  }}
                  className="text-2xl font-medium text-nowrap md:text-5xl"
                >
                  {item.value}
                </p>
                <p className="text-secondary mt-2 text-xs md:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <Separator />
        </div>
      )}

      {project_section.review && (
        <div className="space-y-4">
          <p className="text-3xl font-medium md:text-5xl">{`“${project_section.review.message}”`}</p>
          <p className="text-secondary md:text-md text-xs tracking-wider uppercase">
            - {project_section.review.by}
          </p>
        </div>
      )}

      {project_section.shipped && (
        <div className="space-y-10">
          <Separator />
          <div className="space-y-4">
            <p className="text-secondary tracking-wider uppercase">
              What shipped
            </p>
            <div className="divide-y">
              {project_section.shipped.map((item, index) => (
                <div className="flex items-center gap-2 py-4">
                  <ArrowUpRightIcon color={color} size={18} />
                  <p className="text-sm" key={index}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {project_section?.images && project_section.images.length > 0 && (
        <div className="space-y-4">
          {groupImages(project_section.images).map((group) =>
            group.layout === 'vertical' ? (
              <div className="space-y-4" key={group.images.join('-')}>
                {group.images.map((src) => (
                  <ImageTile
                    key={src}
                    src={src}
                    aspect="aspect-16/8"
                    label={label}
                  />
                ))}
              </div>
            ) : (
              <div
                className="grid grid-cols-2 gap-4"
                key={group.images.join('-')}
              >
                {group.images.map((src) => (
                  <ImageTile
                    key={src}
                    src={src}
                    aspect="aspect-3/4"
                    label={label}
                  />
                ))}
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

type ImageGroup = { images: string[]; layout: 'vertical' | 'horizontal' }

function groupImages(images: string[]): ImageGroup[] {
  const groups: ImageGroup[] = []
  let i = 0
  let isVertical = true

  while (i < images.length) {
    const size = isVertical ? 3 : 2
    groups.push({
      images: images.slice(i, i + size),
      layout: isVertical ? 'vertical' : 'horizontal',
    })
    i += size
    isVertical = !isVertical
  }

  return groups
}

function ImageTile({
  src,
  aspect,
  label,
}: {
  src: string
  aspect: string
  label: string
}) {
  return (
    <InView
      className={`slide-up-fade-in bg-border/30 flex w-full flex-1 items-center justify-center border ${aspect}`}
    >
      <img
        src={src}
        className={`h-full w-full ${aspect === 'aspect-3/4' ? 'object-cover' : 'object-contain'}`}
        alt={label}
      />
    </InView>
  )
}
