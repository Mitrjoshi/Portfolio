import { useEffect, useState } from 'react'
import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { SectionAttribute } from '../components/section-attribute'
import { Separator } from '../components/separator'
import { WORK_FLOW } from '../routes/work/-constants/work-flow'
import { WorkFlowTerminal } from '../routes/work/-components/work-flow-terminal'
import { WorkFlowPill } from '../routes/work/-components/work-flow-pill'
import { WorkFlowProgressBlock } from '../routes/work/-components/work-flow-progress-block'
import { WorkFlowSideMenuItem } from '../routes/work/-components/work-flow-sidemenu-item'

const STATUS_DOT_CLASS: Record<string, string> = {
  Live: 'bg-green-700',
  'In development': 'bg-yellow-800',
  Archived: 'bg-black/30',
}

export const WorkFlow = () => {
  const [activeProject, setActiveProject] = useState<string>(WORK_FLOW[0].id)
  const [activeStep, setActiveStep] = useState(0)
  const [projectsOpened, setProjectsOpened] = useState<string[]>([
    activeProject,
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // reset the build-progress animation whenever the project changes, so a
  // freshly opened project doesn't inherit a mid-cycle step from the last one
  useEffect(() => {
    setActiveStep(0)
  }, [activeProject])

  const activeIndex = WORK_FLOW.findIndex((flow) => flow.id === activeProject)
  const active_work_flow = WORK_FLOW[activeIndex]

  const goToPrevious = () => {
    const nextIndex = (activeIndex - 1 + WORK_FLOW.length) % WORK_FLOW.length
    setActiveProject(WORK_FLOW[nextIndex].id)
  }

  const goToNext = () => {
    const nextIndex = (activeIndex + 1) % WORK_FLOW.length
    setActiveProject(WORK_FLOW[nextIndex].id)
  }

  return (
    <div className="relative space-y-10 p-5 pt-20! md:p-10">
      <SectionAttribute text="Engineering" />

      <div className="space-y-6">
        <RevealText
          lines={[
            <p className="text-3xl font-medium lg:max-w-[40ch] lg:text-5xl">
              Built, shipped, and{' '}
              <span className="text-secondary">running</span>.
            </p>,
          ]}
        />

        <InView>
          <p className="slide-up-fade-in text-secondary text-lg lg:max-w-[40%]">
            Not concept projects. Real applications engineered from interface to
            API, database, deployment, and production.
          </p>
        </InView>
      </div>

      <InView className="flex-1 border">
        {/* HEADER */}
        <div className="bg-primary flex flex-col justify-between gap-2 p-2 lg:flex-row lg:items-center lg:gap-4">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex items-center gap-1">
              <div className="aspect-square h-2 bg-black" />
              <div className="aspect-square h-2 bg-black/50" />
              <div className="aspect-square h-2 bg-black/50" />
            </div>

            <p className="text-xs font-medium text-black/50 uppercase">
              portfolio / work / ai-journey
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`aspect-square h-2 rounded-full ${
                STATUS_DOT_CLASS[active_work_flow?.status ?? ''] ??
                'bg-black/50'
              }`}
            />
            <p className="text-xs font-medium text-black/50 uppercase">
              {active_work_flow?.status ?? 'Ready'}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr]">
          {/* SIDE MENU */}
          <div className="flex h-full w-full flex-1 flex-col justify-between divide-y border-r">
            <div className="divide-y">
              <div className="p-2 lg:p-4">
                <p className="text-secondary text-xs tracking-wider uppercase">
                  Projects
                </p>
              </div>
              <div className="flex w-fit flex-row divide-x border-r border-b-0 lg:w-full lg:flex-col lg:divide-x-0 lg:divide-y lg:border-r-0 lg:border-b">
                {WORK_FLOW.map((work_flow, index) => {
                  return (
                    <WorkFlowSideMenuItem
                      key={index}
                      active={activeProject === work_flow.id}
                      onClick={() => {
                        setProjectsOpened((prev) => [
                          ...new Set([...prev, work_flow.id]),
                        ])
                        setActiveProject(work_flow.id)
                      }}
                      title={work_flow.name}
                      description={`${work_flow.category} · ${work_flow.year}`}
                    />
                  )
                })}
              </div>
            </div>

            {/* SIDE MENU FOOTER */}
            <div className="relative hidden flex-col items-start justify-between gap-4 p-4 lg:flex">
              <p className="text-secondary text-xs tracking-wider uppercase">
                {projectsOpened.length} / {WORK_FLOW.length} opened
              </p>

              <div className="bg-secondary/50 h-0.5 w-[85%] overflow-hidden rounded-full">
                <div
                  style={{
                    width: `${(projectsOpened.length / WORK_FLOW.length) * 100}%`,
                  }}
                  className="bg-secondary h-full rounded-full transition-[width] duration-200"
                />
              </div>
            </div>
          </div>

          {/* MAIN */}
          <div className="dotted-background bg-background! w-full flex-1 overflow-hidden">
            <div className="flex w-full items-center justify-between p-5">
              <p className="text-secondary text-xs font-medium uppercase">
                {active_work_flow?.name}
              </p>
              <p className="text-secondary text-xs font-medium uppercase">
                {active_work_flow?.category} · {active_work_flow?.year}
              </p>
            </div>

            <div className="space-y-5 p-5 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-secondary text-xs font-medium uppercase">
                    Purpose
                  </p>

                  <p className="font-light md:text-lg">
                    {active_work_flow?.headline}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-secondary text-xs font-medium uppercase">
                    Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {active_work_flow?.stack.map((stack, index) => {
                      return <WorkFlowPill highlight text={stack} key={index} />
                    })}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4">
                {active_work_flow?.flow.map((flow, index) => (
                  <WorkFlowProgressBlock
                    key={`${active_work_flow.id}-${index}`}
                    ongoing={activeStep === index}
                    index={index + 1}
                    text={flow.title}
                    description={flow.description}
                  />
                ))}
              </div>

              <Separator />

              <div className="grid grid-cols-2 lg:grid-cols-4">
                {active_work_flow?.metrics.map((metric, index) => (
                  <div key={index}>
                    <p className="text-2xl font-medium">{metric.value}</p>
                    <p className="text-secondary text-xs">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 p-5">
              {active_work_flow?.tags.map((tag, index) => (
                <WorkFlowPill text={tag} key={index} highlight />
              ))}
            </div>

            {/* TERMINAL */}
            {active_work_flow && (
              <WorkFlowTerminal
                key={active_work_flow.id}
                workFlow={active_work_flow}
                onPrevious={goToPrevious}
                onNext={goToNext}
              />
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-primary/10 flex flex-col items-center gap-4 border-t p-4 md:flex-row md:justify-between">
          <p className="text-secondary text-xs tracking-wider">
            {active_work_flow?.footer}
          </p>
        </div>
      </InView>
    </div>
  )
}
