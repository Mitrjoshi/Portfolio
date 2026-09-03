import { useEffect, useState, type CSSProperties } from 'react'
import { useLocation } from '@tanstack/react-router'

import { Button } from './button'
import { Container } from './container'
import ThemeButton from './theme-button'
import { useTransitionNavigate } from '../providers/transition-navigation'
import { routes, type RouteItem } from '../routes'

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
          {routes.map((route) => (
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

const MobileMenu = ({
  menuClosing,
  menuPanelClosing,
  handleNavigate,
}: {
  menuClosing: boolean
  menuPanelClosing: boolean
  handleNavigate: (route: RouteItem) => void
}) => {
  const { pathname } = useLocation()

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div
      className={`mobile-menu bg-background fixed inset-0 z-10 h-dvh w-screen ${
        menuPanelClosing ? 'mobile-menu-exit' : ''
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[95vw] flex-col overflow-y-auto overscroll-contain px-4 pt-20 pb-8">
        <ul className="space-y-6">
          {routes.map((route, index) => (
            <li
              key={route.path}
              onClick={() => handleNavigate(route)}
              className={`mobile-menu-item cursor-pointer border-b py-6 ${
                menuClosing ? 'mobile-menu-item-exit' : ''
              }`}
              style={
                {
                  '--index': index,
                } as CSSProperties
              }
            >
              <div className="flex items-end gap-5">
                <p className="text-primary text-xs">0{index + 1}</p>

                <p
                  data-active={pathname === route.path}
                  className="data-[active=true]:text-primary text-4xl font-medium"
                >
                  {route.label}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`mobile-menu-footer text-foreground/80 mt-auto pt-10 text-xs ${
            menuClosing ? 'mobile-menu-footer-exit' : ''
          }`}
        >
          <a
            href="mailto:mitrjoshi26@gmail.com"
            className="flex cursor-pointer items-center gap-2"
          >
            <p className="text-sm font-medium">mitrjoshi26@gmail.com</p>
          </a>

          <p className="font-extralight">India - Mumbai</p>
        </div>
      </div>
    </div>
  )
}
