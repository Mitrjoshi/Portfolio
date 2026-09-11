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
            What this site records while you explore it, why it is collected,
            and how you can stop it. It is a portfolio, so the answer is fairly
            short.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">The short version</p>

          <p className="text-secondary md:max-w-[45%]">
            This site uses analytics to understand how people move through it —
            which pages get viewed, what gets clicked, how far people scroll,
            and where the experience could be improved. It does not need to know
            who you are to do that.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            There is no account to create, no newsletter to subscribe to, and no
            contact form collecting personal information. If you email me, I
            will have your email address because you chose to send it.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">What is recorded</p>

          <p className="text-secondary md:max-w-[45%]">
            Pathlens records basic interaction data such as pages visited,
            navigation between pages, clicks, scroll activity, and repeated
            clicks on elements that may look interactive. That information helps
            me understand what works and what needs improving.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            It may also record general technical information such as your device
            type, browser, screen size, referring page, and an approximate
            location derived from your network connection.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            A random visitor identifier may be stored in your browser so that
            separate visits can be understood as part of the same anonymous
            journey. It is not intended to identify you personally.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">Who receives it</p>

          <p className="text-secondary md:max-w-[45%]">
            Pathlens is the product-analytics platform used on this site to help
            me understand visitor journeys, interactions, and usability. Google
            Analytics may also be used for broader traffic and audience
            measurement.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            Vercel hosts this website and may process the normal technical
            information required to deliver pages and assets when you visit.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            The site may also load fonts, images, and other assets from external
            services and includes links to platforms such as Dribbble, LinkedIn,
            Awwwards, and ThemeForest. If you visit an external service, its own
            privacy policy applies.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">What Pathlens is used for</p>

          <p className="text-secondary md:max-w-[45%]">
            Pathlens is used to understand the experience rather than the
            individual. I use the data to see which work gets explored, where
            visitors lose interest, which interactions are useful, and where
            something in the interface may be confusing.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            Analytics collected through this site is not used to build an
            advertising profile or sold to advertisers.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">Turning it off</p>

          <p className="text-secondary md:max-w-[45%]">
            Tracker-blocking and privacy extensions may prevent analytics from
            loading, and that is completely fine. The portfolio is designed to
            work without analytics.
          </p>

          <p className="text-secondary md:max-w-[45%]">
            Clearing your browser storage can also remove locally stored
            identifiers. If you have a question about information collected
            through this site, you can email me directly.
          </p>

          <Separator />
        </div>

        <div className="w-fit space-y-4">
          <p className="text-3xl font-medium">Questions about any of this</p>

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
