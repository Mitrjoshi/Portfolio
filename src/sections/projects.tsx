import { Button } from '../components/button'

export const Projects = () => {
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-between gap-8 pt-10 lg:flex-row">
        <div className="w-full">
          <p className="text-6xl font-medium">
            Explore my work,{' '}
            <span className="block">
              process <span className="text-secondary">and more.</span>
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-secondary text-lg">
            Case studies and side explorations across web, SaaS, and apps. Keep
            exploring, there's more than just UI design.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button text="Screenshots Instead" showIcon />
            <Button text="Explore AI Work" showIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
