import { Button } from '../components/button'
import { InView } from '../components/in-view'
import { RevealText } from '../components/reveal-text'
import { useTransitionNavigate } from '../providers/transition-navigation'

export const Hero = () => {
  const { transitionTo } = useTransitionNavigate()

  return (
    <div className="p-4">
      <div className="flex flex-col items-start justify-start gap-8 py-20 xl:flex-row xl:items-center xl:justify-between xl:gap-0">
        <div className="w-full">
          <RevealText
            lines={[
              <span className="text-6xl font-medium">
                I design apps, websites,
              </span>,
              <>
                <span className="text-6xl font-medium">and </span>
                <span className="text-foreground/40 text-6xl font-medium">
                  AI-powered systems
                </span>
              </>,
            ]}
          />
        </div>
        <div className="space-y-10 xl:px-20">
          <InView>
            <p className="text-secondary slide-up-fade-in text-lg">
              10+ years designing the systems, brands and AI workflows behind
              products people actually use, serving millions of users every day.
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

      <div>
        <div className="flex items-end gap-2">
          <InView>
            <p className="text-primary/50 slide-up-fade-in pb-1 text-xs">01</p>
          </InView>
          <InView>
            <p className="slide-up-fade-in text-lg font-medium">ADSMN</p>
          </InView>
          <InView>
            <p className="text-secondary slide-up-fade-in">
              Software Developer L2
            </p>
          </InView>
        </div>
      </div>
    </div>
  )
}
