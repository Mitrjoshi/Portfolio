import { SectionAttribute } from '../components/section-attribute'
import { RevealText } from '../components/reveal-text'
import { InView } from '../components/in-view'

const BUILD_PROCESS = [
  {
    index: '01',
    category: 'Discovery',
    title: 'Understand the Problem',
    description:
      'Break down requirements, user needs, constraints and edge cases before writing code.',
  },
  {
    index: '02',
    category: 'Architecture',
    title: 'Design the System',
    description:
      'Map application flows, data models, APIs, component boundaries and technical decisions.',
  },
  {
    index: '03',
    category: 'Frontend',
    title: 'Build the Interface',
    description:
      'Develop responsive applications with React, TypeScript, reusable components and scalable UI patterns.',
  },
  {
    index: '04',
    category: 'Backend',
    title: 'Build the Logic',
    description:
      'Create APIs, business logic, authentication and server-side workflows that power the product.',
  },
  {
    index: '05',
    category: 'Data',
    title: 'Model & Connect Data',
    description:
      'Structure application data, connect databases and build reliable flows between client and server.',
  },
  {
    index: '06',
    category: 'Integration',
    title: 'Connect Services & AI',
    description:
      'Integrate REST APIs, AI models and external services into real application workflows.',
  },
  {
    index: '07',
    category: 'Quality',
    title: 'Test & Refine',
    description:
      'Validate functionality, responsive behaviour, accessibility, edge cases and production failure states.',
  },
  {
    index: '08',
    category: 'Delivery',
    title: 'Ship & Improve',
    description:
      'Build, deploy and monitor production applications, then iterate from real usage and feedback.',
  },
]

export const HowIBuild = () => {
  return (
    <div className="relative space-y-5 p-5 pt-20! md:p-10">
      <SectionAttribute text="How I build" />

      <div className="space-y-6">
        <RevealText
          lines={[
            <p className="text-3xl font-medium lg:max-w-[40ch] lg:text-5xl">
              From problem to <span className="text-secondary">production</span>
              .
            </p>,
          ]}
        />

        <InView>
          <p className="slide-up-fade-in text-secondary text-lg lg:max-w-[40%]">
            I work across the full development cycle — understanding the
            problem, designing the architecture, building the product,
            integrating services, testing edge cases, and shipping to
            production.
          </p>
        </InView>
      </div>

      <div className="divide-y border-y">
        {BUILD_PROCESS.map((item, index) => (
          <div
            className="grid items-center gap-2 py-8! md:grid-cols-[0.1fr_0.4fr_1fr] md:gap-4 md:py-4 lg:grid-cols-[0.1fr_0.5fr_1fr_1fr]"
            key={index}
          >
            <p className="text-primary text-xs">{item.index}</p>
            <p className="text-secondary text-xs tracking-wider text-nowrap uppercase">
              {item.category}
            </p>
            <div>
              <p className="text-xl font-medium md:text-2xl lg:text-3xl">
                {item.title}
              </p>
              <p className="text-secondary block lg:hidden">
                {item.description}
              </p>
            </div>
            <p className="text-secondary hidden lg:block">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
