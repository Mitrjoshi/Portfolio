export const WorkFlowPill = ({
  text,
  highlight = false,
  onClick,
  href,
  disabled = false,
  title,
}: {
  text: string
  highlight?: boolean
  onClick?: () => void
  href?: string
  disabled?: boolean
  title?: string
}) => {
  const classes = `border font-medium uppercase transition-colors ${
    highlight ? 'bg-secondary/5 px-2 py-1' : 'bg-transparent px-3 py-1.5'
  } ${
    disabled
      ? 'cursor-not-allowed opacity-40'
      : (href || onClick) && 'hover:bg-primary/10 cursor-pointer'
  }`

  const label = <p className="text-secondary text-xs">{text}</p>

  if (disabled) {
    return (
      <div className={classes} title={title}>
        {label}
      </div>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        title={title}
      >
        {label}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} title={title}>
      {label}
    </button>
  )
}
