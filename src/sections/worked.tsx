import { BorderContainer } from '../components/border-container'
import { Container } from '../components/container'
import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { SectionAttribute } from '../components/section-attribute'

const teams = [
  {
    title: 'ADSMN',
    position: 'Software Developer L2',
    work: 'Building production AI platforms for major brands using Google Vertex AI (Gemini, Imagen, Veo).',
  },
  {
    title: 'ADSMN',
    position: 'Software Developer L1',
    work: 'Built a ReactFlow-based storyboard and video workflow canvas, including node execution pipelines and GCS-backed autosave.',
  },
  {
    title: 'ADSMN',
    position: 'Frontend Developer',
    work: 'Developed core frontend features and UI systems using React and TypeScript.',
  },
  {
    title: 'ADSMN',
    position: 'Frontend Developer Intern',
    work: "Contributed to frontend development while learning the team's tools and workflows.",
  },
]

export const Worked = () => {
  return (
    <BorderContainer>
      <Container className="corner-border-top-right relative border-x-0 border-t">
        <div className="p-5 py-20! md:p-10">
          <SectionAttribute text="Teams" />

          <div className="space-y-6">
            <RevealText
              lines={[
                <p className="text-3xl font-medium md:max-w-[40%] md:text-5xl">
                  Where I've <span className="text-secondary">worked</span>.
                </p>,
              ]}
            />

            <InView>
              <p className="slide-up-fade-in text-secondary text-lg md:max-w-[40%]">
                From global banks to independent apps — product, brand and
                systems for teams of every size.
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
      </Container>
    </BorderContainer>
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
    <div className="hover:bg-primary/5 group grid w-full grid-rows-[20px_72px_1fr] gap-5 p-4 transition-colors duration-200 md:aspect-square">
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
