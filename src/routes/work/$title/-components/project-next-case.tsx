import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '../../../../constants/projects'
import { Button } from '../../../../components/button'
import { useTransitionNavigate } from '../../../../providers/transition-navigation'

export const ProjectNextCase = ({ next_case }: { next_case: string }) => {
  const project_details = PROJECTS.filter((item) => item.id === next_case)[0]

  const { transitionTo } = useTransitionNavigate()

  return (
    <div className="p-5 md:p-10">
      <div
        onClick={() => {
          transitionTo(`/work/$title`, project_details.title, {
            title: project_details.id.toLowerCase(),
          })
        }}
        className="group bg-border/15 flex cursor-pointer items-center justify-between border p-5 md:p-10"
      >
        <div className="space-y-6">
          <p className="text-secondary tracking-wider">Next Case Study</p>
          <div className="flex items-center gap-1">
            <p className="text-foreground text-2xl font-medium md:text-4xl">
              {project_details.title}
            </p>
            <ArrowRight className="text-green-accent" />
          </div>
          <p className="text-secondary">{project_details.description}</p>

          <Button text="Explore project" />
        </div>

        <div className="flex w-full justify-end">
          <div className="aspect-16/10 max-w-[75%] overflow-hidden">
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
