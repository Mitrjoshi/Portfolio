export const WorkFlowProgressBlock = ({
  index,
  text,
  description,
  done,
  ongoing,
}: {
  index: number
  text: string
  description: string
  done: boolean
  ongoing: boolean
}) => {
  return (
    <div
      data-done={done}
      data-ongoing={ongoing}
      className="bg-background relative border p-3 duration-200 data-[done=true]:brightness-120 data-[ongoing=true]:brightness-120 md:p-4"
    >
      <div className="space-y-4">
        <p
          className={`text-xs ${done || ongoing ? 'text-primary' : 'text-secondary'} duration-200`}
        >
          0{index}
        </p>

        <div className="space-y-2">
          <p className="font-medium">{text}</p>
          <p className="text-secondary text-xs">{description}</p>
        </div>
      </div>

      <div className="bg-secondary/50 absolute bottom-0 left-0 h-0.5 w-full" />

      <div
        style={{
          width: `${done || ongoing ? 100 : 0}%`,
          transitionDuration: ongoing && !done ? '2000ms' : '200ms',
        }}
        className={`absolute bottom-0 left-0 h-0.5 transition-[width] ease-linear ${
          done ? 'bg-secondary/50' : 'bg-green-accent'
        }`}
      />
    </div>
  )
}
