export const ReactDevelopmentScene = () => {
  return (
    <div className="bg-react-scene-bg aspect-square w-full overflow-hidden">
      <svg
        viewBox="0 0 360 360"
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full"
        role="img"
        aria-label="React development process shown as a circuit board"
      >
        <defs>
          <pattern
            id="react-flow-dots"
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
            id="react-flow-glow"
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
            SMALL TECH LABEL
        ===================================================== */}

        <text
          x="56"
          y="115"
          className="fill-react-line font-mono text-[6px] tracking-[1.8px]"
          opacity="0.55"
        >
          REACT FLOW
        </text>

        <text
          x="270"
          y="275"
          className="fill-react-line font-mono text-[5px] tracking-[1.4px]"
          opacity="0.4"
        >
          4 STAGES
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
            BOARD 3D BASE
        ===================================================== */}

        {/* FRONT EDGE */}
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

        {/* RIGHT EDGE */}
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

        {/* TOP */}
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

        {/* DOT FIELD */}
        <path
          d="
            M55 220
            L180 149
            L305 220
            L180 291
            Z
          "
          fill="url(#react-flow-dots)"
        />

        {/* INNER EDGE */}
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
            MAIN CIRCUIT TRACE
        ===================================================== */}

        <path
          d="
            M75 221
            L108 202
            L145 222
            L181 201
            L217 222
            L252 202
            L285 221
          "
          fill="none"
          className="stroke-react-line-soft [stroke-width:1.5] opacity-45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* =====================================================
            STAGE 01
        ===================================================== */}

        <StageBlock x={108} y={202} label="01" sublabel="STRUCTURE" delay="0s">
          <g transform="translate(-1 -2)">
            <rect
              x="-11"
              y="-7"
              width="22"
              height="14"
              rx="1"
              className="fill-react-scene-bg stroke-react-line-soft [stroke-width:1]"
            />

            <rect
              x="-7"
              y="-3"
              width="7"
              height="5"
              className="fill-react-accent opacity-65"
            />

            <path
              d="M3 -3 H8 M3 0 H7 M-7 5 H6"
              className="stroke-react-line [stroke-width:1] opacity-50"
            />
          </g>
        </StageBlock>

        {/* =====================================================
            STAGE 02
        ===================================================== */}

        <StageBlock
          x={181}
          y={201}
          label="02"
          sublabel="COMPONENTS"
          delay="-1.4s"
          raised
        >
          <g transform="translate(0 -2)">
            {[-10, 0, 10].map((offset) => (
              <g key={offset} transform={`translate(${offset} 0)`}>
                <path
                  d="
                    M-5 0
                    L0 -3
                    L5 0
                    L0 3
                    Z
                  "
                  className="fill-react-accent opacity-70"
                />

                <path
                  d="M0 3 V6"
                  className="stroke-react-line-soft [stroke-width:1] opacity-60"
                />
              </g>
            ))}
          </g>
        </StageBlock>

        {/* =====================================================
            STAGE 03
        ===================================================== */}

        <StageBlock x={252} y={202} label="03" sublabel="STATE" delay="-2.8s">
          <g>
            <path
              d="
                M-11 1
                L0 -6
                L11 1
                L0 7
                Z
              "
              fill="none"
              className="stroke-react-line [stroke-width:1] opacity-60"
            />

            {[
              [-11, 1],
              [0, -6],
              [11, 1],
              [0, 7],
            ].map(([cx, cy], index) => (
              <circle
                key={index}
                cx={cx}
                cy={cy}
                r="2"
                className="fill-react-scene-bg stroke-react-accent [stroke-width:1]"
              />
            ))}

            <circle r="1.7" className="fill-react-accent">
              <animateMotion
                path="M-11 1 L0 -6 L11 1 L0 7 L-11 1"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </StageBlock>

        {/* =====================================================
            STAGE 04
        ===================================================== */}

        <StageBlock
          x={285}
          y={221}
          label="04"
          sublabel="RENDER"
          delay="-4.2s"
          compact
        >
          <g transform="translate(0 -1)">
            <rect
              x="-11"
              y="-7"
              width="22"
              height="14"
              rx="1"
              className="fill-react-scene-bg stroke-react-line-soft [stroke-width:1]"
            />

            <rect
              x="-7"
              y="-3"
              width="7"
              height="6"
              className="fill-react-accent opacity-70"
            />

            <path
              d="M3 -3 H7 M3 0 H8 M-7 5 H8"
              className="stroke-react-line [stroke-width:1] opacity-45"
            />
          </g>
        </StageBlock>

        {/* =====================================================
            MOVING FLOW SIGNAL
        ===================================================== */}

        <circle
          r="3"
          className="fill-react-accent"
          filter="url(#react-flow-glow)"
        >
          <animateMotion
            path="
              M75 221
              L108 202
              L145 222
              L181 201
              L217 222
              L252 202
              L285 221
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
            SMALL CIRCUIT BRANCHES
        ===================================================== */}

        <CircuitBranch d="M108 226 V241 L91 251" delay="0s" />

        <CircuitBranch d="M181 227 V251 L164 261" delay="-1s" />

        <CircuitBranch d="M252 226 V240 L270 250" delay="-2s" />

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
            SMALL PCB DETAILS
        ===================================================== */}

        <g className="stroke-react-line-soft [stroke-width:1] opacity-30">
          <path d="M64 214 L77 207" />
          <path d="M69 220 L83 212" />

          <path d="M271 196 L287 205" />
          <path d="M277 192 L294 201" />
        </g>

        {/* =====================================================
            DIMENSION-LIKE TECH LINES
        ===================================================== */}

        <path
          d="
            M48 246
            L48 254

            M48 250
            L145 306

            M145 302
            L145 310
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
          BUILD · COMPOSE · FLOW
        </text>
      </svg>
    </div>
  )
}

/* ============================================================
   3D STAGE BLOCK
============================================================ */

const StageBlock = ({
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
  children: React.ReactNode
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

        {/* =====================================================
            SHADOW
        ===================================================== */}

        <ellipse
          cx="0"
          cy={depth + 7}
          rx={half + 5}
          ry="8"
          className="fill-react-shadow opacity-25"
        />

        {/* =====================================================
            FRONT FACE
        ===================================================== */}

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

        {/* =====================================================
            RIGHT FACE
        ===================================================== */}

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

        {/* =====================================================
            TOP FACE
        ===================================================== */}

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

        {/* =====================================================
            INNER TOP
        ===================================================== */}

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

        {/* CONTENT */}
        {children}
      </g>

      {/* =====================================================
          SMALL LABELS
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
   SMALL CIRCUIT BRANCH
============================================================ */

const CircuitBranch = ({ d, delay }: { d: string; delay: string }) => {
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
