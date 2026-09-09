import { ChevronRightIcon } from 'lucide-react'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { WorkFlowPill } from './work-flow-pill'
import type { WorkFlowEntry } from '../-constants/work-flow'

const TERMINAL_PROMPT = '➜'

type TerminalRun = {
  command: string
  lines: string[]
}

// colors a command line: "➜ pathlens build --flag"
const highlightCommand = (text: string): ReactNode => {
  const tokens = text.split(/(\s+)/)
  let isFirstWord = true

  return tokens.map((token, i) => {
    if (token === '') return null
    if (/^\s+$/.test(token)) return token

    let cls = 'text-white/90'

    if (isFirstWord) {
      cls = 'text-blue-400'
      isFirstWord = false
    } else if (/^-{1,2}[\w-]+/.test(token)) {
      cls = 'text-purple-400'
    } else if (/^["'].*["']$/.test(token)) {
      cls = 'text-yellow-300'
    }

    return (
      <span key={i} className={cls}>
        {token}
      </span>
    )
  })
}

// colors output lines:
// "✓event persisted → PostgreSQL"
// "·3 events · exit 0 · 0.18s"
const highlightOutput = (text: string): ReactNode => {
  const marker = text[0]

  let baseClass = 'text-white/50'

  if (marker === '✓') baseClass = 'text-green-accent'
  else if (marker === '✗') baseClass = 'text-red-400'
  else if (marker === '!') baseClass = 'text-yellow-400'
  else if (marker === '·') baseClass = 'text-white/40'

  const tokens = text.split(/(\s+|→|\.{2,})/)

  const nodes = tokens.map((token, i) => {
    if (token === '') return null
    if (/^\s+$/.test(token)) return token

    if (token === '→') {
      return (
        <span key={i} className="text-white/30">
          {token}
        </span>
      )
    }

    if (/^\.{2,}$/.test(token)) {
      return (
        <span key={i} className="text-white/20">
          {token}
        </span>
      )
    }

    if (/^["'].*["']$/.test(token)) {
      return (
        <span key={i} className="text-yellow-300">
          {token}
        </span>
      )
    }

    if (/^\/[\w-]+/.test(token)) {
      return (
        <span key={i} className="text-cyan-300">
          {token}
        </span>
      )
    }

    if (/^[\d.]+(ms|s|kb|mb|%)?$/i.test(token) || /^exit$/i.test(token)) {
      return (
        <span key={i} className="text-orange-400">
          {token}
        </span>
      )
    }

    return (
      <span key={i} className={baseClass}>
        {token}
      </span>
    )
  })

  return <span className={baseClass}>{nodes}</span>
}

const highlightLine = (rawLine: string): ReactNode => {
  if (rawLine.startsWith(`${TERMINAL_PROMPT} `)) {
    return (
      <>
        <span className="text-green-accent">{TERMINAL_PROMPT} </span>

        {highlightCommand(rawLine.slice(TERMINAL_PROMPT.length + 1))}
      </>
    )
  }

  if (rawLine === '') {
    return '\u00A0'
  }

  return highlightOutput(rawLine)
}

export const WorkFlowTerminal = ({
  workFlow,
  onPrevious,
  onNext,
}: {
  workFlow: WorkFlowEntry
  onPrevious: () => void
  onNext: () => void
}) => {
  const { terminalRuns: runs, defaultCommand } = workFlow

  const [executedRuns, setExecutedRuns] = useState<TerminalRun[]>(() => {
    const initial =
      runs.find((run) => run.command === defaultCommand) ?? runs[0]

    return initial ? [initial] : []
  })

  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  /*
   * Add a new terminal run.
   *
   * Important:
   * The command itself will render immediately.
   * Only run.lines will animate.
   */
  const appendRun = useCallback((run: TerminalRun) => {
    setExecutedRuns((previous) => [...previous, run])
  }, [])

  const submitCommand = useCallback(
    (rawInput: string) => {
      const trimmed = rawInput.trim()

      if (!trimmed) return

      const matchedRun = runs.find(
        (run) => run.command.toLowerCase() === trimmed.toLowerCase()
      )

      appendRun(
        matchedRun ?? {
          command: trimmed,
          lines: [`✗zsh: command not found: ${trimmed}`],
        }
      )
    },
    [runs, appendRun]
  )

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return

    submitCommand(inputValue)
    setInputValue('')
  }

  /*
   * Everything except the final run has already completed,
   * so those lines can render normally.
   */
  const settledLines = useMemo(() => {
    return executedRuns
      .slice(0, -1)
      .flatMap((run) => [`${TERMINAL_PROMPT} ${run.command}`, ...run.lines])
  }, [executedRuns])

  /*
   * The newest run is the active one.
   *
   * Its command renders instantly.
   * Only its output lines animate.
   */
  const activeRun = executedRuns[executedRuns.length - 1]

  const typingLines = useMemo(() => {
    if (!activeRun) return []

    return activeRun.lines
  }, [activeRun])

  /*
   * Reset the output animation whenever another
   * command/run becomes active.
   */
  useEffect(() => {
    setLineIndex(0)
    setCharIndex(0)
  }, [activeRun])

  /*
   * Terminal cursor blink.
   */
  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((value) => !value)
    }, 500)

    return () => clearInterval(blink)
  }, [])

  /*
   * Animate output.
   *
   * Faster than the previous version so it feels
   * more like command output than a typewriter.
   */
  useEffect(() => {
    if (!typingLines.length) return
    if (lineIndex >= typingLines.length) return

    const currentLine = typingLines[lineIndex]

    /*
     * Blank line:
     * move through it quickly.
     */
    if (currentLine === '') {
      const timeout = setTimeout(() => {
        setLineIndex((value) => value + 1)
        setCharIndex(0)
      }, 35)

      return () => clearTimeout(timeout)
    }

    /*
     * Reveal current output line character-by-character.
     */
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(
        () => {
          setCharIndex((value) => value + 1)
        },
        8 + Math.random() * 10
      )

      return () => clearTimeout(timeout)
    }

    /*
     * Small delay before the next output line.
     */
    const timeout = setTimeout(() => {
      setLineIndex((value) => value + 1)
      setCharIndex(0)
    }, 70)

    return () => clearTimeout(timeout)
  }, [lineIndex, charIndex, typingLines])

  /*
   * Keep terminal pinned to the latest output.
   */
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'auto',
    })
  }, [settledLines.length, executedRuns.length, lineIndex, charIndex])

  const isTypingDone = !activeRun || lineIndex >= typingLines.length

  /*
   * Resolve Code pill.
   */
  const codeAction = workFlow.githubUrl
    ? {
        text: 'Code',
        href: workFlow.githubUrl,
      }
    : workFlow.caseStudyUrl
      ? {
          text: 'Read write-up',
          href: workFlow.caseStudyUrl,
        }
      : workFlow.requestAccessEmail
        ? {
            text: 'Request access',
            href: `mailto:${workFlow.requestAccessEmail}?subject=${encodeURIComponent(
              `Repo access — ${workFlow.name}`
            )}`,
          }
        : {
            text: 'Private',
            disabled: true,
          }

  return (
    <div className="h-full border-t bg-black">
      {/* TERMINAL OUTPUT */}
      <div
        ref={scrollRef}
        className="h-[250px] space-y-1.5 overflow-auto p-5 font-mono text-xs leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Completed runs */}
        {settledLines.map((line, i) => (
          <div key={`settled-${i}`} className="flex gap-2">
            <span>{highlightLine(line)}</span>
          </div>
        ))}

        {/* Current command — appears instantly */}
        {activeRun && (
          <div
            key={`command-${activeRun.command}-${executedRuns.length}`}
            className="flex gap-2"
          >
            <span>
              {highlightLine(`${TERMINAL_PROMPT} ${activeRun.command}`)}
            </span>
          </div>
        )}

        {/* Finished animated output lines */}
        {typingLines.slice(0, lineIndex).map((line, i) => (
          <div key={`typed-${i}`} className="flex gap-2">
            <span>{highlightLine(line)}</span>
          </div>
        ))}

        {/* Current animated output line */}
        {activeRun && !isTypingDone && typingLines[lineIndex] !== undefined && (
          <div className="flex gap-2">
            <span>
              {highlightLine(typingLines[lineIndex].slice(0, charIndex))}

              <span
                style={{
                  opacity: showCursor ? 1 : 0,
                }}
                className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] bg-white/70"
              />
            </span>
          </div>
        )}

        {/* Idle cursor after output completes */}
        {isTypingDone && activeRun && (
          <div className="flex gap-2 text-white/70">
            <span
              style={{
                opacity: showCursor ? 1 : 0,
              }}
              className="inline-block h-3.5 w-[7px] translate-y-[2px] bg-white/70"
            />
          </div>
        )}
      </div>

      {/* COMMAND BAR */}
      <div className="flex flex-col border-t px-4 py-4 md:items-center md:gap-4 lg:flex-row lg:justify-between lg:py-0">
        <div className="flex flex-1 items-center gap-2">
          <ChevronRightIcon
            className="text-yellow-500"
            strokeWidth={2.5}
            size={20}
          />

          <input
            ref={inputRef}
            id="command-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="try: pathlens build"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            className="placeholder:text-secondary h-12 w-full font-mono text-xs outline-none"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-2">
          <WorkFlowPill onClick={onPrevious} text="Prev" highlight />

          <WorkFlowPill onClick={onNext} text="Next" highlight />

          {workFlow.liveUrl && (
            <WorkFlowPill href={workFlow.liveUrl} text="Live" highlight />
          )}

          <WorkFlowPill
            href={'href' in codeAction ? codeAction.href : undefined}
            disabled={'disabled' in codeAction}
            title={
              'disabled' in codeAction
                ? 'Source is private for this project'
                : undefined
            }
            text={codeAction.text}
            highlight
          />
        </div>
      </div>
    </div>
  )
}
