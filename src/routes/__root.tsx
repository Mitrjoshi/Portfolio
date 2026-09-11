import { createRootRoute, Outlet, useMatchRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { Header } from '../components/header'
import { BorderContainer } from '../components/border-container'
import { TransitionNavigationProvider } from '../providers/transition-navigation'
import { Footer } from '../components/footer'
import { SmoothScroll } from '../providers/smooth-scroll'
import { WelcomeTransition } from '../components/welcome-transition'

const WELCOME_TRANSITION_KEY = 'welcome-transition-shown'

const RootLayout = () => {
  const matchRoute = useMatchRoute()

  const isProjectPage = matchRoute({
    to: '/work/$title',
    fuzzy: false,
  })

  const isContactPage = matchRoute({
    to: '/contact',
    fuzzy: false,
  })

  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const hasShownWelcome = localStorage.getItem(WELCOME_TRANSITION_KEY)

    if (!hasShownWelcome) {
      setShowWelcome(true)
    }
  }, [])

  const handleWelcomeComplete = () => {
    localStorage.setItem(WELCOME_TRANSITION_KEY, 'true')
    setShowWelcome(false)
  }

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
            <Footer type={isContactPage ? 'street' : 'circuit'} />
          </div>
        )}

        {showWelcome && (
          <WelcomeTransition
            text="Welcome"
            onComplete={handleWelcomeComplete}
          />
        )}
      </SmoothScroll>
    </TransitionNavigationProvider>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
