// routes.ts

import type { RoutePath } from './providers/transition-navigation'

export type RouteItem = {
  path: RoutePath
  label: string
  transitionLabel: string
}

export const routes: RouteItem[] = [
  {
    path: '/',
    label: 'Welcome',
    transitionLabel: 'Welcome',
  },
  {
    path: '/work',
    label: 'Work',
    transitionLabel: 'Selected Work',
  },
  {
    path: '/projects',
    label: 'Projects',
    transitionLabel: 'Selected Projects',
  },
  {
    path: '/profile',
    label: 'Profile',
    transitionLabel: 'Profile',
  },
]
