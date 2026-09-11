import { createFileRoute } from '@tanstack/react-router'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { DevelopmentHero } from '../sections/development-hero'
import { useRef } from 'react'
import { HowIBuild } from '../sections/how-i-build'
import { WorkFlow } from '../sections/work-flow'
import { Skills } from '../sections/skills'

export const Route = createFileRoute('/development')({
  component: RouteComponent,
})

function RouteComponent() {
  const flowRef = useRef<HTMLDivElement>(null)
  const builtRef = useRef<HTMLDivElement>(null)

  const handleScrollToSection = (section: 'flow' | 'built') => {
    const target = section === 'flow' ? flowRef.current : builtRef.current
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <BorderContainer>
        <Container>
          <DevelopmentHero handleScrollToSection={handleScrollToSection} />
        </Container>
      </BorderContainer>

      <BorderContainer ref={flowRef}>
        <Container className="border-t">
          <HowIBuild />
        </Container>
      </BorderContainer>

      <BorderContainer ref={builtRef}>
        <Container className="border-t">
          <WorkFlow />
        </Container>
      </BorderContainer>

      <BorderContainer>
        <Container className="border-t">
          <Skills />
        </Container>
      </BorderContainer>
    </>
  )
}
