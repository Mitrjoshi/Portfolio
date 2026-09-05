import { ArrowRight } from 'lucide-react'

interface I_Props {
  text: string
  showIcon?: boolean
  highlight?: boolean
  onClick?: () => void
}

export const Button = ({
  text,
  showIcon = false,
  onClick,
  highlight = true,
}: I_Props) => {
  return (
    <button
      onClick={onClick}
      className={`${highlight ? 'bg-primary text-black' : 'text-foreground hover:border-foreground/50 border'} group md:text-md flex cursor-pointer items-center gap-2 px-2 py-1.5 text-sm font-medium text-nowrap duration-200 hover:brightness-110 md:px-4 md:py-3`}
    >
      {text}

      {showIcon && (
        <ArrowRight
          className="-rotate-45 duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          strokeWidth={1}
        />
      )}
    </button>
  )
}
