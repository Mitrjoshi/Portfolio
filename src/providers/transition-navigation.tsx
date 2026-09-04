// transition-navigation.tsx

import {
  createContext,
  useContext,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react'
import { useNavigate, useRouter } from '@tanstack/react-router'

import ScreenTransition from '../components/screen-transition'

export type RoutePath =
  | '/'
  | '/work'
  | '/projects'
  | '/projects/$title'
  | '/profile'
  | '/contact'
  | '/privacy'

type RouteParams = Record<string, string>

type TransitionTarget = {
  // path is null for back navigation — we don't know/need the
  // destination path, we just replay browser history.
  path: RoutePath | null
  text: string
  params?: RouteParams
}

type TransitionNavigationContextType = {
  transitionTo: (path: RoutePath, text: string, params?: RouteParams) => void
  transitionBack: (text: string) => void
  transitioning: boolean
}

const TransitionNavigationContext =
  createContext<TransitionNavigationContextType | null>(null)

export const TransitionNavigationProvider = ({
  children,
}: PropsWithChildren) => {
  const navigate = useNavigate()
  const router = useRouter()

  const [transitioning, setTransitioning] = useState(false)
  const [target, setTarget] = useState<TransitionTarget | null>(null)

  const transitioningRef = useRef(false)

  const startTransition = (target: TransitionTarget) => {
    if (transitioningRef.current) return

    transitioningRef.current = true

    setTarget(target)
    setTransitioning(true)
  }

  const transitionTo = (
    path: RoutePath,
    text: string,
    params?: RouteParams
  ) => {
    startTransition({ path, text, params })
  }

  const transitionBack = (text: string) => {
    startTransition({ path: null, text })
  }

  return (
    <TransitionNavigationContext.Provider
      value={{
        transitionTo,
        transitionBack,
        transitioning,
      }}
    >
      {children}

      {transitioning && target && (
        <ScreenTransition
          key={`${target.path ?? 'back'}-${target.text}`}
          text={target.text}
          onMidpoint={() => {
            if (target.path === null) {
              router.history.back()
              return
            }

            navigate({
              to: target.path,
              params: target.params,
            })
          }}
          onComplete={() => {
            transitioningRef.current = false
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
