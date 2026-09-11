import { ArrowRight } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

interface I_Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  showIcon?: boolean
  inverted?: boolean
  highlight?: boolean
  size?: 'default' | 'sm'
}

export const Button = ({
  text,
  showIcon = false,
  inverted = false,
  highlight = true,
  size = 'default',
  disabled = false,
  className = '',
  ...props
}: I_Props) => {
  return (
    <button
      disabled={disabled}
      className={`${highlight ? 'bg-primary text-black' : 'text-foreground hover:border-foreground/50 border'} group md:text-md flex cursor-pointer items-center gap-2 ${size === 'default' ? 'px-2 py-1.5 text-sm md:px-4 md:py-3' : 'px-2 py-1.5 text-xs'} font-medium text-nowrap duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100 ${className}`}
      {...props}
    >
      {text}

      {showIcon && (
        <ArrowRight
          className={`${inverted ? 'rotate-125' : '-rotate-45'} duration-200 ${inverted ? 'group-hover:-translate-x-1 group-hover:translate-y-1' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`}
          strokeWidth={1}
        />
      )}
    </button>
  )
}
