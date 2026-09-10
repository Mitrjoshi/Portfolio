import { ArrowRight } from 'lucide-react'
import { useTransitionNavigate } from '../providers/transition-navigation'
import { BorderContainerInner } from './border-container-inner'
import { useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { ToolCircuit } from './tool-circuit'

const DAILY_KIT = [
  'VS Code',
  'Git',
  'Postman',
  'Figma',
  'Supabase',
  'PostgreSQL',
  'Vercel',
  'TanStack',
  'Node.js',
]

export const Footer = ({
  type = 'circuit',
}: {
  type?: 'circuit' | 'street'
}) => {
  const { transitionTo } = useTransitionNavigate()
  const { pathname } = useLocation()

  const [activeDailyKit, setActiveDailyKit] = useState(0)

  return (
    <BorderContainerInner className="corner-border-bottom-left corner-border-bottom-right border-x pt-20">
      {type === 'circuit' ? (
        <>
          <div className="space-y-5 pt-20">
            {/* <div className="mx-auto w-fit">
          <Button
            onClick={() =>
              pathname !== '/work' && transitionTo('/work', 'Selected work')
            }
            text="Explore Portfolio"
            showIcon
          />
        </div> */}

            {/* CONNECTED LABEL */}
            <div className="mx-auto flex w-fit items-center gap-2">
              <p className="text-primary mt-1 text-xs">
                {String(activeDailyKit + 1).padStart(2, '0')}
              </p>

              <p
                key={`kit-${activeDailyKit}`}
                className="slide-up-fade-in-kit text-lg font-medium"
              >
                {DAILY_KIT[activeDailyKit]}

                <span className="text-secondary ml-2 text-xs">Daily Kit</span>
              </p>
            </div>
          </div>

          {/* CIRCUIT DRIVES THE LABEL */}
          <ToolCircuit
            tools={DAILY_KIT}
            activeIndex={activeDailyKit}
            onActiveIndexChange={setActiveDailyKit}
          />
        </>
      ) : (
        <></>
      )}

      <div className="space-y-20 p-5 pt-20 md:p-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-secondary text-xs uppercase">Contact</p>

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
            <p className="text-secondary text-xs uppercase">Sitemap</p>

            <ul className="text-secondary mt-5 space-y-2">
              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => transitionTo('/', 'Welcome')}
              >
                <p>Welcome</p>
              </li>

              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => transitionTo('/work', 'Selected Work')}
              >
                <p>Work</p>
              </li>

              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => transitionTo('/profile', 'Profile')}
              >
                <p>Profile</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-secondary text-xs uppercase">Elsewhere</p>

            <ul className="text-secondary mt-5 space-y-2">
              <li
                className="hover:text-foreground cursor-pointer duration-200"
                onClick={() => {
                  window.open('https://github.com/mitrjoshi', '_blank')
                }}
              >
                <p className="flex items-center gap-1">
                  Github
                  <ArrowRight
                    className="-rotate-45 duration-200"
                    strokeWidth={1}
                    size={20}
                  />
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
                  LinkedIn
                  <ArrowRight
                    className="-rotate-45 duration-200"
                    strokeWidth={1}
                    size={20}
                  />
                </p>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-secondary text-xs uppercase">Studio</p>

            <ul className="text-secondary mt-5 space-y-2">
              <li>
                <p>Mitr · IST India</p>
              </li>

              <li>
                <p>Product design · Systems · AI</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <p className="text-secondary text-xs uppercase">
            © {new Date().getFullYear()} Mitr Joshi — All rights reserved
          </p>

          <p
            onClick={() =>
              pathname !== '/privacy' && transitionTo('/privacy', 'Privacy')
            }
            className="text-secondary cursor-pointer text-xs uppercase"
          >
            Privacy
          </p>
        </div>
      </div>
    </BorderContainerInner>
  )
}
