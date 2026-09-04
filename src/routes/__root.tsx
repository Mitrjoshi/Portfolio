import { createRootRoute, Outlet, useMatchRoute } from '@tanstack/react-router'

import { Header } from '../components/header'
import { BorderContainer } from '../components/border-container'
import { TransitionNavigationProvider } from '../providers/transition-navigation'
import { Footer } from '../components/footer'
import { SmoothScroll } from '../providers/smooth-scroll'

const RootLayout = () => {
  const matchRoute = useMatchRoute()

  const isProjectPage = matchRoute({
    to: '/projects/$title',
    fuzzy: false,
  })

  return (
    <TransitionNavigationProvider>
      <SmoothScroll>
        {!isProjectPage && (
          <div className="sticky top-0 z-50">
            <BorderContainer>
              <Header />
            </BorderContainer>
          </div>
        )}

        <Outlet />

        {!isProjectPage && (
          <div className="bg-background border-t">
            <Footer />
          </div>
        )}
      </SmoothScroll>
    </TransitionNavigationProvider>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
