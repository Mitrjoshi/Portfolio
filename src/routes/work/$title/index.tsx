import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Container } from '../../../components/container'
import { ProjectHero } from './-components/project-hero'
import {
  PROJECTS,
  type Project,
  type ProjectSection as ProjectSectionType,
  type ProjectSectionItem,
} from '../../../constants/projects'
import { Separator } from '../../../components/separator'
import { ProjectNextCase } from './-components/project-next-case'
import { ProjectSection } from './-components/project-sections'

export const Route = createFileRoute('/work/$title/')({
  component: RouteComponent,
})

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function RouteComponent() {
  const { title } = Route.useParams()
  const project_details = PROJECTS.filter((item) => item.id === title)[0]

  const SECTIONS = useMemo(() => {
    if (!project_details) return []

    return (
      Object.entries(project_details.section) as [
        keyof ProjectSectionType,
        ProjectSectionItem,
      ][]
    )
      .filter(([, item]) => item?.title && item.details?.length)
      .map(([key, item]) => ({
        key,
        label: item.title || capitalize(key),
      }))
  }, [project_details])

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const ratiosRef = useRef<Map<number, number>>(new Map())
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const ratios = ratiosRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex(
            (el) => el === entry.target
          )
          if (index === -1) return

          if (entry.isIntersecting) {
            ratios.set(index, entry.intersectionRatio)
          } else {
            ratios.delete(index)
          }
        })

        if (ratios.size === 0) return

        let bestIndex = -1
        let bestRatio = -1
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestIndex = index
          }
        })

        if (bestIndex !== -1) setActiveIndex(bestIndex)
      },
      {
        // band now sits near the TOP of the viewport, matching block: 'start'
        // top 0-20% of viewport counts as the "active" zone
        rootMargin: '0px 0px -80% 0px',
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      }
    )

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      ratios.clear()
    }
  }, [])

  useEffect(() => {
    const firstSection = sectionRefs.current[0]
    if (!firstSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowNav(true)
          return
        }

        // not intersecting — figure out which direction we left in
        if (entry.boundingClientRect.top > 0) {
          // section is below the viewport top -> we scrolled back up above it
          setShowNav(false)
        }
        // else: section's top is above viewport (scrolled past it going down) -> stay visible
      },
      {
        threshold: 0,
      }
    )

    observer.observe(firstSection)

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <div
        className={`group fixed top-[50%] left-4 z-100 hidden translate-y-[-50%] duration-300 md:block ${
          showNav
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none -translate-x-4 opacity-0'
        }`}
      >
        {SECTIONS.map(({ key }, index) => {
          const isActive = activeIndex === index

          return (
            <div
              className="anchor text-secondary group/row hover:text-foreground flex cursor-pointer items-center gap-2 py-3 text-xs font-medium"
              key={key}
              onClick={() => scrollToSection(index)}
            >
              <div>
                <div
                  style={{
                    width: isActive ? 40 : 20,
                  }}
                  className={`group-hover/row:bg-foreground h-0.5 duration-200 ${
                    isActive
                      ? 'bg-green-accent group-hover/row:bg-green-accent'
                      : 'bg-secondary'
                  }`}
                />
                <p
                  className={`${isActive ? 'text-green-accent' : 'text-secondary hover:text-foreground'} duration-200`}
                >
                  0{index + 1}
                </p>
              </div>
              <p
                className={`uppercase duration-200 group-hover/row:opacity-100 ${
                  isActive ? 'text-green-accent opacity-0' : 'opacity-0'
                }`}
              >
                {key}
              </p>
            </div>
          )
        })}
      </div>

      <Container className="">
        <ProjectHero project_details={project_details as Project} />
      </Container>

      <Container>
        <img
          className="slide-up-fade-in w-full object-contain"
          src={project_details?.image}
          alt=""
        />
      </Container>

      <Container>
        {SECTIONS.map(({ key, label }, index) => (
          <div
            key={key}
            ref={(el) => {
              sectionRefs.current[index] = el
            }}
          >
            <ProjectSection
              index={index + 1}
              label={label}
              project_section={
                project_details.section[
                  key as keyof typeof project_details.section
                ] as ProjectSectionItem
              }
            />

            {index < SECTIONS.length - 1 && (
              <div className="px-6 md:px-12">
                <Separator />
              </div>
            )}
          </div>
        ))}
      </Container>

      {project_details?.next_case && (
        <Container className="border-t">
          <ProjectNextCase next_case={project_details.next_case} />
        </Container>
      )}
    </>
  )
}
