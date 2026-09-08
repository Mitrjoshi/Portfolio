import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTransitionNavigate } from '../../../../providers/transition-navigation'
import { RevealText } from '../../../../components/reveal-text'
import { InView } from '../../../../components/in-view'
import type { Project } from '../../../../constants/projects'

export const ProjectHero = ({
  project_details,
}: {
  project_details: Project
}) => {
  const { transitionTo } = useTransitionNavigate()

  return (
    <div className="space-y-10 p-5 pt-20! md:p-10">
      <button
        onClick={() => {
          transitionTo('/work', 'Selected Projects')
        }}
        className="hover:text-green-accent flex cursor-pointer items-center gap-2 text-sm duration-200"
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
        <DetailsBox label={'live'} value={project_details.details.live} />
      </div>
    </div>
  )
}

const DetailsBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="bg-primary/10 space-y-2 p-4 dark:bg-transparent">
      <p className="text-secondary text-sm uppercase">{label}</p>
      {label === 'live' ? (
        <a href={value} target="_blank" rel="noopener noreferrer">
          <p className="group text-green-accent flex cursor-pointer items-center font-medium underline underline-offset-4">
            {value}

            <ArrowRight
              strokeWidth={1.5}
              className="-rotate-45 duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </p>
        </a>
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  )
}
