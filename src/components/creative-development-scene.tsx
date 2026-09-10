import type { ReactNode } from 'react'

export const CreativeDevelopmentScene = () => {
  return (
    <div className="bg-react-scene-bg aspect-square w-full overflow-hidden">
      <svg
        viewBox="0 0 360 360"
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full"
        role="img"
        aria-label="Creative development process shown as an animated circuit board"
      >
        <defs>
          <pattern
            id="creative-flow-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="12"
              cy="12"
              r="0.8"
              className="fill-react-line-soft opacity-15"
            />
          </pattern>

          <filter
            id="creative-flow-glow"
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
          >
            <feGaussianBlur stdDeviation="1.8" />
          </filter>
        </defs>

        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <rect width="360" height="360" className="fill-react-scene-bg" />

        {/* =====================================================
            SMALL TECH LABELS
        ===================================================== */}

        <text
          x="56"
          y="115"
          className="fill-react-line font-mono text-[6px] tracking-[1.8px]"
          opacity="0.55"
        >
          CREATIVE FLOW
        </text>

        <text
          x="268"
          y="276"
          className="fill-react-line font-mono text-[5px] tracking-[1.3px]"
          opacity="0.4"
        >
          INTERACTIVE
        </text>

        {/* =====================================================
            BOARD SHADOW
        ===================================================== */}

        <path
          d="
            M45 228
            L180 150
            L315 228
            L180 306
            Z
          "
          transform="translate(0 10)"
          className="fill-react-shadow opacity-40 dark:opacity-60"
        />

        {/* =====================================================
            3D BOARD
        ===================================================== */}

        {/* front edge */}
        <path
          d="
            M45 220
            L180 298
            V308
            L45 230
            Z
          "
          className="fill-react-board-edge"
        />

        {/* deep edge */}
        <path
          d="
            M180 298
            L315 220
            V230
            L180 308
            Z
          "
          className="fill-react-board-deep"
        />

        {/* top */}
        <path
          d="
            M45 220
            L180 142
            L315 220
            L180 298
            Z
          "
          className="fill-react-board stroke-react-line [stroke-width:1.2]"
        />

        {/* dot field */}
        <path
          d="
            M55 220
            L180 149
            L305 220
            L180 291
            Z
          "
          fill="url(#creative-flow-dots)"
        />

        {/* inner perimeter */}
        <path
          d="
            M55 220
            L180 149
            L305 220
            L180 291
            Z
          "
          fill="none"
          className="stroke-react-line-soft [stroke-width:1] opacity-40"
        />

        {/* =====================================================
            ACCENT BUS
        ===================================================== */}

        <path
          d="
            M72 232
            L143 272
            L158 263
            L87 223
            Z
          "
          className="fill-react-accent opacity-90"
        />

        <path
          d="
            M143 272
            L158 263
            V270
            L143 279
            Z
          "
          className="fill-react-accent-edge"
        />

        {/* =====================================================
            MAIN CREATIVE FLOW
        ===================================================== */}

        <path
          d="
            M75 220
            L107 202

            L143 222
            L180 201

            L216 222
            L252 202

            L286 221
          "
          fill="none"
          className="stroke-react-line-soft [stroke-width:1.5] opacity-45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* =====================================================
            01 — LAYOUT
        ===================================================== */}

        <CreativeStageBlock
          x={107}
          y={202}
          label="01"
          sublabel="LAYOUT"
          delay="0s"
        >
          <g transform="translate(0 -1)">
            {/* main surface */}
            <rect
              x="-14"
              y="-8"
              width="28"
              height="16"
              rx="1"
              className="fill-react-scene-bg stroke-react-line-soft [stroke-width:1]"
            />

            {/* asymmetric UI structure */}
            <rect
              x="-10"
              y="-4"
              width="8"
              height="8"
              className="fill-react-accent opacity-65"
            />

            <path
              d="
                M2 -4 H9
                M2 0 H10
                M-10 6 H10
              "
              className="stroke-react-line [stroke-width:1] opacity-45"
            />
          </g>
        </CreativeStageBlock>

        {/* =====================================================
            02 — MOTION
        ===================================================== */}

        <CreativeStageBlock
          x={180}
          y={201}
          label="02"
          sublabel="MOTION"
          delay="-1.4s"
          raised
        >
          <g transform="translate(0 -1)">
            {/* motion curve */}
            <path
              d="
                M-14 5
                C-7 -10 5 9 14 -5
              "
              fill="none"
              className="stroke-react-line [stroke-width:1] opacity-60"
            />

            {/* control handles */}
            <path
              d="
                M-14 5 L-7 -6
                M14 -5 L6 6
              "
              fill="none"
              className="stroke-react-line-soft [stroke-width:.8] opacity-40"
            />

            <circle
              cx="-14"
              cy="5"
              r="1.8"
              className="fill-react-scene-bg stroke-react-accent [stroke-width:1]"
            />

            <circle
              cx="14"
              cy="-5"
              r="1.8"
              className="fill-react-scene-bg stroke-react-accent [stroke-width:1]"
            />

            {/* animated motion node */}
            <circle
              r="2"
              className="fill-react-accent"
              filter="url(#creative-flow-glow)"
            >
              <animateMotion
                path="M-14 5 C-7 -10 5 9 14 -5"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </CreativeStageBlock>

        {/* =====================================================
            03 — INTERACTION
        ===================================================== */}

        <CreativeStageBlock
          x={252}
          y={202}
          label="03"
          sublabel="INTERACT"
          delay="-2.8s"
        >
          <g>
            {/* central interaction surface */}
            <rect
              x="-9"
              y="-6"
              width="18"
              height="12"
              rx="1"
              className="fill-react-scene-bg stroke-react-line-soft [stroke-width:1]"
            />

            <circle cx="0" cy="0" r="2.5" className="fill-react-accent" />

            {/* interaction ripple */}
            <circle
              cx="0"
              cy="0"
              r="3"
              fill="none"
              className="stroke-react-accent"
            >
              <animate
                attributeName="r"
                values="3;12;12"
                dur="2.5s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="opacity"
                values="0.8;0;0"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* surrounding response nodes */}
            <circle cx="-14" cy="5" r="1.5" className="fill-react-line-soft" />

            <circle cx="14" cy="-5" r="1.5" className="fill-react-line-soft" />

            <path
              d="
                M-12 4 L-7 2
                M8 -2 L12 -4
              "
              className="stroke-react-line-soft [stroke-width:1] opacity-45"
            />
          </g>
        </CreativeStageBlock>

        {/* =====================================================
            04 — EXPERIENCE
        ===================================================== */}

        <CreativeStageBlock
          x={286}
          y={221}
          label="04"
          sublabel="EXPERIENCE"
          delay="-4.2s"
          compact
        >
          <g transform="translate(0 -1)">
            {/* final composed surface */}
            <rect
              x="-12"
              y="-7"
              width="24"
              height="14"
              rx="1"
              className="fill-react-scene-bg stroke-react-line-soft [stroke-width:1]"
            />

            <rect
              x="-8"
              y="-3"
              width="8"
              height="7"
              className="fill-react-accent opacity-70"
            />

            <path
              d="
                M3 -3 H8
                M3 0 H9
                M3 3 H7
              "
              className="stroke-react-line [stroke-width:1] opacity-45"
            />

            {/* subtle completed state */}
            <path
              d="
                M-8 6 H8
              "
              className="stroke-react-accent [stroke-width:1] opacity-55"
            />
          </g>
        </CreativeStageBlock>

        {/* =====================================================
            DEVELOPMENT SIGNAL
        ===================================================== */}

        <circle
          r="3"
          className="fill-react-accent"
          filter="url(#creative-flow-glow)"
        >
          <animateMotion
            path="
              M75 220
              L107 202
              L143 222
              L180 201
              L216 222
              L252 202
              L286 221
            "
            dur="7s"
            repeatCount="indefinite"
          />

          <animate
            attributeName="opacity"
            values="0;1;1;1;0"
            keyTimes="0;0.08;0.5;0.92;1"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>

        {/* =====================================================
            SECONDARY CIRCUITS
        ===================================================== */}

        <CreativeCircuitBranch d="M107 227 V242 L90 252" delay="0s" />

        <CreativeCircuitBranch d="M180 228 V252 L164 262" delay="-1s" />

        <CreativeCircuitBranch d="M252 227 V240 L270 250" delay="-2s" />

        {/* =====================================================
            FLOATING LAYERS
        ===================================================== */}

        <g transform="translate(105 167)">
          {/* base layer */}
          <path
            d="
              M-16 0
              L0 -9
              L16 0
              L0 9
              Z
            "
            className="fill-react-block-edge stroke-react-block-deep [stroke-width:1]"
          />

          {/* upper layer */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;0 -5;0 0"
              dur="4s"
              repeatCount="indefinite"
            />

            <path
              d="
                M-13 -3
                L0 -11
                L13 -3
                L0 5
                Z
              "
              className="fill-react-block-top stroke-react-line-soft [stroke-width:1]"
            />

            <path
              d="
                M-5 -3
                L0 -6
                L5 -3
                L0 0
                Z
              "
              className="fill-react-accent opacity-60"
            />
          </g>
        </g>

        {/* =====================================================
            MINI TIMELINE CIRCUIT
        ===================================================== */}

        <g transform="translate(236 169)">
          <path
            d="
              M-17 0
              L0 -10
              L18 0
              L0 10
              Z
            "
            className="fill-react-block stroke-react-line-soft [stroke-width:1] opacity-90"
          />

          <path
            d="M-10 0 H10"
            className="stroke-react-line [stroke-width:1] opacity-45"
          />

          {[-7, 0, 7].map((x, index) => (
            <rect
              key={x}
              x={x - 1.5}
              y="-1.5"
              width="3"
              height="3"
              transform={`rotate(45 ${x} 0)`}
              className={
                index === 1
                  ? 'fill-react-accent'
                  : 'fill-react-scene-bg stroke-react-line-soft [stroke-width:.7]'
              }
            />
          ))}

          {/* timeline head */}
          <line
            x1="-9"
            y1="-5"
            x2="-9"
            y2="5"
            className="stroke-react-accent [stroke-width:1]"
          >
            <animate
              attributeName="x1"
              values="-9;9;-9"
              dur="4s"
              repeatCount="indefinite"
            />

            <animate
              attributeName="x2"
              values="-9;9;-9"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
        </g>

        {/* =====================================================
            CONTACT POINTS
        ===================================================== */}

        {[
          [78, 236],
          [92, 250],
          [121, 260],
          [150, 277],
          [180, 285],
          [211, 270],
          [240, 254],
          [270, 239],
          [294, 226],
          [180, 157],
        ].map(([cx, cy], index) => (
          <g key={index}>
            <circle
              cx={cx}
              cy={cy}
              r="2"
              className="fill-react-scene-bg stroke-react-line-soft [stroke-width:1] opacity-60"
            />

            <circle
              cx={cx}
              cy={cy}
              r="0.65"
              className="fill-react-accent opacity-65"
            />
          </g>
        ))}

        {/* =====================================================
            MINIMAL BOARD DETAILS
        ===================================================== */}

        <g className="stroke-react-line-soft [stroke-width:1] opacity-30">
          <path d="M64 214 L77 207" />
          <path d="M69 220 L83 212" />

          <path d="M271 196 L287 205" />
          <path d="M277 192 L294 201" />
        </g>

        {/* =====================================================
            TECHNICAL DIMENSION
        ===================================================== */}

        <path
          d="
            M48 246
            V254

            M48 250
            L145 306

            M145 302
            V310
          "
          fill="none"
          className="stroke-react-line-soft [stroke-width:1] opacity-30"
        />

        <text
          x="65"
          y="282"
          transform="rotate(29 65 282)"
          className="fill-react-line font-mono text-[5px] tracking-[1.3px]"
          opacity="0.38"
        >
          COMPOSE · MOTION · INTERACT
        </text>
      </svg>
    </div>
  )
}

