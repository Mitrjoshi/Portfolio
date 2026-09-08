import { createRootRoute, Outlet, useMatchRoute } from '@tanstack/react-router'
import { useState } from 'react'

import { Header } from '../components/header'
import { BorderContainer } from '../components/border-container'
import { TransitionNavigationProvider } from '../providers/transition-navigation'
import { Footer } from '../components/footer'
import { SmoothScroll } from '../providers/smooth-scroll'
import { WelcomeTransition } from '../components/welcome-transition'

const RootLayout = () => {
  const matchRoute = useMatchRoute()

  const isProjectPage = matchRoute({
    to: '/work/$title',
    fuzzy: false,
  })

  const [isReload, setIsReload] = useState(() => {
    if (typeof window === 'undefined') return false

    const navigation = performance.getEntriesByType('navigation')[0] as
      PerformanceNavigationTiming | undefined

    return navigation?.type === 'reload'
  })

  console.log(isReload)

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

        {isReload && (
          <WelcomeTransition
            text="Welcome"
            onComplete={() => setIsReload(false)}
          />
        )}
      </SmoothScroll>
    </TransitionNavigationProvider>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
