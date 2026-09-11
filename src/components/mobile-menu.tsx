import { useEffect, type CSSProperties } from 'react'
import { routes, type RouteItem } from '../routes'
import { useLocation } from '@tanstack/react-router'

export const MobileMenu = ({
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
      className={`mobile-menu bg-background fixed inset-0 z-10 h-dvh w-screen pt-20 ${
        menuPanelClosing ? 'mobile-menu-exit' : ''
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[95vw] flex-col overflow-y-auto overscroll-contain px-4 pb-8">
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
