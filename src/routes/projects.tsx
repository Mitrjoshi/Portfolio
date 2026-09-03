import { createFileRoute } from '@tanstack/react-router'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { Projects } from '../sections/projects'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <BorderContainer>
        <Container className="p-10">
          <Projects />
        </Container>
      </BorderContainer>
    </div>
  )
}
