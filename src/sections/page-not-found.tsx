import { BorderContainer } from '../components/border-container'
import { Button } from '../components/button'
import { Container } from '../components/container'
import { RevealText } from '../components/reveal-text'
import { useTransitionNavigate } from '../providers/transition-navigation'
import { InView } from '../components/in-view'

export const PageNotFound = () => {
  const { transitionTo } = useTransitionNavigate()

  return (
    <BorderContainer>
      <Container>
        <div className="flex flex-col items-center justify-center space-y-10 p-5 pt-20 md:p-10">
          <div className="flex flex-col items-center justify-center space-y-2">
            <InView>
              <p className="slide-up-fade-in text-primary text-center text-xs tracking-wider uppercase opacity-80">
                Not on file
              </p>
            </InView>
            <RevealText
              lines={[
                <p className="text-center text-3xl font-medium md:text-5xl">
                  Page <span className="text-secondary">not found</span>
                </p>,
              ]}
            />
            <InView>
              <p className="slide-up-fade-in text-secondary text-center md:max-w-[40ch] md:text-lg">
                Whatever this page was, it moved, retired to the archive, or
                never shipped. The robot is going through the drawers now — so
                far it has found everything except what you asked for.
              </p>
            </InView>
          </div>
          <InView>
            <Button
              onClick={() => {
                transitionTo('/', 'Welcome')
              }}
              text="Back to homepage"
              showIcon
              className="slide-up-fade-in"
            />
          </InView>
        </div>
      </Container>
    </BorderContainer>
  )
}
