import { ArrowLeft, ArrowRight, LockIcon } from 'lucide-react'
import { useTransitionNavigate } from '../../../../providers/transition-navigation'
import { RevealText } from '../../../../components/reveal-text'
import { InView } from '../../../../components/in-view'
import type { Project } from '../../../../constants/projects'

export const ProjectHero = ({
  project_details,
  color,
}: {
  project_details: Project
  color: string
}) => {
  const { transitionTo } = useTransitionNavigate()

  return (
    <div className="space-y-10 p-5 pt-20! md:p-10">
      <button
        onClick={() => {
          transitionTo('/work', 'Selected Projects')
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = '')}
        className="flex cursor-pointer items-center gap-2 text-sm duration-200"
      >
        <ArrowLeft size={20} strokeWidth={1.5} />
        <p>All Work</p>
      </button>

      <InView className="space-y-4 md:space-y-8">
        <RevealText
          lines={[
            <p className="text-3xl font-medium md:text-5xl">
              {project_details.title}
            </p>,
          ]}
        />
        <p className="slide-up-fade-in text-secondary text-lg md:max-w-[70ch] md:text-xl">
          {project_details.description}
        </p>
      </InView>

      <div className="grid divide-x divide-y border md:grid-cols-4 md:divide-y-0">
        <DetailsBox label={'role'} value={project_details.details.role} />
        <DetailsBox
          label={'tools'}
          value={project_details.details.technologies.join(', ')}
        />
        <DetailsBox label={'year'} value={project_details.details.year} />
        <DetailsBox
          label={'live'}
          value={project_details.details.live}
          confidential={project_details.confidential}
          color={color}
        />
      </div>
    </div>
  )
}

const DetailsBox = ({
  label,
  value,
  confidential,
  color,
}: {
  label: string
  value: string
  confidential?: boolean
  color?: string
}) => {
  return (
    <div className="bg-primary-foreground space-y-2 p-4 dark:bg-transparent">
      <p className="text-secondary text-sm uppercase">{label}</p>
      {label === 'live' ? (
        <>
          {confidential ? (
            <p
              className="group flex items-center gap-2 text-sm font-medium"
              style={{ color }}
            >
              <LockIcon size={16} className="" />
              Confidential
            </p>
          ) : (
            <a href={value} target="_blank" rel="noopener noreferrer">
              <p
                className="group inline cursor-pointer text-sm font-medium underline underline-offset-4"
                style={{ color }}
              >
                {value}{' '}
                <ArrowRight
                  strokeWidth={1.5}
                  className="ml-2 inline-block -rotate-45 duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </p>
            </a>
          )}
        </>
      ) : (
        <p className="text-sm font-medium">{value}</p>
      )}
    </div>
  )
}
