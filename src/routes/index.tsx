import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/container'
import { BorderContainer } from '../components/border-container'
import { Hero } from '../sections/hero'
import { Skills } from '../sections/skills'
import { Focus } from '../sections/focus'
import { Worked } from '../sections/worked'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <BorderContainer>
        <Container>
          <Hero />
        </Container>

        <Container>
          <Focus />
        </Container>

        <div className="bg-border h-px w-full" />

        <Container>
          <Skills />
        </Container>

        <Container>
          <Worked />
        </Container>
      </BorderContainer>
    </div>
  )
}
