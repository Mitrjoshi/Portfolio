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
const HELP_COMMAND = 'help'

type TerminalRun = {
  command: string
  lines: string[]
}

type TerminalPhase = 'idle' | 'typing-command' | 'executing' | 'printing-output'

/* ============================================
   COMMAND HIGHLIGHTING
============================================ */

const highlightCommand = (text: string): ReactNode => {
  const tokens = text.split(/(\s+)/)

  let isFirstWord = true

  return tokens.map((token, index) => {
    if (!token) return null

    if (/^\s+$/.test(token)) {
      return token
    }

    let className = 'text-white/90'

    if (isFirstWord) {
      className = 'text-blue-400'
      isFirstWord = false
    } else if (/^-{1,2}[\w-]+/.test(token)) {
      className = 'text-purple-400'
    } else if (/^["'].*["']$/.test(token)) {
      className = 'text-yellow-300'
    }

    return (
      <span key={`${token}-${index}`} className={className}>
        {token}
      </span>
    )
  })
}

/* ============================================
   OUTPUT HIGHLIGHTING
============================================ */

const highlightOutput = (text: string): ReactNode => {
  if (!text) {
    return '\u00A0'
  }

  // zsh-style errors
  if (/^zsh:/i.test(text)) {
    return <span className="text-red-400">{text}</span>
  }

  // help headings
  if (text === 'Available commands:') {
    return <span className="font-medium text-white/90">{text}</span>
  }

  if (text === 'Type a command and press Enter to run it.') {
    return <span className="text-white/35">{text}</span>
  }

  if (text === 'Type "help" to see available commands.') {
    return (
      <span className="text-white/35">
        Type <span className="text-blue-400">"help"</span> to see available
        commands.
      </span>
    )
  }

  // help command rows
  if (text.startsWith('  ')) {
    return (
      <span>
        <span className="text-white/25">› </span>

        <span className="text-blue-400">{text.trim()}</span>
      </span>
    )
  }

  const marker = text[0]

  let baseClass = 'text-white/55'

  if (marker === '✓') {
    baseClass = 'text-green-accent'
  } else if (marker === '✗') {
    baseClass = 'text-red-400'
  } else if (marker === '!') {
    baseClass = 'text-yellow-400'
  } else if (marker === '·') {
    baseClass = 'text-white/40'
  }

  const tokens = text.split(/(\s+|→|\.{2,})/)

  return (
    <span className={baseClass}>
      {tokens.map((token, index) => {
        if (!token) return null

        if (/^\s+$/.test(token)) {
          return token
        }

        if (token === '→') {
          return (
            <span key={index} className="text-white/30">
              {token}
            </span>
          )
        }

        if (/^\.{2,}$/.test(token)) {
          return (
            <span key={index} className="text-white/20">
              {token}
            </span>
          )
        }

        if (/^["'].*["']$/.test(token)) {
          return (
            <span key={index} className="text-yellow-300">
              {token}
            </span>
          )
        }

        if (/^\/[\w-]+/.test(token)) {
          return (
            <span key={index} className="text-cyan-300">
              {token}
            </span>
          )
        }

        if (/^[\d.]+(ms|s|kb|mb|%)?$/i.test(token) || /^exit$/i.test(token)) {
          return (
            <span key={index} className="text-orange-400">
              {token}
            </span>
          )
        }

        return (
          <span key={index} className={baseClass}>
            {token}
          </span>
        )
      })}
    </span>
  )
}

/* ============================================
   ANIMATION TIMING
============================================ */

/**
 * Human-like command typing.
 *
 * Different characters receive slightly different
 * delays so it doesn't feel like a fixed typewriter.
 */
const getTypingDelay = (character: string) => {
  if (character === ' ') {
    return 70 + Math.random() * 45
  }

  if (/[-./]/.test(character)) {
    return 50 + Math.random() * 35
  }

  return 28 + Math.random() * 42
}

/**
 * Terminal output should appear as complete lines,
 * not character-by-character.
 */
const getOutputDelay = (line: string) => {
  if (!line) {
    return 30
  }

  if (line.includes('...')) {
    return 120 + Math.random() * 90
  }

  if (line.startsWith('✓') || line.startsWith('·')) {
    return 35 + Math.random() * 45
  }

  return 45 + Math.random() * 65
}

/* ============================================
   TERMINAL COMPONENT
============================================ */

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

  /* ============================================
     TERMINAL STATE
  ============================================ */

  const [history, setHistory] = useState<TerminalRun[]>([])

  const [activeRun, setActiveRun] = useState<TerminalRun | null>(null)

  const [phase, setPhase] = useState<TerminalPhase>('idle')

  const [typedCommand, setTypedCommand] = useState('')

  const [visibleLineCount, setVisibleLineCount] = useState(0)

  const [inputValue, setInputValue] = useState('')

  const [showAnimationCursor, setShowAnimationCursor] = useState(true)

  const scrollRef = useRef<HTMLDivElement>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  /* ============================================
     HELP COMMAND

     Automatically generates the command list from
     this project's terminalRuns.
  ============================================ */

  const helpRun = useMemo<TerminalRun>(() => {
    const commands = [
      HELP_COMMAND,
      ...runs
        .map((run) => run.command)
        .filter((command, index, array) => array.indexOf(command) === index),
    ]

    return {
      command: HELP_COMMAND,
      lines: [
        '',
        'Available commands:',
        '',
        ...commands.map((command) => `  ${command}`),
        '',
        'Type a command and press Enter to run it.',
        '',
      ],
    }
  }, [runs])

  /* ============================================
     RESET WHEN PROJECT CHANGES
  ============================================ */

  useEffect(() => {
    const initialRun =
      runs.find((run) => run.command === defaultCommand) ?? runs[0]

    setHistory([])
    setInputValue('')
    setTypedCommand('')
    setVisibleLineCount(0)

    if (!initialRun) {
      setActiveRun(null)
      setPhase('idle')
      return
    }

    /*
     * Automatically run the project's default
     * command with the typing animation.
     */
    setActiveRun(initialRun)
    setPhase('typing-command')
  }, [workFlow.name, defaultCommand, runs])

  /* ============================================
     CURSOR BLINK
  ============================================ */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setShowAnimationCursor((current) => !current)
    }, 530)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  /* ============================================
     AUTO TYPE COMMAND
  ============================================ */

  useEffect(() => {
    if (phase !== 'typing-command') {
      return
    }

    if (!activeRun) {
      return
    }

    /*
     * Continue typing command.
     */
    if (typedCommand.length < activeRun.command.length) {
      const nextCharacter = activeRun.command[typedCommand.length]

      const timeout = window.setTimeout(() => {
        setTypedCommand(activeRun.command.slice(0, typedCommand.length + 1))
      }, getTypingDelay(nextCharacter))

      return () => {
        window.clearTimeout(timeout)
      }
    }

    /*
     * Command finished.
     *
     * Simulate the tiny delay before
     * pressing Enter.
     */
    const enterTimeout = window.setTimeout(() => {
      setPhase('executing')
    }, 170)

    return () => {
      window.clearTimeout(enterTimeout)
    }
  }, [phase, activeRun, typedCommand])

  /* ============================================
     EXECUTION PAUSE
  ============================================ */

  useEffect(() => {
    if (phase !== 'executing') {
      return
    }

    if (!activeRun) {
      return
    }

    /*
     * Small delay between pressing Enter
     * and receiving process output.
     */
    const timeout = window.setTimeout(
      () => {
        setVisibleLineCount(0)
        setPhase('printing-output')
      },
      100 + Math.random() * 100
    )

    return () => {
      window.clearTimeout(timeout)
    }
  }, [phase, activeRun])

  /* ============================================
     STREAM OUTPUT
  ============================================ */

  useEffect(() => {
    if (phase !== 'printing-output') {
      return
    }

    if (!activeRun) {
      return
    }

    /*
     * Reveal one complete output line.
     */
    if (visibleLineCount < activeRun.lines.length) {
      const nextLine = activeRun.lines[visibleLineCount]

      const timeout = window.setTimeout(() => {
        setVisibleLineCount((current) => current + 1)
      }, getOutputDelay(nextLine))

      return () => {
        window.clearTimeout(timeout)
      }
    }

    /*
     * Command completed.
     *
     * Move the run into history and
     * return to the interactive prompt.
     */
    const finishTimeout = window.setTimeout(() => {
      setHistory((current) => [...current, activeRun])

      setActiveRun(null)
      setTypedCommand('')
      setVisibleLineCount(0)
      setPhase('idle')

      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    }, 120)

    return () => {
      window.clearTimeout(finishTimeout)
    }
  }, [phase, activeRun, visibleLineCount])

  /* ============================================
     AUTO SCROLL
  ============================================ */

  useEffect(() => {
    const terminal = scrollRef.current

    if (!terminal) {
      return
    }

    terminal.scrollTo({
      top: terminal.scrollHeight,
      behavior: 'auto',
    })
  }, [
    history.length,
    activeRun,
    typedCommand,
    visibleLineCount,
    inputValue,
    phase,
  ])

  /* ============================================
     SUBMIT COMMAND
  ============================================ */

  const submitCommand = useCallback(
    (rawInput: string) => {
      const command = rawInput.trim()

      if (!command) {
        return
      }

      if (phase !== 'idle') {
        return
      }

      const normalizedCommand = command.toLowerCase()

      let nextRun: TerminalRun

      /* --------------------------
         BUILT-IN HELP
      -------------------------- */

      if (normalizedCommand === HELP_COMMAND) {
        nextRun = helpRun
      } else {
        /* --------------------------
           PROJECT COMMAND
        -------------------------- */

        const matchedRun = runs.find(
          (run) => run.command.toLowerCase() === normalizedCommand
        )

        /* --------------------------
           INVALID COMMAND
        -------------------------- */

        nextRun = matchedRun ?? {
          command,
          lines: [
            `zsh: command not found: ${command}`,
            'Type "help" to see available commands.',
          ],
        }
      }

      /*
       * The user has already manually typed
       * this command, so we don't replay the
       * command typing animation.
       */
      setInputValue('')

      setTypedCommand(nextRun.command)

      setVisibleLineCount(0)

      setActiveRun(nextRun)

      setPhase('executing')
    },
    [phase, runs, helpRun]
  )

  /* ============================================
     INPUT KEYBOARD
  ============================================ */

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return
    }

    submitCommand(inputValue)
  }

  /* ============================================
     CODE ACTION
  ============================================ */

  const codeAction = useMemo(() => {
    if (workFlow.githubUrl) {
      return {
        text: 'Code',
        href: workFlow.githubUrl,
      }
    }

    if (workFlow.caseStudyUrl) {
      return {
        text: 'Read write-up',
        href: workFlow.caseStudyUrl,
      }
    }

    if (workFlow.requestAccessEmail) {
      return {
        text: 'Request access',

        href: `mailto:${workFlow.requestAccessEmail}?subject=${encodeURIComponent(
          `Repo access — ${workFlow.name}`
        )}`,
      }
    }

    return {
      text: 'Private',
      disabled: true,
    }
  }, [workFlow])

  /* ============================================
     RENDER
  ============================================ */

  return (
    <div className="h-full overflow-hidden border-t bg-black">
      {/* =====================================
          MAC TERMINAL TITLE BAR
      ====================================== */}

      <div className="relative flex h-10 items-center border-b border-white/10 bg-white/[0.035] px-4">
        {/* macOS traffic lights */}

        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />

          <span className="size-3 rounded-full bg-[#febc2e]" />

          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>

        {/* terminal title */}

        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 font-mono text-[11px] text-white/35">
          {workFlow.name} — zsh
        </div>
      </div>

      {/* =====================================
          TERMINAL BODY
      ====================================== */}

      <div
        ref={scrollRef}
        className="h-[250px] cursor-text overflow-auto p-5 font-mono text-xs leading-[1.7]"
        onClick={() => {
          if (phase === 'idle') {
            inputRef.current?.focus()
          }
        }}
      >
        {/* =================================
            COMPLETED HISTORY
        ================================== */}

        {history.map((run, runIndex) => (
          <div key={`${run.command}-${runIndex}`} className="mb-1">
            {/* command */}

            <div className="break-words whitespace-pre-wrap">
              <span className="text-green-accent">{TERMINAL_PROMPT} </span>

              {highlightCommand(run.command)}
            </div>

            {/* output */}

            {run.lines.map((line, lineIndex) => (
              <div
                key={`${runIndex}-${lineIndex}`}
                className="break-words whitespace-pre-wrap"
              >
                {highlightOutput(line)}
              </div>
            ))}
          </div>
        ))}

        {/* =================================
            ACTIVE COMMAND
        ================================== */}

        {activeRun && (
          <div>
            {/* command */}

            <div className="break-words whitespace-pre-wrap">
              <span className="text-green-accent">{TERMINAL_PROMPT} </span>

              {highlightCommand(typedCommand)}

              {/* animated block cursor */}

              {phase === 'typing-command' && (
                <span
                  className="ml-[1px] inline-block h-[14px] w-[7px] translate-y-[2px] bg-white/75"
                  style={{
                    opacity: showAnimationCursor ? 1 : 0,
                  }}
                />
              )}
            </div>

            {/* waiting for process */}

            {phase === 'executing' && (
              <div>
                <span
                  className="inline-block h-[14px] w-[7px] translate-y-[2px] bg-white/60"
                  style={{
                    opacity: showAnimationCursor ? 1 : 0,
                  }}
                />
              </div>
            )}

            {/* streaming output */}

            {phase === 'printing-output' &&
              activeRun.lines
                .slice(0, visibleLineCount)
                .map((line, lineIndex) => (
                  <div
                    key={`${activeRun.command}-${lineIndex}`}
                    className="break-words whitespace-pre-wrap"
                  >
                    {highlightOutput(line)}
                  </div>
                ))}
          </div>
        )}

        {/* =================================
            INTERACTIVE PROMPT
        ================================== */}

        {phase === 'idle' && (
          <div className="flex min-w-0 items-center">
            <span className="text-green-accent shrink-0">
              {TERMINAL_PROMPT}
              &nbsp;
            </span>

            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleInputKeyDown}
              aria-label="Terminal command"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              className="min-w-0 flex-1 border-0 bg-transparent p-0 font-mono text-xs text-white/90 caret-white outline-none"
            />
          </div>
        )}
      </div>

      {/* =====================================
          FOOTER ACTIONS
      ====================================== */}

      <div className="flex flex-wrap items-center justify-end gap-2 border-t border-white/10 px-4 py-4">
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
  )
}
