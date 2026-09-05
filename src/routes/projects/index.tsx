import { createFileRoute } from '@tanstack/react-router'
import { BorderContainer } from '../../components/border-container'
import { Container } from '../../components/container'
import { Projects } from '../../sections/projects'
import { CompaniesWorkedWith } from '../../sections/companies-worked-with'
import { Screenshots } from '../../sections/screenshots'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BorderContainer>
        <Container>
          <Projects />
        </Container>
      </BorderContainer>

      <BorderContainer>
        <Container className="line-background-inner-highlight corner-border-top-right border-t">
          <CompaniesWorkedWith />
        </Container>
      </BorderContainer>

      <BorderContainer>
        <Container>
          <Screenshots />
        </Container>
      </BorderContainer>
    </>
  )
}
