import { createFileRoute } from '@tanstack/react-router'
import { Container } from '../components/container'
import { BorderContainer } from '../components/border-container'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BorderContainer>
      <Container className="space-y-6 px-6 py-20">
        <div className="space-y-6">
          <p className="text-primary text-xs font-extralight uppercase">
            Last updated 3 September 2026
          </p>
          <p className="text-5xl font-semibold">Privacy</p>
          <p className="text-secondary md:max-w-[40ch]">
            What this site records while you read it, who receives it, and how
            to have it stopped. It is a portfolio, so the answer is short.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">The short version</p>
          <p className="text-secondary md:max-w-[45%]">
            This site measures how it is used — which pages get read, what gets
            clicked, roughly where in the world you are. It does not know your
            name, and nothing here is sold or shared with advertisers.
          </p>
          <p className="text-secondary md:max-w-[45%]">
            There is no account to make, no newsletter, and no form. If you want
            to reach me you send an email, and then I have your email address
            because you sent it to me.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">What is recorded</p>
          <p className="text-secondary md:max-w-[45%]">
            Pages you open and the order you open them in. Clicks, scrolls, and
            the occasional frustrated repeat-click on something that is not a
            button — that last one exists so I can find the things that look
            clickable and are not.
          </p>
          <p className="text-secondary md:max-w-[45%]">
            Your approximate location (country and city, worked out from your IP
            address, which is not stored), your device, browser and screen size,
            and the site that sent you here if you followed a link.
          </p>
          <p className="text-secondary md:max-w-[45%]">
            A random identifier is kept in your browser so that a second visit
            is recognized as the same visitor rather than a new one. It is a
            number. It is not tied to anything about you.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">Who receives it</p>
          <p className="text-secondary md:max-w-[45%]">
            PostHog, a product-analytics company, and Google Analytics, both on
            servers in the United States. They process it on my behalf and for
            no purpose of their own.
          </p>
          <p className="text-secondary md:max-w-[45%]">
            Vercel, who host the site, keep their own aggregate count of page
            views and no identifiers at all.
          </p>
          <p className="text-secondary md:max-w-[45%]">
            The site also loads fonts from Fontshare and Google Fonts, images
            and text from Sanity, and shows links to Dribbble, LinkedIn,
            Awwwards and ThemeForest. Loading a file from any of those means
            your browser told them it asked for it — the ordinary mechanics of
            the web, and nothing I send them.
          </p>

          <Separator />
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-medium">Turning it off</p>
          <p className="text-secondary md:max-w-[45%]">
            Any tracker-blocking extension will stop it, and I have no objection
            whatsoever — the site works exactly the same without it.
            Browser-level "do not track" and cookie-clearing both work too.
          </p>
          <p className="text-secondary md:max-w-[45%]">
            If you would rather I deleted what has already been collected, email
            me and I will. There is no form to fill in and I will not ask why.
          </p>

          <Separator />
        </div>

        <div className="w-fit space-y-4">
          <p className="text-3xl font-medium">Questions about any of this</p>
          <div className="group flex w-fit cursor-pointer items-center gap-2">
            <p className="text-secondary group-hover:text-primary text-lg font-medium underline underline-offset-10 duration-200">
              mitrjoshi26@gmail.com
            </p>

            <ArrowRight
              className="text-secondary group-hover:text-primary shrink-0 duration-200 group-hover:translate-x-1"
              strokeWidth={1}
              size={18}
            />
          </div>
        </div>
      </Container>
    </BorderContainer>
  )
}

const Separator = () => {
  return <div className="bg-border mt-12 h-px w-full md:w-[50%]" />
}
