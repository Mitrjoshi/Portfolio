export const WorkFlowSideMenuItem = ({
  title,
  description,
  active,
  onClick,
}: {
  title: string
  description: string
  active?: boolean
  onClick: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={`${active ? 'bg-primary/10' : 'bg-transparent'} hover:bg-primary/10 relative flex cursor-pointer items-start gap-2 p-3 px-4 duration-200`}
    >
      <div
        style={{
          opacity: active ? 1 : 0,
        }}
        className="bg-foreground absolute bottom-0 left-0 h-0.5 w-full duration-200 lg:top-0 lg:h-full lg:w-0.5"
      />

      <div className="bg-foreground/50 mt-2 hidden aspect-square h-2 md:block" />

      <div className="space-y-1">
        <p className="text-xs font-medium md:text-sm">{title}</p>
        <p className="text-secondary hidden text-xs font-normal md:block">
          {description}
        </p>
      </div>
    </div>
  )
}
