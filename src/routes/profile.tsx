import { createFileRoute } from '@tanstack/react-router'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BorderContainer>
      <Container>
        <div className="h-[calc(100vh-85px)] py-20">
          <p className="mx-auto px-8 text-center text-4xl font-medium md:max-w-[60%] md:px-0">
            <span>
              Over the last decade, I’ve worked across startups and global
              companies, building everything from responsive websites to
              complex, scalable software products. Along the way, I’ve developed
              frontend systems, backend services, APIs, and AI-powered solutions
              that help teams move faster and{' '}
            </span>

            <span className="text-secondary">
              deliver reliable digital experiences to millions of users.
            </span>
          </p>
        </div>
      </Container>
    </BorderContainer>
  )
}
