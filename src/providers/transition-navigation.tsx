// transition-navigation.tsx

import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react'
import { useNavigate } from '@tanstack/react-router'

import ScreenTransition from '../components/screen-transition'

export type RoutePath =
  '/' | '/work' | '/projects' | '/profile' | '/contact' | '/privacy'

type TransitionNavigationContextType = {
  transitionTo: (path: RoutePath, text: string) => void
  transitioning: boolean
}

const TransitionNavigationContext =
  createContext<TransitionNavigationContextType | null>(null)

export const TransitionNavigationProvider = ({
  children,
}: PropsWithChildren) => {
  const navigate = useNavigate()

  const [transitioning, setTransitioning] = useState(false)

  const [target, setTarget] = useState<{
    path: RoutePath
    text: string
  } | null>(null)

  const transitionTo = (path: RoutePath, text: string) => {
    if (transitioning) return

    setTarget({
      path,
      text,
    })

    setTransitioning(true)
  }

  return (
    <TransitionNavigationContext.Provider
      value={{
        transitionTo,
        transitioning,
      }}
    >
      {children}

      {transitioning && target && (
        <ScreenTransition
          text={target.text}
          onMidpoint={() => {
            navigate({
              to: target.path,
            })
          }}
          onComplete={() => {
            setTransitioning(false)
            setTarget(null)
          }}
        />
      )}
    </TransitionNavigationContext.Provider>
  )
}

export const useTransitionNavigate = () => {
  const context = useContext(TransitionNavigationContext)

  if (!context) {
    throw new Error(
      'useTransitionNavigate must be used inside TransitionNavigationProvider'
    )
  }

  return context
}
