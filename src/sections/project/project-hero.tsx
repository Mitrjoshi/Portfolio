import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTransitionNavigate } from '../../providers/transition-navigation'
import { RevealText } from '../../components/reveal-text'
import { InView } from '../../components/in-view'

export const ProjectHero = () => {
  const { transitionBack } = useTransitionNavigate()

  return (
    <div className="space-y-10 p-5 pt-20! md:p-10">
      <button
        onClick={() => {
          transitionBack('Selected Projects')
        }}
        className="flex cursor-pointer items-center gap-2 text-sm duration-200 hover:text-green-200/70"
      >
        <ArrowLeft size={20} strokeWidth={1.5} />
        <p>All Work</p>
      </button>

      <InView className="space-y-4 md:space-y-8">
        <RevealText
          lines={[<p className="text-3xl font-medium md:text-5xl">MindPath</p>]}
        />
        <p className="slide-up-fade-in text-secondary text-lg md:max-w-[70ch] md:text-xl">
          An online mental-health service for adult ADHD & autism assessment —
          built from a name and a mission.
        </p>
      </InView>

      <div className="grid divide-x divide-y border md:grid-cols-4 md:divide-y-0">
        <DetailsBox label={'role'} value="UI/UX Designer" />
        <DetailsBox label={'tools'} value="React.js, Node.js" />
        <DetailsBox label={'year'} value="2026" />
        <DetailsBox label={'live'} value="mitrjoshi.vercel.in" />
      </div>
    </div>
  )
}

const DetailsBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="space-y-2 p-4">
      <p className="text-secondary text-sm uppercase">{label}</p>
      {label === 'live' ? (
        <p className="group flex cursor-pointer items-center font-medium text-green-200/70 underline underline-offset-4">
          {value}

          <ArrowRight
            strokeWidth={1.5}
            className="-rotate-45 duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </p>
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  )
}
