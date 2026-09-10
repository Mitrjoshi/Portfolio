export const FrontendEngineeringScene = () => {
  return (
    <div className="bg-react-scene-bg aspect-square w-full overflow-hidden">
      <svg
        viewBox="0 0 360 360"
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full"
        role="img"
        aria-label="Frontend engineering process shown as an animated circuit board"
      >
        <defs>
          <pattern
            id="frontend-flow-dots"
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
            id="frontend-flow-glow"
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
          FRONTEND SYS
        </text>

        <text
          x="267"
          y="276"
          className="fill-react-line font-mono text-[5px] tracking-[1.4px]"
          opacity="0.4"
        >
          MODULAR
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
          fill="url(#frontend-flow-dots)"
        />

        {/* INNER OUTLINE */}

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
            PRIMARY SYSTEM BUS
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
            MAIN ARCHITECTURE TRACE
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
            STAGE 01 — FOUNDATION
        ===================================================== */}

        <FrontendStageBlock
          x={107}
          y={202}
          label="01"
          sublabel="FOUNDATION"
          delay="0s"
        >
          <g transform="translate(0 -1)">
            {/* frame */}

            <rect
              x="-13"
              y="-8"
              width="26"
              height="16"
              rx="1"
              className="fill-react-scene-bg stroke-react-line-soft [stroke-width:1]"
            />

            {/* layout grid */}

            <path
              d="
                M-8 -4 H8
                M-8 0 H8
                M-8 4 H8

                M-3 -6 V6
                M3 -6 V6
              "
              className="stroke-react-line [stroke-width:.8] opacity-45"
            />

            <rect
              x="-8"
              y="-4"
              width="5"
              height="4"
              className="fill-react-accent opacity-70"
            />
          </g>
        </FrontendStageBlock>

        {/* =====================================================
            STAGE 02 — REUSABLE COMPONENT SYSTEM
        ===================================================== */}

        <FrontendStageBlock
          x={180}
          y={201}
          label="02"
          sublabel="COMPONENTS"
          delay="-1.4s"
          raised
        >
          <g transform="translate(0 -2)">
            {[-10, 0, 10].map((offset, index) => (
              <g key={offset} transform={`translate(${offset} 0)`}>
                <path
                  d="
                    M-5 0
                    L0 -3
                    L5 0
                    L0 3
                    Z
                  "
                  className={
                    index === 1 ? 'fill-react-accent' : 'fill-react-block-edge'
                  }
                />

                <path
                  d="M0 3 V7"
                  className="stroke-react-line-soft [stroke-width:1] opacity-55"
                />
              </g>
            ))}

            <path
              d="M-10 7 H10"
              className="stroke-react-line-soft [stroke-width:1] opacity-45"
            />
          </g>
        </FrontendStageBlock>

        {/* =====================================================
            STAGE 03 — ROUTING / STATE FLOW
        ===================================================== */}

        <FrontendStageBlock
          x={252}
          y={202}
          label="03"
          sublabel="ROUTING"
          delay="-2.8s"
        >
          <g>
            <path
              d="
                M-12 4
                L0 -7

                M0 -7
                L12 3

                M0 -7
                V8
              "
              fill="none"
              className="stroke-react-line [stroke-width:1] opacity-55"
            />

            {[
              [-12, 4],
              [0, -7],
              [12, 3],
              [0, 8],
            ].map(([cx, cy], index) => (
              <circle
                key={index}
                cx={cx}
                cy={cy}
                r="2.1"
                className="fill-react-scene-bg stroke-react-accent [stroke-width:1]"
              />
            ))}

            <circle r="1.7" className="fill-react-accent">
              <animateMotion
                path="M-12 4 L0 -7 L12 3"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </FrontendStageBlock>

        {/* =====================================================
            STAGE 04 — API GATEWAY
        ===================================================== */}

        <FrontendStageBlock
          x={286}
          y={221}
          label="04"
          sublabel="API"
          delay="-4.2s"
          compact
        >
          <g transform="translate(0 -1)">
            {/* gateway bus */}

            <path
              d="M-13 0 H13"
              className="stroke-react-line [stroke-width:1] opacity-55"
            />

            {/* ports */}

            {[-9, 0, 9].map((x, index) => (
              <g key={x}>
                <rect
                  x={x - 3}
                  y="-4"
                  width="6"
                  height="8"
                  rx="1"
                  className="fill-react-scene-bg stroke-react-line-soft [stroke-width:1]"
                />

                <circle
                  cx={x}
                  cy="0"
                  r="1"
                  className={
                    index === 1 ? 'fill-react-accent' : 'fill-react-line'
                  }
                >
                  {index === 1 && (
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                  )}
                </circle>
              </g>
            ))}
          </g>
        </FrontendStageBlock>

        {/* =====================================================
            MAIN MOVING SYSTEM SIGNAL
        ===================================================== */}

        <circle
          r="3"
          className="fill-react-accent"
          filter="url(#frontend-flow-glow)"
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
            SECONDARY COMPONENT BRANCH
        ===================================================== */}

        <FrontendBranch d="M107 227 V242 L90 252" delay="0s" />

        <FrontendBranch d="M180 228 V252 L164 262" delay="-1s" />

        <FrontendBranch d="M252 227 V240 L270 250" delay="-2s" />

        {/* =====================================================
            EXTERNAL API INPUT
        ===================================================== */}

        <path
          d="
            M323 184
            H308
            L295 197
          "
          fill="none"
          className="stroke-react-line-soft [stroke-width:1] opacity-30"
        />

        <circle r="2.5" className="fill-react-signal">
          <animateMotion
            path="M323 184 H308 L295 197"
            dur="3.3s"
            repeatCount="indefinite"
          />

          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.8;1"
            dur="3.3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* RESPONSE */}

        <path
          d="
            M296 205
            L309 216
            H325
          "
          fill="none"
          className="stroke-react-line-soft [stroke-width:1] opacity-25"
        />

        <circle r="2" className="fill-react-accent">
          <animateMotion
            path="M296 205 L309 216 H325"
            dur="3.6s"
            begin="-1.8s"
            repeatCount="indefinite"
          />

          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.8;1"
            dur="3.6s"
            begin="-1.8s"
            repeatCount="indefinite"
          />
        </circle>

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
            MINIMAL PCB DETAILS
        ===================================================== */}

        <g className="stroke-react-line-soft [stroke-width:1] opacity-30">
          <path d="M64 214 L77 207" />
          <path d="M69 220 L83 212" />

          <path d="M271 196 L287 205" />
          <path d="M277 192 L294 201" />
        </g>

        {/* =====================================================
            DIMENSION DETAIL
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
          SYSTEM · ROUTE · CONNECT
        </text>
      </svg>
    </div>
  )
}

/* ============================================================
   3D FRONTEND STAGE BLOCK
============================================================ */

const FrontendStageBlock = ({
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

        {/* SHADOW */}

        <ellipse
          cx="0"
          cy={depth + 7}
          rx={half + 5}
          ry="8"
          className="fill-react-shadow opacity-25"
        />

        {/* =====================================================
            FRONT DARK FACE
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
            RIGHT DEEP FACE
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
            INNER SURFACE
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

        {children}
      </g>

      {/* =====================================================
          SMALL TECH LABELS
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
   SECONDARY CIRCUIT BRANCH
============================================================ */

const FrontendBranch = ({ d, delay }: { d: string; delay: string }) => {
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
