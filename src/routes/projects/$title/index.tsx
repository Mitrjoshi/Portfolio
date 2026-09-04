import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../../../components/container'
import { ProjectHero } from '../../../sections/project/project-hero'

export const Route = createFileRoute('/projects/$title/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container className="">
      <ProjectHero />
    </Container>
  )
}
