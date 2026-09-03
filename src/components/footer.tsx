import { ArrowRight } from 'lucide-react'
import { useTransitionNavigate } from '../providers/transition-navigation'
import { BorderContainerInner } from './border-container-inner'
import { Button } from './button'
import { useLocation } from '@tanstack/react-router'

export const Footer = () => {
  const { transitionTo } = useTransitionNavigate()
  const { pathname } = useLocation()

  return (
    <BorderContainerInner className="corner-border-bottom-left corner-border-bottom-right border-x">
      <div className="pt-20">
        <div className="mx-auto w-fit">
          <Button
            onClick={() =>
              pathname !== '/work' && transitionTo('/work', 'Selected work')
            }
            text="Explore Portfolio"
            showIcon
          />
        </div>
      </div>

      <div className="space-y-20 px-10 pt-20 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-secondary text-sm font-extralight uppercase">
              Contact
            </p>

            <ul className="text-secondary mt-5 space-y-2">
              <li>
                <p className="text-foreground font-medium">
                  mitrjoshi26@gmail.com
                </p>
              </li>
              <li className="mt-5">
                <p>Lets get in touch!</p>
              </li>
              <li>
                <p>Response within 24 hours</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-secondary text-sm font-extralight uppercase">
              Sitemap
            </p>

            <ul className="text-secondary mt-5 space-y-2">
              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => transitionTo('/', 'Welcome')}
              >
                <p className="">Welcome</p>
              </li>
              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => transitionTo('/work', 'Selected Work')}
              >
                <p className="">Work</p>
              </li>
              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => transitionTo('/projects', 'Selected Projects')}
              >
                <p className="">Projects</p>
              </li>
              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => transitionTo('/profile', 'Profile')}
              >
                <p className="">Profile</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-secondary text-sm font-extralight uppercase">
              Elsewhere
            </p>

            <ul className="text-secondary mt-5 space-y-2">
              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => {
                  window.open('https://github.com/mitrjoshi', '_blank')
                }}
              >
                <p className="flex items-center gap-1">
                  Github{' '}
                  <span>
                    <ArrowRight
                      className="-rotate-45 duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1}
                      size={20}
                    />
                  </span>
                </p>
              </li>
              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/mitr-joshi/',
                    '_blank'
                  )
                }}
              >
                <p className="flex items-center gap-1">
                  LinkedIn{' '}
                  <span>
                    <ArrowRight
                      className="-rotate-45 duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1}
                      size={20}
                    />
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-secondary text-sm font-extralight uppercase">
              Studio
            </p>

            <ul className="text-secondary mt-5 space-y-2">
              <li>
                <p className="">Mitr · IST India</p>
              </li>
              <li>
                <p className="">Product design · Systems · AI</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <p className="text-secondary text-xs uppercase">
            © {new Date().getFullYear()} Mitr Joshi — All rights reserved
          </p>

          <p
            onClick={() => transitionTo('/privacy', 'Privacy')}
            className="text-secondary cursor-pointer text-xs uppercase"
          >
            Privacy
          </p>
        </div>
      </div>
    </BorderContainerInner>
  )
}