/* ============================================================
   3D CREATIVE STAGE
============================================================ */

const CreativeStageBlock = ({
  x,
  y,
  label,
  sublabel,
  delay,
  children,
  raised = false,
  compact = false,
}: {
  x: number
  y: number
  label: string
  sublabel: string
  delay: string
  children: ReactNode
  raised?: boolean
  compact?: boolean
}) => {
  const width = compact ? 43 : 54
  const half = width / 2

  const depth = compact ? 10 : 13
  const topDepth = compact ? 13 : 16

  return (
    <g transform={`translate(${x} ${y})`}>
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values={raised ? '0 -3;0 -9;0 -9;0 -3' : '0 0;0 -3;0 -3;0 0'}
          keyTimes="0;0.3;0.7;1"
          dur="6s"
          begin={delay}
          repeatCount="indefinite"
        />

        {/* shadow */}
        <ellipse
          cx="0"
          cy={depth + 7}
          rx={half + 5}
          ry="8"
          className="fill-react-shadow opacity-25"
        />

        {/* front face */}
        <path
          d={`
            M ${-half} 0
            L 0 ${topDepth}
            L 0 ${topDepth + depth}
            L ${-half} ${depth}
            Z
          `}
          className="fill-react-block-edge stroke-react-block-deep [stroke-width:1]"
        />

        {/* deep right face */}
        <path
          d={`
            M 0 ${topDepth}
            L ${half} 0
            L ${half} ${depth}
            L 0 ${topDepth + depth}
            Z
          `}
          className="fill-react-block-deep stroke-react-block-deep [stroke-width:1]"
        />

        {/* top */}
        <path
          d={`
            M ${-half} 0
            L 0 ${-topDepth}
            L ${half} 0
            L 0 ${topDepth}
            Z
          `}
          className="fill-react-block-top stroke-react-line [stroke-width:1]"
        />

        {/* inset */}
        <path
          d={`
            M ${-half + 6} 0
            L 0 ${-topDepth + 4}
            L ${half - 6} 0
            L 0 ${topDepth - 4}
            Z
          `}
          className="fill-react-block stroke-react-line-soft [stroke-width:1] opacity-80"
        />

        {children}
      </g>

      {/* =====================================================
          MICRO LABELS
      ===================================================== */}

      <text
        x={-half}
        y={topDepth + depth + 11}
        className="fill-react-line font-mono text-[5px] tracking-[1.2px]"
        opacity="0.55"
      >
        {label}
      </text>

      <text
        x={-half + 9}
        y={topDepth + depth + 11}
        className="fill-react-line font-mono text-[4.5px] tracking-[0.8px]"
        opacity="0.38"
      >
        {sublabel}
      </text>
    </g>
  )
}

/* ============================================================
   SECONDARY SIGNAL
============================================================ */

const CreativeCircuitBranch = ({ d, delay }: { d: string; delay: string }) => {
  return (
    <g>
      <path
        d={d}
        fill="none"
        className="stroke-react-line-soft [stroke-width:1] opacity-30"
      />

      <path
        d={d}
        fill="none"
        strokeDasharray="2 50"
        strokeLinecap="round"
        className="stroke-react-accent [stroke-width:1.2]"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="52;0"
          dur="3s"
          begin={delay}
          repeatCount="indefinite"
        />

        <animate
          attributeName="opacity"
          values="0;0.8;0"
          dur="3s"
          begin={delay}
          repeatCount="indefinite"
        />
      </path>
    </g>
  )
}
