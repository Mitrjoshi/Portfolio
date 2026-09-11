import { Button } from '../components/button'
import { CityWalkerSvg } from '../components/svg/city-walker'
import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { useTransitionNavigate } from '../providers/transition-navigation'

export const Hero = () => {
  const { transitionTo } = useTransitionNavigate()

  return (
    <>
      <div className="p-5 pb-0! md:p-10">
        <div className="flex flex-col items-start justify-start gap-8 py-20 xl:flex-row xl:items-center xl:justify-between xl:gap-0">
          <div className="w-full">
            <RevealText
              lines={[
                <span className="text-3xl font-medium md:text-5xl">
                  I engineer web apps,
                </span>,
                <>
                  <span className="text-3xl font-medium md:text-5xl">
                    interfaces{' '}
                  </span>
                  <span className="text-foreground/40 text-3xl font-medium md:text-5xl">
                    and AI systems
                  </span>
                </>,
              ]}
            />
          </div>
          <div className="space-y-5">
            <InView>
              <p className="text-secondary slide-up-fade-in text-lg">
                {new Date().getFullYear() - 2022}+ years turning complex ideas
                into fast, scalable web applications and AI-powered digital
                products.
              </p>
            </InView>

            <InView>
              <div className="slide-up-fade-in flex flex-wrap items-center gap-6">
                <Button
                  onClick={() => {
                    transitionTo('/work', 'Selected work')
                  }}
                  text="View selected work"
                  showIcon={true}
                />
                <Button
                  highlight={false}
                  onClick={() => {
                    transitionTo('/profile', 'Profile')
                  }}
                  text="About me"
                  showIcon={true}
                />
              </div>
            </InView>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-2">
            <div className="flex items-end gap-2">
              <InView>
                <p className="text-primary/50 slide-up-fade-in pb-1 text-xs">
                  01
                </p>
              </InView>
              <InView>
                <p className="slide-up-fade-in text-lg font-medium">ADSMN</p>
              </InView>
            </div>
            <InView>
              <p className="text-secondary slide-up-fade-in">
                Software Developer L2
              </p>
            </InView>
          </div>

          <div className="hidden md:block">
            <p className="text-secondary">Next project</p>
          </div>
        </div>
      </div>

      <div
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
        className="mt-5 w-full overflow-hidden"
      >
        <CityWalkerSvg className="w-full" />
      </div>
    </>
  )
}
