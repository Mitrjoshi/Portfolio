import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../../../components/container'
import { ProjectHero } from '../../../sections/project/project-hero'
import { PROJECTS, type Project } from '../../../constants/projects'

export const Route = createFileRoute('/projects/$title/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { title } = Route.useParams()

  const project_details = PROJECTS.filter((item) => item.id === title)[0]

  return (
    <Container className="">
      <ProjectHero project_details={project_details as Project} />
    </Container>
  )
}
