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
      className="bg-primary flex cursor-pointer items-center gap-4 px-4 py-3 font-medium text-black duration-200 hover:brightness-110"
    >
      {text}

      {showIcon && <ArrowRight className="-rotate-45" strokeWidth={1} />}
    </button>
  )
}
