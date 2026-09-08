import { ArrowRight } from 'lucide-react'
import { PROJECT_COLORS, PROJECTS } from '../../../../constants/projects'
import { Button } from '../../../../components/button'
import { useTransitionNavigate } from '../../../../providers/transition-navigation'

export const ProjectNextCase = ({ next_case }: { next_case: string }) => {
  const project_details = PROJECTS.filter((item) => item.id === next_case)[0]
  const project_color =
    PROJECT_COLORS[project_details.id as keyof typeof PROJECT_COLORS]

  const { transitionTo } = useTransitionNavigate()

  return (
    <div className="p-5 md:p-10">
      <div
        onClick={() => {
          transitionTo(`/work/$title`, project_details.title, {
            title: project_details.id.toLowerCase(),
          })
        }}
        className="group bg-border/15 flex cursor-pointer flex-col items-center gap-4 border p-5 md:flex-row md:justify-between md:p-10"
      >
        <div className="flex w-full justify-end md:hidden">
          <div className="aspect-16/10 overflow-hidden md:max-w-[75%]">
            <img
              src={project_details.image}
              className="h-full w-full object-cover duration-200 group-hover:scale-105"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-secondary tracking-wider">Next Case Study</p>
          <div className="flex items-center gap-1">
            <p
              style={{ color: project_color }}
              className="text-2xl font-medium md:text-4xl"
            >
              {project_details.title}
            </p>
            <ArrowRight color={project_color} />
          </div>
          <p className="text-secondary">{project_details.description}</p>

          <Button text="Explore project" />
        </div>

        <div className="hidden w-full justify-end md:flex">
          <div className="aspect-16/10 overflow-hidden md:max-w-[75%]">
            <img
              src={project_details.image}
              className="h-full w-full object-cover duration-200 group-hover:scale-105"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
