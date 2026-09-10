import { useEffect, useRef, useState } from 'react'

type CircuitItemType =
  | 'capsule'
  | 'chip'
  | 'node'
  | 'lamp'
  | 'coil'
  | 'resistor'
  | 'capacitor'
  | 'diode'
  | 'transistor'
  | 'via'
  | 'test-point'
  | 'terminal'
  | 'ic'
  | 'jumper'

type ToolCircuitProps = {
  tools: string[]
  activeIndex: number
  onActiveIndexChange?: (index: number) => void
}

type ToolLayout = {
  index: number
  centerX: number
  width: number
  height: number
  y: number
}

const DEFAULT_VIEWBOX_WIDTH = 1440
const VIEWBOX_HEIGHT = 180

const TRACK_WIDTH = 2520

const BASELINE_Y = 130

const STEP_DURATION = 1700

const HIGHLIGHT_DELAY = STEP_DURATION * 0.78

// Tool boxes end here.
// Their heights only grow upward.
const TOOL_BOTTOM_Y = BASELINE_Y - 5

const TOOL_MIN_HEIGHT = 42
const TOOL_MAX_HEIGHT = 68

// No decoration is allowed inside this horizontal area
// around a ToolNode.
const TOOL_CLEARANCE = 20

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 9283.17) * 43758.5453
  return value - Math.floor(value)
}

const normalizeTrackX = (x: number) => {
  return ((x % TRACK_WIDTH) + TRACK_WIDTH) % TRACK_WIDTH
}

const getToolWidth = (tool: string) => {
  return Math.max(108, Math.min(142, 66 + tool.length * 7))
}

export const ToolCircuit = ({
  tools,
  activeIndex,
  onActiveIndexChange,
}: ToolCircuitProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const activeIndexRef = useRef(activeIndex)

  const [highlightIndex, setHighlightIndex] = useState(activeIndex)

  const [viewportWidth, setViewportWidth] = useState(DEFAULT_VIEWBOX_WIDTH)

  const loopDuration = tools.length * STEP_DURATION

  /*
   * Measure the real rendered container width.
   *
   * Desktop:
   * 1440px container → ~1440 SVG units
   *
   * Mobile:
   * 390px container → ~390 SVG units
   *
   * This means the visible circuit density and robot
   * alignment stay consistent across screen sizes.
   */
  useEffect(() => {
    const element = containerRef.current

    if (!element) return

    const updateWidth = () => {
      const width = element.getBoundingClientRect().width

      if (width > 0) {
        setViewportWidth(width)
      }
    }

    updateWidth()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateWidth)

      return () => {
        window.removeEventListener('resize', updateWidth)
      }
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]

      if (!entry) return

      const width = entry.contentRect.width

      if (width > 0) {
        setViewportWidth(width)
      }
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  /*
   * Same visual position as left-[20%],
   * but now expressed in SVG coordinates.
   *
   * Minimum keeps the robot from touching the edge
   * on very narrow devices.
   */
  const robotX = Math.max(58, viewportWidth * 0.2)

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  /*
   * Highlight + Daily Kit update from one timer.
   */
  useEffect(() => {
    if (!tools.length) return

    let intervalId: number | undefined

    const activateNextTool = () => {
      const nextIndex = (activeIndexRef.current + 1) % tools.length

      activeIndexRef.current = nextIndex

      setHighlightIndex(nextIndex)

      onActiveIndexChange?.(nextIndex)
    }

    const timeoutId = window.setTimeout(() => {
      activateNextTool()

      intervalId = window.setInterval(activateNextTool, STEP_DURATION)
    }, HIGHLIGHT_DELAY)

    return () => {
      window.clearTimeout(timeoutId)

      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
      }
    }
  }, [tools.length, onActiveIndexChange])

  return (
    <div ref={containerRef} className="relative h-45 w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${viewportWidth} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="xMinYMid meet"
        className="block h-full w-full"
      >
        {/* <defs>
          <pattern
            id="circuit-grid"
            width="100"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0 H100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.075"
            />
          </pattern>

          <filter
            id="circuit-glow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />

              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs> */}

        {/* STATIC GRID */}

        <rect
          width={viewportWidth}
          height={VIEWBOX_HEIGHT}
          fill="url(#circuit-grid)"
          className="text-secondary"
        />

        {/* =====================================================
            MOVING CIRCUIT
        ===================================================== */}

        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to={`-${TRACK_WIDTH} 0`}
            dur={`${loopDuration}ms`}
            repeatCount="indefinite"
          />

          <CircuitScene
            offset={0}
            tools={tools}
            highlightIndex={highlightIndex}
            robotX={robotX}
          />

          <CircuitScene
            offset={TRACK_WIDTH}
            tools={tools}
            highlightIndex={highlightIndex}
            robotX={robotX}
          />

          {/* Extra copy for very wide screens */}

          <CircuitScene
            offset={TRACK_WIDTH * 2}
            tools={tools}
            highlightIndex={highlightIndex}
            robotX={robotX}
          />
        </g>

        {/* =====================================================
            FIXED ROBOT

            Important:
            This is OUTSIDE the animated group.

            Robot and circuit now share the same coordinate
            system, so mobile alignment cannot drift.
        ===================================================== */}

        <g
          transform={`translate(${robotX} ${BASELINE_Y - 3})`}
          className="text-secondary"
        >
          <WalkingRobot />
        </g>
      </svg>
    </div>
  )
}

