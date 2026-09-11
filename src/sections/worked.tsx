import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { SectionAttribute } from '../components/section-attribute'

const teams = [
  {
    title: 'ADSMN',
    position: 'Software Developer L2',
    work: 'Building production-ready AI platforms for leading brands using Google Vertex AI, Gemini, Imagen, and Veo.',
  },
  {
    title: 'ADSMN',
    position: 'Software Developer L1',
    work: 'Built a React Flow-based storyboard and video workflow platform with node execution pipelines, autosave, and GCS integration.',
  },
  {
    title: 'ADSMN',
    position: 'Frontend Developer',
    work: 'Developed scalable frontend features, reusable UI components, and product experiences using React and TypeScript.',
  },
  {
    title: 'ADSMN',
    position: 'Frontend Developer Intern',
    work: 'Contributed to production frontend projects while building a strong foundation in React, TypeScript, and modern development workflows.',
  },
]

export const Worked = () => {
  return (
    <div>
      <div className="p-5 py-20! md:p-10">
        <SectionAttribute text="Teams" />

        <div className="space-y-6">
          <RevealText
            lines={[
              <p className="text-3xl font-medium md:max-w-[40ch] md:text-5xl">
                Where I've <span className="text-secondary">grown</span>.
              </p>,
            ]}
          />

          <InView>
            <p className="slide-up-fade-in text-secondary text-lg md:max-w-[40%]">
              From frontend development to AI-powered platforms — taking on more
              complex products, systems, and engineering challenges along the
              way.
            </p>
          </InView>
        </div>
      </div>

      <div
        style={{
          gridTemplateColumns: `repeat(${Math.min(teams.length, 5)}, minmax(0, 1fr))`,
        }}
        className={`divide-border divide-x md:grid ${teams.length < 5 ? 'divide-y md:divide-y-0' : 'divide-y'} border-t`}
      >
        {teams.map((team, i) => (
          <TeamsCard key={i} index={i} team={team} />
        ))}
      </div>
    </div>
  )
}

const TeamsCard = ({
  team,
  index,
}: {
  team: (typeof teams)[number]
  index: number
}) => {
  return (
    <div className="hover:bg-primary-foreground group grid w-full grid-rows-[20px_72px_1fr] gap-5 p-4 transition-colors duration-200 md:aspect-square">
      {/* Index */}
      <p className="text-secondary group-hover:text-primary text-xs transition-colors duration-200">
        A{index + 1}
      </p>

      {/* Role */}
      <div className="space-y-2">
        <p className="text-lg font-medium">{team.title}</p>

        <p className="text-secondary">{team.position}</p>
      </div>

      {/* Work */}
      <p className="text-secondary">{team.work}</p>
    </div>
  )
}
