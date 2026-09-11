import { createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react'
import { BorderContainer } from '../../components/border-container'
import { Container } from '../../components/container'
import { Projects } from '../../sections/projects'
import { CompaniesWorkedWith } from '../../sections/companies-worked-with'
import { Screenshots } from '../../sections/screenshots'
import { Worked } from '../../sections/worked'
import { Skills } from '../../sections/skills'

export const Route = createFileRoute('/work/')({
  component: RouteComponent,
})

function RouteComponent() {
  const screenshotsRef = useRef<HTMLDivElement>(null)
  const allWorkRef = useRef<HTMLDivElement>(null)

  const handleScrollToSection = (section: 'screenshots' | 'all-work') => {
    const target =
      section === 'screenshots' ? screenshotsRef.current : allWorkRef.current

    if (!target) return

    const top = target.getBoundingClientRect().top + window.scrollY

    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <BorderContainer>
        <Container>
          <Projects handleScrollToSection={handleScrollToSection} />
        </Container>
      </BorderContainer>

      <BorderContainer>
        <Container className="line-background-inner-highlight corner-border-top-right border-t">
          <CompaniesWorkedWith />
        </Container>
      </BorderContainer>

      <BorderContainer ref={screenshotsRef}>
        <Container>
          <Screenshots />
        </Container>
      </BorderContainer>

      <BorderContainer>
        <Container className="border-t">
          <Worked />
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
