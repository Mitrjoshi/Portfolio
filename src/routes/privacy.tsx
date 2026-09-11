import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'

export const Route = createFileRoute('/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BorderContainer>
      <Container className="space-y-6 px-6 py-20">
        <div className="space-y-6">
          <p className="text-primary text-xs font-extralight uppercase">
            Last updated 11 September 2026
          </p>

          <p className="text-5xl font-semibold">Privacy</p>

          <p className="text-secondary md:max-w-[40ch]">
            A straightforward explanation of what this portfolio records, why it
            is collected, and how you can control it.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">The short version</p>

          <p className="text-secondary md:max-w-[45%]">
            This portfolio uses Pathlens, a product analytics platform I built,
            to understand how people explore the site and where the experience
            can be improved.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            There are no user accounts, newsletter sign-ups, or contact forms
            collecting personal information. If you email me directly, I will
            only receive the information you choose to send.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">What is recorded</p>

          <p className="text-secondary md:max-w-[45%]">
            Pathlens records basic interaction data such as pages visited,
            navigation between pages, clicks, scroll activity, and repeated
            interactions that may indicate friction in the interface.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            It may also record basic technical information such as device type,
            browser, screen size, referring page, and other information needed
            to understand how the site performs across different environments.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            A random visitor identifier may be stored in your browser so that
            activity across multiple visits can be understood as part of the
            same anonymous journey. It is not intended to identify you
            personally.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">Who receives it</p>

          <p className="text-secondary md:max-w-[45%]">
            Analytics data from this portfolio is collected through Pathlens,
            which is built and operated by me. No separate third-party analytics
            product is used on this site.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            The information is used only to understand how this portfolio is
            being used and to improve its functionality, usability, and overall
            experience.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">What Pathlens is used for</p>

          <p className="text-secondary md:max-w-[45%]">
            Pathlens helps me understand which projects people explore, how
            visitors move through the site, which interactions are useful, and
            where something may be unclear or difficult to use.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            Analytics collected through this portfolio is not sold, shared with
            advertisers, or used to build advertising profiles.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">Turning it off</p>

          <p className="text-secondary md:max-w-[45%]">
            Privacy extensions and tracker blockers may prevent Pathlens from
            loading. The portfolio is designed to continue working normally
            without analytics.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            Clearing your browser storage can also remove locally stored visitor
            identifiers. If you have questions about information collected
            through this site, you can contact me directly.
          </p>

          <Separator />
        </div>

        <div className="w-fit space-y-4">
          <p className="text-3xl font-medium">Questions?</p>

          <a
            href="mailto:mitrjoshi26@gmail.com"
            className="group flex w-fit items-center gap-2"
          >
            <p className="text-secondary group-hover:text-primary text-lg font-medium underline underline-offset-10 duration-200">
              mitrjoshi26@gmail.com
            </p>

            <ArrowRight
              className="text-secondary group-hover:text-primary shrink-0 duration-200 group-hover:translate-x-1"
              strokeWidth={1}
              size={18}
            />
          </a>
        </div>
      </Container>
    </BorderContainer>
  )
}

const Separator = () => {
  return <div className="bg-border mt-12 h-px w-full md:w-[50%]" />
}
