import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SmoothScroll } from '../../../providers/smooth-scroll'
import { Header } from '../../../components/header'
import { DotContainer } from '../../../components/dot-container'
import { Footer } from '../../../components/footer'

export const Route = createFileRoute('/projects/$title')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SmoothScroll>
      <DotContainer>
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        <Outlet />
      </DotContainer>

      <div className="bg-background border-t">
        <Footer />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </SmoothScroll>
  )
}
