import { createFileRoute } from '@tanstack/react-router'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { Worked } from '../sections/worked'
import { ShortStory } from '../sections/short-story'
import { Separator } from '../components/separator'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <BorderContainer>
        <Container>
          <div className="py-20">
            <p className="mx-auto px-8 text-xl font-medium md:max-w-[60ch] md:px-10 md:text-center md:text-3xl">
              <span>
                Over the past {new Date().getFullYear() - 2022}+ years, I’ve
                grown from frontend development into building scalable
                applications, interactive product experiences, workflow systems,
                and AI-powered platforms. Along the way, I’ve worked across
                frontend architecture, APIs, cloud integrations, and
                production-ready features that turn complex ideas into{' '}
              </span>

              <span className="text-secondary">
                fast, reliable, and thoughtfully engineered digital products.
              </span>
            </p>
          </div>
        </Container>
      </BorderContainer>

      <BorderContainer>
        <Container>
          <Separator />
          <ShortStory />
        </Container>
      </BorderContainer>

      <BorderContainer>
        <Container className="corner-border-top-right relative border-t">
          <Worked />
        </Container>
      </BorderContainer>
    </div>
  )
}
