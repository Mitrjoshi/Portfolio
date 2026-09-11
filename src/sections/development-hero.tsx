import { Button } from '../components/button'
import { RevealText } from '../components/reveal-text'
import { SoftwareDevelopmentPipelineSvg } from '../components/svg/software-development-pipeline-svg'

export const DevelopmentHero = ({
  handleScrollToSection,
}: {
  handleScrollToSection: (val: 'flow' | 'built') => void
}) => {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-8 p-5 pt-10 md:p-10 lg:flex-row">
        <div className="w-full pt-12">
          <RevealText
            lines={[
              <p className="text-3xl font-medium md:text-5xl">
                Explore what I build,{' '}
                <span className="block">
                  how I work <span className="text-secondary">and more.</span>
                </span>
              </p>,
            ]}
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-secondary slide-up-fade-in text-lg">
            Case studies and side projects across web apps, SaaS products,
            frontend systems, and AI-powered experiences. There’s more here than
            just the interface.
          </p>

          <div className="slide-up-fade-in flex flex-wrap items-center gap-4">
            <Button
              onClick={() => handleScrollToSection('flow')}
              text="The workflow"
              showIcon
              inverted
            />
            <Button
              onClick={() => handleScrollToSection('built')}
              text="What I built"
              showIcon
              inverted
              highlight={false}
            />
          </div>
        </div>
      </div>

      <SoftwareDevelopmentPipelineSvg />
    </div>
  )
}
