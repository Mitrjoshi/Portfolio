import { ArrowRight } from 'lucide-react'

interface I_Props {
  text: string
  showIcon?: boolean
  onClick?: () => void
}

export const Button = ({ text, showIcon = false, onClick }: I_Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary group flex cursor-pointer items-center gap-2 px-4 py-3 font-medium text-nowrap text-black duration-200 hover:brightness-110"
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
