import { createFileRoute } from '@tanstack/react-router'
import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { RevealText } from '../components/reveal-text'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BorderContainer>
      <Container>
        <div className="space-y-4 px-10 py-20">
          <p className="text-primary slide-up-fade-in text-xs tracking-[.16em] uppercase">
            Contact — Mitr · IST India
          </p>

          <RevealText
            lines={[
              <p className="text-6xl font-medium">
                Let's <span className="text-secondary">talk</span>
              </p>,
            ]}
          />

          <p className="text-secondary slide-up-fade-in text-lg md:max-w-[40%]">
            Software development, scalable systems, web apps & AI solutions —
            based in Mumbai, working with teams everywhere.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <ContactCard
              label="Email"
              value="mitrjoshi26@gmail.com"
              link="mailto:mitrjoshi26@gmail.com"
              highlight
            />

            <ContactCard
              label="GitHub"
              value="/mitrjoshi"
              link="https://github.com/mitrjoshi"
            />

            <ContactCard
              label="LinkedIn"
              value="/mitr-joshi"
              link="https://www.linkedin.com/in/mitr-joshi"
            />
          </div>
        </div>
      </Container>
    </BorderContainer>
  )
}

const ContactCard = ({
  label,
  value,
  link,
  highlight,
}: {
  label: string
  value: string
  link: string
  highlight?: boolean
}) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div
      onClick={() => {
        if (highlight) {
          copyToClipboard()
        } else {
          window.open(link, '_blank')
        }
      }}
      className={`${highlight ? 'bg-primary border border-[#c47f22]' : 'hover:border-foreground border'} slide-up-fade-in group relative cursor-pointer p-4 duration-300 hover:-translate-y-1`}
    >
      <p
        className={`${highlight ? 'text-background/80 group-hover:text-foreground/80 duration-200' : 'text-foreground/50'} text-sm uppercase`}
      >
        {label}
      </p>
      <div className="flex items-center gap-2">
        <p
          className={`${highlight ? 'text-background group-hover:text-foreground duration-200' : 'text-foreground'} text-lg font-medium`}
        >
          {value}
        </p>

        {!highlight && (
          <ArrowRight
            className={`${highlight ? 'text-background' : 'text-foreground mr-6'} -rotate-45 duration-200 group-hover:translate-x-1 group-hover:-translate-y-1`}
            strokeWidth={1}
            size={20}
          />
        )}
      </div>

      {highlight && (
        <div className="absolute top-2 right-2 opacity-0 duration-200 group-hover:opacity-100">
          <button
            className={`${copied ? 'bg-foreground text-background' : 'bg-background'} px-2 py-1 text-xs`}
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
    </div>
  )
}