const CircuitScene = ({
  offset,
  tools,
  highlightIndex,
  robotX,
}: {
  offset: number
  tools: string[]
  highlightIndex: number
  robotX: number
}) => {
  if (!tools.length) return null

  const spacing = TRACK_WIDTH / tools.length

  /*
   * Tool geometry is calculated once and then reused
   * by decorations/routes to avoid overlaps.
   */
  const layouts: ToolLayout[] = tools.map((tool, index) => {
    const random = seededRandom(index * 73 + 19)

    const height =
      TOOL_MIN_HEIGHT + random * (TOOL_MAX_HEIGHT - TOOL_MIN_HEIGHT)

    return {
      index,

      centerX: normalizeTrackX(robotX + index * spacing),

      width: getToolWidth(tool),

      height,

      // Bottom always stays aligned.
      y: TOOL_BOTTOM_Y - height,
    }
  })

  /*
   * Find free space between two ToolNodes.
   *
   * Decorations can only exist inside this area.
   */
  const getSafeGap = (index: number) => {
    const current = layouts[index]

    const next = layouts[(index + 1) % layouts.length]

    let currentCenter = current.centerX

    let nextCenter = next.centerX

    if (nextCenter <= currentCenter) {
      nextCenter += TRACK_WIDTH
    }

    const start = currentCenter + current.width / 2 + TOOL_CLEARANCE

    const end = nextCenter - next.width / 2 - TOOL_CLEARANCE

    return {
      start,
      end,

      width: Math.max(0, end - start),
    }
  }

  return (
    <g transform={`translate(${offset} 0)`}>
      {/* =====================================================
          MAIN RAIL
      ===================================================== */}

      <path
        d={`M0 ${BASELINE_Y} H${TRACK_WIDTH}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-primary"
      />

      <path
        d={`M0 ${BASELINE_Y - 4} H${TRACK_WIDTH}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.12"
        className="text-secondary"
      />

      {/* =====================================================
          CIRCUIT DECORATIONS
      ===================================================== */}

      {tools.flatMap((_, index) => {
        const gap = getSafeGap(index)

        if (gap.width < 55) {
          return []
        }

        const positions = [0.09, 0.35, 0.63, 0.9]

        const itemPools: CircuitItemType[][] = [
          ['resistor', 'capacitor', 'diode', 'capsule'],

          ['chip', 'ic', 'transistor', 'node'],

          ['via', 'test-point', 'terminal', 'lamp'],

          ['coil', 'jumper', 'capacitor', 'resistor'],
        ]

        return positions.map((ratio, itemIndex) => {
          const seed = index * 41 + itemIndex * 13

          const pool = itemPools[itemIndex]

          const type = pool[Math.floor(seededRandom(seed) * pool.length)]

          const rawX = gap.start + gap.width * ratio

          const x = normalizeTrackX(rawX)

          return (
            <CircuitDecoration
              key={`circuit-${index}-${itemIndex}`}
              x={x}
              type={type}
              seed={seed}
            />
          )
        })
      })}

      {/* =====================================================
          UPPER PCB ROUTES
      ===================================================== */}

      {tools.map((_, index) => {
        if (index % 2 !== 0) {
          return null
        }

        const gap = getSafeGap(index)

        if (gap.width < 70) {
          return null
        }

        const startRaw = gap.start + gap.width * 0.1

        const endRaw = gap.start + gap.width * 0.48

        const startX = normalizeTrackX(startRaw)

        const endX = normalizeTrackX(endRaw)

        if (endX < startX) {
          return null
        }

        const topY = 82 + seededRandom(index + 8) * 13

        return (
          <path
            key={`route-${index}`}
            d={`
                M ${startX} ${BASELINE_Y}
                V ${topY + 12}
                L ${startX + 16} ${topY}
                H ${endX}
              `}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.22"
            strokeWidth="1"
            className="text-secondary"
          />
        )
      })}

      {/* =====================================================
          SMALL TRACES
      ===================================================== */}

      {tools.map((_, index) => {
        if (index % 3 !== 1) {
          return null
        }

        const gap = getSafeGap(index)

        if (gap.width < 65) {
          return null
        }

        const startRaw = gap.start + gap.width * 0.14

        const endRaw = gap.start + gap.width * 0.43

        const x = normalizeTrackX(startRaw)

        const endX = normalizeTrackX(endRaw)

        if (endX < x) {
          return null
        }

        const topY = 101 + seededRandom(index + 44) * 8

        return (
          <g key={`trace-${index}`} className="text-secondary">
            <path
              d={`
                  M ${x} ${BASELINE_Y}
                  V ${topY}
                  H ${endX}
                `}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.16"
            />

            <circle
              cx={endX}
              cy={topY}
              r="1.8"
              fill="var(--background)"
              stroke="currentColor"
              strokeOpacity="0.35"
            />
          </g>
        )
      })}

      {/* =====================================================
          TECHNICAL LABELS
      ===================================================== */}

      {tools.map((_, index) => {
        const gap = getSafeGap(index)

        if (gap.width < 40) {
          return null
        }

        const labels = ['C4', 'R1', 'U2', 'D7', 'TX', 'R12', 'X1', 'Q5', 'IO']

        const x = normalizeTrackX(gap.start + gap.width * 0.5)

        return (
          <text
            key={`label-${index}`}
            x={x}
            y={BASELINE_Y - 7}
            fontSize="6"
            letterSpacing="1"
            fill="currentColor"
            opacity="0.22"
            className="text-secondary"
          >
            {labels[index % labels.length]}
          </text>
        )
      })}

      {/* =====================================================
          TOOL NODES

          Render last so nothing overlays the nodes.
      ===================================================== */}

      {tools.map((tool, index) => {
        const layout = layouts[index]

        return (
          <ToolNode
            key={`${tool}-${index}`}
            x={layout.centerX - layout.width / 2}
            y={layout.y}
            width={layout.width}
            height={layout.height}
            label={tool}
            active={index === highlightIndex}
          />
        )
      })}
    </g>
  )
}

const ToolNode = ({
  x,
  y,
  width,
  height,
  label,
  active,
}: {
  x: number
  y: number
  width: number
  height: number
  label: string
  active: boolean
}) => {
  const innerHeight = 26

  const innerY = y + (height - innerHeight) / 2 + 3

  const labelY = innerY + innerHeight / 2 + 1

  return (
    <g>
      {/* OUTER HOUSING */}

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="4"
        fill="var(--primary)"
        stroke="currentColor"
        strokeWidth={active ? 1.4 : 1}
        strokeOpacity={active ? 0.5 : 0.3}
        className={`${
          active
            ? 'text-foreground fill-primary/10'
            : 'text-secondary fill-primary/5'
        } duration-200`}
      />

      {/* STATUS LIGHT */}

      <circle
        cx={x + 10}
        cy={y + 9}
        r="2.3"
        fill="currentColor"
        opacity={active ? 1 : 0.5}
        filter={active ? 'url(#circuit-glow)' : undefined}
        className={active ? 'text-primary' : 'text-secondary'}
      >
        {active && (
          <animate
            attributeName="opacity"
            values="0.55;1;0.55"
            dur="0.8s"
            repeatCount="indefinite"
          />
        )}
      </circle>

      {/* TOP DETAIL */}

      <line
        x1={x + 20}
        y1={y + 9}
        x2={x + width - 9}
        y2={y + 9}
        stroke="currentColor"
        strokeOpacity={active ? 0.18 : 0.08}
        className={`${
          active ? 'text-foreground' : 'text-secondary'
        } duration-200`}
      />

      {/* INNER DISPLAY */}

      <rect
        x={x + 13}
        y={innerY}
        width={width - 26}
        height={innerHeight}
        rx="2"
        fill="var(--background)"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity={active ? 0.5 : 0.3}
        className={`${
          active
            ? 'text-foreground fill-primary/10'
            : 'text-secondary fill-primary/5'
        } duration-200`}
      />

      {/* TOOL NAME */}

      <text
        x={x + width / 2}
        y={labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={11}
        letterSpacing="0.3"
        fill="currentColor"
        opacity={active ? 1 : 0.8}
        className={`${
          active ? 'text-foreground' : 'text-secondary'
        } duration-200`}
      >
        {label}
      </text>

      {/* CONNECTOR PINS */}

      {Array.from({
        length: 6,
      }).map((_, index) => {
        const padding = 14

        const usableWidth = width - padding * 2

        const pinX = x + padding + (usableWidth / 5) * index

        return (
          <line
            key={`pin-${index}`}
            x1={pinX}
            y1={y + height}
            x2={pinX}
            y2={BASELINE_Y - 2}
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity={active ? 0.5 : 0.35}
            className="text-secondary"
          />
        )
      })}
    </g>
  )
}

const CircuitDecoration = ({
  x,
  type,
  seed,
}: {
  x: number
  type: CircuitItemType
  seed: number
}) => {
  if (type === 'capsule') {
    return (
      <g className="text-secondary">
        <line
          x1={x}
          y1={BASELINE_Y}
          x2={x}
          y2={BASELINE_Y - 4}
          stroke="currentColor"
          strokeOpacity="0.24"
        />

        <rect
          x={x - 10}
          y={BASELINE_Y - 12}
          width="20"
          height="8"
          rx="4"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.35"
        />

        <line
          x1={x - 6}
          y1={BASELINE_Y - 8}
          x2={x + 6}
          y2={BASELINE_Y - 8}
          stroke="currentColor"
          strokeOpacity="0.18"
        />
      </g>
    )
  }

  if (type === 'chip') {
    return (
      <g className="text-secondary">
        <line
          x1={x}
          y1={BASELINE_Y}
          x2={x}
          y2={BASELINE_Y - 4}
          stroke="currentColor"
          strokeOpacity="0.22"
        />

        <rect
          x={x - 10}
          y={BASELINE_Y - 16}
          width="20"
          height="12"
          rx="1.5"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.42"
        />

        {[-6, -2, 2, 6].map((pin) => (
          <line
            key={pin}
            x1={x + pin}
            y1={BASELINE_Y - 20}
            x2={x + pin}
            y2={BASELINE_Y - 16}
            stroke="currentColor"
            strokeOpacity="0.3"
          />
        ))}

        <circle
          cx={x - 5}
          cy={BASELINE_Y - 11}
          r="1"
          fill="currentColor"
          opacity="0.3"
        />
      </g>
    )
  }

  if (type === 'ic') {
    return (
      <g className="text-secondary">
        <path
          d={`
            M ${x} ${BASELINE_Y}
            V ${BASELINE_Y - 5}
          `}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.24"
        />

        <rect
          x={x - 13}
          y={BASELINE_Y - 22}
          width="26"
          height="17"
          rx="2"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.42"
        />

        {[-8, -3, 2, 7].map((pin) => (
          <g key={pin}>
            <line
              x1={x + pin}
              y1={BASELINE_Y - 26}
              x2={x + pin}
              y2={BASELINE_Y - 22}
              stroke="currentColor"
              strokeOpacity="0.3"
            />

            <line
              x1={x + pin}
              y1={BASELINE_Y - 5}
              x2={x + pin}
              y2={BASELINE_Y - 2}
              stroke="currentColor"
              strokeOpacity="0.3"
            />
          </g>
        ))}

        <path
          d={`
            M ${x - 3} ${BASELINE_Y - 22}
            a 3 3 0 0 0 6 0
          `}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.25"
        />
      </g>
    )
  }

  if (type === 'node') {
    return (
      <g className="text-secondary">
        <line
          x1={x}
          y1={BASELINE_Y}
          x2={x}
          y2={BASELINE_Y - 4}
          stroke="currentColor"
          strokeOpacity="0.3"
        />

        <circle
          cx={x}
          cy={BASELINE_Y - 8}
          r="3.5"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.46"
        />

        <circle
          cx={x}
          cy={BASELINE_Y - 8}
          r="1"
          fill="currentColor"
          opacity="0.3"
        />
      </g>
    )
  }

  if (type === 'via') {
    return (
      <g className="text-secondary">
        <circle
          cx={x}
          cy={BASELINE_Y - 5}
          r="4"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.5"
        />

        <circle
          cx={x}
          cy={BASELINE_Y - 5}
          r="1.4"
          fill="currentColor"
          opacity="0.45"
        />

        <line
          x1={x}
          y1={BASELINE_Y - 1}
          x2={x}
          y2={BASELINE_Y}
          stroke="currentColor"
          strokeOpacity="0.3"
        />
      </g>
    )
  }

  if (type === 'test-point') {
    return (
      <g className="text-secondary">
        <path
          d={`
            M ${x} ${BASELINE_Y}
            V ${BASELINE_Y - 18}
          `}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.32"
        />

        <circle
          cx={x}
          cy={BASELINE_Y - 21}
          r="3"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.55"
        />

        <circle
          cx={x}
          cy={BASELINE_Y - 21}
          r="1"
          fill="currentColor"
          opacity="0.4"
        />
      </g>
    )
  }

  if (type === 'lamp') {
    const lampY = BASELINE_Y - 42

    return (
      <g className="text-secondary">
        <path
          d={`
            M ${x} ${BASELINE_Y}
            V ${lampY + 8}
          `}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
        />

        <circle
          cx={x}
          cy={lampY}
          r="3"
          fill="currentColor"
          className="text-primary"
          filter="url(#circuit-glow)"
        >
          <animate
            attributeName="opacity"
            values="0.45;1;0.45"
            dur={`${1.2 + seededRandom(seed) * 1.4}s`}
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx={x}
          cy={lampY}
          r="7"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.1"
          className="text-primary"
        />
      </g>
    )
  }

  if (type === 'resistor') {
    const y = BASELINE_Y - 9

    return (
      <g className="text-secondary">
        <line
          x1={x - 16}
          y1={y}
          x2={x - 9}
          y2={y}
          stroke="currentColor"
          strokeOpacity="0.35"
        />

        <rect
          x={x - 9}
          y={y - 4}
          width="18"
          height="8"
          rx="2"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.45"
        />

        <line
          x1={x + 9}
          y1={y}
          x2={x + 16}
          y2={y}
          stroke="currentColor"
          strokeOpacity="0.35"
        />

        {[-4, 0, 4].map((bar) => (
          <line
            key={bar}
            x1={x + bar}
            y1={y - 3}
            x2={x + bar}
            y2={y + 3}
            stroke="currentColor"
            strokeOpacity="0.22"
          />
        ))}

        <path
          d={`
            M ${x + 16} ${y}
            V ${BASELINE_Y}
          `}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
        />
      </g>
    )
  }

  if (type === 'capacitor') {
    const y = BASELINE_Y - 13

    return (
      <g className="text-secondary">
        <line
          x1={x}
          y1={BASELINE_Y}
          x2={x}
          y2={y + 5}
          stroke="currentColor"
          strokeOpacity="0.3"
        />

        <line
          x1={x - 7}
          y1={y + 2}
          x2={x + 7}
          y2={y + 2}
          stroke="currentColor"
          strokeOpacity="0.5"
        />

        <line
          x1={x - 7}
          y1={y - 2}
          x2={x + 7}
          y2={y - 2}
          stroke="currentColor"
          strokeOpacity="0.5"
        />

        <line
          x1={x}
          y1={y - 2}
          x2={x}
          y2={y - 10}
          stroke="currentColor"
          strokeOpacity="0.25"
        />
      </g>
    )
  }

  if (type === 'diode') {
    const y = BASELINE_Y - 10

    return (
      <g className="text-secondary">
        <line
          x1={x - 15}
          y1={y}
          x2={x - 7}
          y2={y}
          stroke="currentColor"
          strokeOpacity="0.35"
        />

        <path
          d={`
            M ${x - 7} ${y - 6}
            L ${x + 4} ${y}
            L ${x - 7} ${y + 6}
            Z
          `}
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.45"
        />

        <line
          x1={x + 5}
          y1={y - 7}
          x2={x + 5}
          y2={y + 7}
          stroke="currentColor"
          strokeOpacity="0.5"
        />

        <line
          x1={x + 5}
          y1={y}
          x2={x + 15}
          y2={y}
          stroke="currentColor"
          strokeOpacity="0.35"
        />

        <line
          x1={x + 15}
          y1={y}
          x2={x + 15}
          y2={BASELINE_Y}
          stroke="currentColor"
          strokeOpacity="0.22"
        />
      </g>
    )
  }

  if (type === 'transistor') {
    const cy = BASELINE_Y - 17

    return (
      <g className="text-secondary">
        <circle
          cx={x}
          cy={cy}
          r="8"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.4"
        />

        <line
          x1={x - 4}
          y1={cy - 5}
          x2={x - 4}
          y2={cy + 5}
          stroke="currentColor"
          strokeOpacity="0.42"
        />

        <line
          x1={x - 4}
          y1={cy}
          x2={x - 12}
          y2={cy}
          stroke="currentColor"
          strokeOpacity="0.35"
        />

        <line
          x1={x - 4}
          y1={cy - 3}
          x2={x + 7}
          y2={cy - 10}
          stroke="currentColor"
          strokeOpacity="0.38"
        />

        <line
          x1={x - 4}
          y1={cy + 3}
          x2={x + 7}
          y2={cy + 10}
          stroke="currentColor"
          strokeOpacity="0.38"
        />

        <line
          x1={x + 7}
          y1={cy + 10}
          x2={x + 7}
          y2={BASELINE_Y}
          stroke="currentColor"
          strokeOpacity="0.22"
        />
      </g>
    )
  }

  if (type === 'terminal') {
    return (
      <g className="text-secondary">
        <path
          d={`
            M ${x} ${BASELINE_Y}
            V ${BASELINE_Y - 19}
            H ${x + 9}
          `}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
        />

        <circle
          cx={x + 12}
          cy={BASELINE_Y - 19}
          r="3"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.5"
        />

        <circle
          cx={x + 12}
          cy={BASELINE_Y - 19}
          r="1"
          fill="currentColor"
          opacity="0.35"
        />
      </g>
    )
  }

  if (type === 'jumper') {
    return (
      <g className="text-secondary">
        <path
          d={`
            M ${x - 16} ${BASELINE_Y}
            V ${BASELINE_Y - 10}
            C ${x - 10} ${BASELINE_Y - 24},
              ${x + 10} ${BASELINE_Y - 24},
              ${x + 16} ${BASELINE_Y - 10}
            V ${BASELINE_Y}
          `}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.38"
        />

        <circle
          cx={x - 16}
          cy={BASELINE_Y}
          r="2"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.45"
        />

        <circle
          cx={x + 16}
          cy={BASELINE_Y}
          r="2"
          fill="var(--background)"
          stroke="currentColor"
          strokeOpacity="0.45"
        />
      </g>
    )
  }

  // COIL

  return (
    <g className="text-primary">
      <path
        d={`
          M ${x - 17} ${BASELINE_Y}
          H ${x - 13}
          q 3 -8 6 0
          q 3 8 6 0
          q 3 -8 6 0
          q 3 8 6 0
          H ${x + 17}
        `}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.65"
      />
    </g>
  )
}

const WalkingRobot = () => {
  return (
    <g className="robot">
      {/* SHADOW */}

      <ellipse
        cx="1"
        cy="1.5"
        rx="13"
        ry="2.4"
        fill="currentColor"
        opacity="0.12"
      />

      {/* BODY BOUNCE */}

      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -1.5;0 0"
          dur="0.4s"
          repeatCount="indefinite"
        />

        {/* BACK LEG */}

        <g transform="translate(1.5 -26)">
          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            values="-18 0 0;18 0 0;-18 0 0"
            dur="0.8s"
            repeatCount="indefinite"
          />

          <rect
            x="-3.2"
            y="0"
            width="6.4"
            height="11"
            rx="2"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.4"
          />

          <circle
            cx="0"
            cy="11.5"
            r="2.8"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.2"
          />

          <g transform="translate(0 12)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="12 0 0;-12 0 0;12 0 0"
                dur="0.8s"
                repeatCount="indefinite"
              />

              <rect
                x="-2.8"
                y="0"
                width="5.6"
                height="10"
                rx="2"
                fill="var(--background)"
                stroke="currentColor"
                strokeWidth="1.3"
              />

              <rect
                x="-4.6"
                y="9.4"
                width="9.6"
                height="4"
                rx="1.2"
                fill="currentColor"
                opacity="0.35"
              />
            </g>
          </g>
        </g>

        {/* BACK ARM */}

        <g transform="translate(1.2 -44)">
          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            values="24 0 0;-24 0 0;24 0 0"
            dur="0.8s"
            repeatCount="indefinite"
          />

          <rect
            x="-2.6"
            y="0"
            width="5.2"
            height="9"
            rx="2"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.3"
          />

          <circle
            cx="0"
            cy="9.4"
            r="2.4"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.2"
          />

          <g transform="translate(0 10)">
            <rect
              x="-2.4"
              y="0"
              width="4.8"
              height="8"
              rx="2"
              fill="var(--background)"
              stroke="currentColor"
              strokeWidth="1.2"
            />

            <rect
              x="-3"
              y="7.4"
              width="6"
              height="4.4"
              rx="1.6"
              fill="currentColor"
              opacity="0.35"
            />
          </g>
        </g>

        {/* BODY */}

        <rect
          x="-8"
          y="-46"
          width="18.5"
          height="21"
          rx="4"
          fill="var(--background)"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <rect
          x="-4.6"
          y="-41"
          width="11.5"
          height="1.8"
          rx=".9"
          fill="currentColor"
          opacity="0.22"
        />

        <rect
          x="-4.6"
          y="-37.4"
          width="11.5"
          height="1.8"
          rx=".9"
          fill="currentColor"
          opacity="0.22"
        />

        <circle cx="1.2" cy="-31" r="3.4" fill="currentColor" opacity="0.4" />

        {/* FRONT LEG */}

        <g transform="translate(1.5 -26)">
          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            values="18 0 0;-18 0 0;18 0 0"
            dur="0.8s"
            repeatCount="indefinite"
          />

          <rect
            x="-3.2"
            y="0"
            width="6.4"
            height="11"
            rx="2"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.4"
          />

          <circle
            cx="0"
            cy="11.5"
            r="2.8"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.2"
          />

          <g transform="translate(0 12)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-12 0 0;12 0 0;-12 0 0"
                dur="0.8s"
                repeatCount="indefinite"
              />

              <rect
                x="-2.8"
                y="0"
                width="5.6"
                height="10"
                rx="2"
                fill="var(--background)"
                stroke="currentColor"
                strokeWidth="1.3"
              />

              <rect
                x="-4.6"
                y="9.4"
                width="9.6"
                height="4"
                rx="1.2"
                fill="currentColor"
                opacity="0.35"
              />
            </g>
          </g>
        </g>

        {/* FRONT ARM */}

        <g transform="translate(1.2 -44)">
          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            values="-24 0 0;24 0 0;-24 0 0"
            dur="0.8s"
            repeatCount="indefinite"
          />

          <rect
            x="-2.6"
            y="0"
            width="5.2"
            height="9"
            rx="2"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.3"
          />

          <circle
            cx="0"
            cy="9.4"
            r="2.4"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="1.2"
          />

          <g transform="translate(0 10)">
            <rect
              x="-2.4"
              y="0"
              width="4.8"
              height="8"
              rx="2"
              fill="var(--background)"
              stroke="currentColor"
              strokeWidth="1.2"
            />

            <rect
              x="-3"
              y="7.4"
              width="6"
              height="4.4"
              rx="1.6"
              fill="currentColor"
              opacity="0.35"
            />
          </g>
        </g>

        {/* NECK */}

        <rect
          x="-1"
          y="-50"
          width="4.6"
          height="4.6"
          fill="currentColor"
          opacity="0.3"
        />

        {/* HEAD */}

        <rect
          x="-7.5"
          y="-63"
          width="18"
          height="13.5"
          rx="4"
          fill="var(--background)"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* VISOR */}

        <rect
          x="-3.4"
          y="-59.6"
          width="12"
          height="5.6"
          rx="2.4"
          fill="currentColor"
          opacity="0.18"
        />

        {/* EYE */}

        <circle
          cx="4.5"
          cy="-56.8"
          r="1.4"
          fill="currentColor"
          className="text-primary"
        />

        {/* ANTENNA */}

        <path d="M6.5 -63 v-7" stroke="currentColor" strokeWidth="1.2" />

        <circle
          cx="6.5"
          cy="-71.5"
          r="2.4"
          fill="currentColor"
          className="text-primary"
        >
          <animate
            attributeName="opacity"
            values="0.35;1;0.35"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </g>
  )
}
