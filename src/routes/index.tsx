import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/container'
import { BorderContainer } from '../components/border-container'
import { Hero } from '../sections/hero'
import { Skills } from '../sections/skills'
import { Focus } from '../sections/focus'
import { Worked } from '../sections/worked'
import { ByTheNumbers } from '../sections/by-the-numbers'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BorderContainer>
        <Container>
          <Hero />
        </Container>

        {/* <Container className="border-t p-5">
          <Expertise />
        </Container> */}

        <Container>
          <Focus />
        </Container>

        <div className="bg-background border-y">
          <ByTheNumbers />
        </div>

        <Container>
          <Skills />
        </Container>

        <Container className="corner-border-top-right relative border-t">
          <Worked />
        </Container>
      </BorderContainer>
    </>
  )
}
