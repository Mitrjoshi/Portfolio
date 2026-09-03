import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/header'
import { BorderContainer } from '../components/border-container'
import { TransitionNavigationProvider } from '../providers/transition-navigation'
import { Footer } from '../components/footer'
import { SmoothScroll } from '../providers/smooth-scroll'

const RootLayout = () => (
  <TransitionNavigationProvider>
    <SmoothScroll>
      <div className="sticky top-0 z-50">
        <BorderContainer>
          <Header />
        </BorderContainer>
      </div>

      <Outlet />

      <div className="bg-background border-t">
        <Footer />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </SmoothScroll>
  </TransitionNavigationProvider>
)

export const Route = createRootRoute({ component: RootLayout })
