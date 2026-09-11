import { useState } from 'react'
import { useLocation } from '@tanstack/react-router'

import { Button } from './button'
import { Container } from './container'
import ThemeButton from './theme-button'
import { useTransitionNavigate } from '../providers/transition-navigation'
import { routes, type RouteItem } from '../routes'
import { MobileMenu } from './mobile-menu'

export const Header = () => {
  const { pathname } = useLocation()

  const { transitionTo, transitioning } = useTransitionNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)
  const [menuPanelClosing, setMenuPanelClosing] = useState(false)

  const handleNavigate = (route: RouteItem) => {
    if (transitioning) return
    if (pathname === route.path) return

    transitionTo(route.path, route.transitionLabel)

    if (showMenu) {
      closeMenu()
    }
  }

  const openMenu = () => {
    if (showMenu) return

    setMenuClosing(false)
    setMenuPanelClosing(false)
    setShowMenu(true)
  }

  const closeMenu = () => {
    if (!showMenu || menuClosing) return

    setMenuClosing(true)

    setTimeout(() => {
      setMenuPanelClosing(true)
    }, 350)

    setTimeout(() => {
      setShowMenu(false)
      setMenuClosing(false)
      setMenuPanelClosing(false)
    }, 750)
  }

  return (
    <Container className="sticky! top-0 z-50 flex items-center justify-between border-b p-4">
      <div
        onClick={() => {
          if (pathname !== '/') {
            transitionTo('/', 'Welcome')
          }
        }}
        className="z-100 cursor-pointer"
      >
        <img src="/logo.svg" alt="Mitr" className="h-9 dark:invert" />
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <ul className="flex items-center gap-4">
          {routes.slice(0, 3).map((route) => (
            <li key={route.path}>
              <button
                className="hover:text-secondary relative cursor-pointer font-medium duration-200"
                onClick={() => handleNavigate(route)}
              >
                {route.label}

                {pathname === route.path && <Dot />}
              </button>
            </li>
          ))}
        </ul>

        <ThemeButton />
        <Button
          onClick={() => {
            transitionTo('/contact', 'Contact')
          }}
          text="Contact"
        />
      </div>

      <div className="z-100 flex items-center gap-4 md:hidden">
        <ThemeButton />

        <button
          aria-label="Toggle menu"
          className={`hover:bg-secondary/50 menu-icon rounded-full p-1 duration-200 ${showMenu ? 'menu-icon-open' : ''}`}
          onClick={() => {
            if (showMenu) {
              closeMenu()
            } else {
              openMenu()
            }
          }}
        >
          <span />
          <span />
        </button>
      </div>

      {showMenu && (
        <MobileMenu
          handleNavigate={handleNavigate}
          menuClosing={menuClosing}
          menuPanelClosing={menuPanelClosing}
        />
      )}
    </Container>
  )
}

const Dot = () => {
  return (
    <span className="bg-primary absolute -bottom-3 left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full" />
  )
}
