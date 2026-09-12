export const AnimatedStreetScene = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMax meet"
        className="block h-auto w-full"
        role="img"
        aria-label="Animated contact scene showing a studio, mailbox, phone booth and visitor"
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <rect width="1440" height="360" fill="url(#contact-grid)" />

        <AnimatedClouds />

        {/* =====================================================
            BACKGROUND BUILDINGS
        ===================================================== */}

        <BackgroundBuilding x={20} y={219} width={150} height={96} />

        <BackgroundBuilding x={178} y={204} width={132} height={111} />

        <BackgroundBuilding x={1080} y={212} width={145} height={103} />

        <BackgroundBuilding x={1250} y={198} width={170} height={117} />

        {/* =====================================================
            LEFT COMMUNICATION ZONE — MAIL
        ===================================================== */}

        <Mailbox x={235} y={286} />

        <ContactCable startX={265} endX={535} y={311} />

        {/* animated travelling envelope */}

        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;270 0;270 0"
            keyTimes="0;0.55;1"
            dur="6s"
            repeatCount="indefinite"
          />

          <g transform="translate(273 275)">
            <rect
              x="-8"
              y="-6"
              width="16"
              height="11"
              rx="1"
              fill="var(--primary)"
              stroke="var(--border)"
              strokeOpacity="0.8"
            />

            <path
              d="M-8 -6 L0 0 L8 -6"
              fill="none"
              stroke="var(--border)"
              strokeOpacity="0.7"
            />

            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.08;0.75;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {/* =====================================================
            CENTRAL STUDIO
        ===================================================== */}

        <Studio />

        {/* =====================================================
            RIGHT COMMUNICATION ZONE — PHONE
        ===================================================== */}

        <ContactCable startX={906} endX={1170} y={311} />

        {/* =====================================================
            CHARACTER
        ===================================================== */}

        {/* <Visitor x={614} y={310} /> */}

        {/* =====================================================
            STREET OBJECTS
        ===================================================== */}

        <Tree x={324} y={287} scale={0.95} />
        <Tree x={1000} y={290} scale={0.8} />
        <Tree x={1300} y={289} scale={0.9} />

        {/* =====================================================
            STREET / BASELINE
        ===================================================== */}

        <path
          d="M0 316 H1440"
          stroke="var(--foreground)"
          strokeOpacity="0.65"
          strokeWidth="1"
        />

        <StreetFence />

        <Bench x={355} y={290} />

        {/* <PhoneBooth x={975} y={206} /> */}

        {/* =====================================================
            STREET LIGHTS
        ===================================================== */}

        <Bench x={1145} y={290} />

        <StreetLight x={115} groundY={316} height={135} delay="0s" />

        <StreetLight x={1000} groundY={316} height={135} delay="0s" />

        <StreetLight x={1340} groundY={316} height={135} delay="-3.5s" />
      </svg>
    </div>
  )
}

/* ============================================================
   STUDIO
============================================================ */

const Studio = () => {
  return (
    <g>
      {/* BUILDING */}

      <rect
        x="515"
        y="151"
        width="405"
        height="165"
        fill="var(--house-walls)"
        stroke="#8a806b"
        strokeOpacity="0.52"
      />

      {/* ROOF */}

      <path
        d="
          M492 151
          L628 108
          H785
          L944 151
          Z
        "
        fill="var(--house-roof)"
        stroke="var(--border)"
        strokeOpacity="0.8"
      />

      {/* ROOF SEAM */}

      <line
        x1="708"
        y1="108"
        x2="708"
        y2="151"
        stroke="var(--border)"
        strokeOpacity="0.35"
      />

      {/* CHIMNEY */}

      <path
        d="
          M792 108
          V88
          H815
          V118
          Z
        "
        fill="var(--house-chimney)"
        stroke="var(--border)"
        strokeOpacity="0.6"
      />

      {/* =====================================================
          SIGN
      ===================================================== */}

      <g transform="translate(664 129)">
        <rect
          x="-44"
          y="-10"
          width="88"
          height="20"
          rx="2"
          fill="var(--house-walls)"
          stroke="var(--border)"
          strokeOpacity="0.5"
        />

        <circle
          cx="-31"
          cy="0"
          r="2"
          fill="var(--primary)"
          filter="url(#contact-small-glow)"
        >
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <text
          x="6"
          y="3"
          textAnchor="middle"
          fontSize="7"
          letterSpacing="2"
          fill="var(--foreground)"
        >
          MITR JOSHI
        </text>
      </g>

      {/* =====================================================
          LEFT WINDOW
      ===================================================== */}

      <StudioWindow x={550} y={185} width={80} height={58} />

      {/* =====================================================
          RIGHT WINDOW — animated
      ===================================================== */}

      <AnimatedStudioWindow x={804} y={185} width={80} height={58} />

      {/* =====================================================
          DOOR INTERIOR
      ===================================================== */}

      <rect
        x="666"
        y="207"
        width="72"
        height="109"
        rx="2"
        fill="#d49a39"
        fillOpacity="0.12"
      />

      {/* light spill */}

      <path
        d="
          M675 217
          H730
          L762 316
          H644
          Z
        "
        fill="#d49a39"
        fillOpacity="0.08"
      >
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* DOOR */}

      <AnimatedStudioDoor />

      {/* DOOR FRAME */}

      <path
        d="
          M658 316
          V199
          H746
          V316
        "
        fill="none"
        stroke="#9d9583"
        strokeOpacity="0.65"
        strokeWidth="1.5"
      />

      {/* PORCH LIGHT */}

      <path
        d="
          M689 194
          H715
          L709 179
          H695
          Z
        "
        fill="#d49a39"
        fillOpacity="0.75"
        stroke="#d49a39"
      />

      <circle
        cx="702"
        cy="194"
        r="3"
        fill="#e6ac45"
        filter="url(#contact-small-glow)"
      >
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* HOUSE NUMBER */}

      <rect
        x="751"
        y="218"
        width="17"
        height="19"
        rx="2"
        fill="var(--border)"
        stroke="var(--border)"
        strokeOpacity="0.65"
      />

      <text
        x="759.5"
        y="231"
        textAnchor="middle"
        fontSize="8"
        fill="var(--foreground)"
      >
        6
      </text>

      {/* STEPS */}

      <path
        d="M652 316 H750 L766 330 H636 Z"
        fill="var(--house-stairs)"
        stroke="var(--foreground)"
        strokeOpacity="0.38"
      />

      <line
        x1="647"
        y1="322"
        x2="756"
        y2="322"
        stroke="var(--foreground)"
        strokeOpacity="0.3"
      />

      <line
        x1="642"
        y1="327"
        x2="762"
        y2="327"
        stroke="var(--foreground)"
        strokeOpacity="0.22"
      />
    </g>
  )
}

/* ============================================================
   DOOR
============================================================ */

const AnimatedStudioDoor = () => {
  return (
    <g>
      <g transform="translate(666 207)">
        <g>
          <animateTransform
            attributeName="transform"
            type="scale"
            values="
              1 1;
              1 1;
              0.58 1;
              0.58 1;
              1 1
            "
            keyTimes="
              0;
              0.58;
              0.63;
              0.86;
              1
            "
            dur="8s"
            repeatCount="indefinite"
          />

          <rect
            width="72"
            height="109"
            rx="2"
            fill="var(--house-door)"
            stroke="var(--border)"
            strokeOpacity="0.85"
          />

          <rect
            x="10"
            y="12"
            width="51"
            height="40"
            rx="2"
            fill="var(--house-door)"
            stroke="var(--border)"
            strokeOpacity="0.65"
          />

          <rect
            x="10"
            y="60"
            width="51"
            height="34"
            rx="2"
            fill="var(--house-door)"
            stroke="var(--border)"
            strokeOpacity="0.65"
          />

          <circle cx="63" cy="54" r="2.6" fill="#fff" />
        </g>
      </g>
    </g>
  )
}

/* ============================================================
   WINDOWS
============================================================ */

const StudioWindow = ({
  x,
  y,
  width,
  height,
}: {
  x: number
  y: number
  width: number
  height: number
}) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="2"
        fill="var(--house-window)"
        stroke="var(--foreground)"
        strokeOpacity="0.4"
      />

      <line
        x1={x + width / 2}
        y1={y}
        x2={x + width / 2}
        y2={y + height}
        stroke="var(--foreground)"
        strokeOpacity="0.4"
      />

      <line
        x1={x}
        y1={y + height / 2}
        x2={x + width}
        y2={y + height / 2}
        stroke="var(--foreground)"
        strokeOpacity="0.4"
      />

      <path
        d={`M${x - 7} ${y + height + 4} H${x + width + 7}`}
        stroke="var(--border)"
        strokeOpacity="0.5"
      />
    </g>
  )
}

const AnimatedStudioWindow = ({
  x,
  y,
  width,
  height,
}: {
  x: number
  y: number
  width: number
  height: number
}) => {
  const half = width / 2
  const padding = 3

  const paneWidth = half - padding * 2
  const paneHeight = height - padding * 2

  return (
    <g>
      {/* OUTER WINDOW FRAME */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="2"
        fill="var(--house-window)"
        stroke="var(--foreground)"
        strokeOpacity="0.4"
      />

      {/* LEFT STATIC GLASS */}
      <rect
        x={x + padding}
        y={y + padding}
        width={paneWidth}
        height={paneHeight}
        rx="1"
        fill="var(--house-window)"
        stroke="var(--foreground)"
        strokeOpacity="0.4"
      />

      {/* LEFT CURTAIN */}
      <rect
        x={x + padding + 2}
        y={y + padding + 2}
        width={paneWidth - 4}
        height={paneHeight - 4}
        rx="1"
        fill="var(--house-roof)"
        fillOpacity="0.2"
      />

      {/* RIGHT WINDOW TRACK */}
      <rect
        x={x + half}
        y={y + padding}
        width={paneWidth}
        height={paneHeight}
        rx="1"
        fill="var(--house-window)"
        stroke="var(--foreground)"
        strokeOpacity="0.4"
      />

      {/* =====================================================
          SLIDING GLASS PANEL
          Slides from right → left → right
      ===================================================== */}

      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values={`
            0 0;
            0 0;
            ${-half + 6} 0;
            ${-half + 6} 0;
            0 0
          `}
          keyTimes="
            0;
            0.30;
            0.40;
            0.70;
            1
          "
          dur="7s"
          repeatCount="indefinite"
        />

        <rect
          x={x + half + padding}
          y={y + padding}
          width={paneWidth}
          height={paneHeight}
          rx="1"
          fill="var(--house-window)"
          stroke="#8a806b"
          strokeOpacity="0.75"
        />

        {/* subtle glass reflection */}
        <path
          d={`
            M ${x + half + 10} ${y + 8}
            L ${x + width - 10} ${y + height - 8}
          `}
          stroke="#9d9583"
          strokeOpacity="0.12"
        />

        {/* sliding handle */}
        <rect
          x={x + half + 7}
          y={y + height / 2 - 6}
          width="2"
          height="12"
          rx="1"
          fill="#9b927f"
          fillOpacity="0.55"
        />
      </g>

      {/* CENTER FRAME / TRACK */}
      <line
        x1={x + half}
        y1={y}
        x2={x + half}
        y2={y + height}
        stroke="var(--border)"
        strokeOpacity="0.75"
      />

      {/* HORIZONTAL DIVIDER */}
      <line
        x1={x}
        y1={y + height / 2}
        x2={x + width}
        y2={y + height / 2}
        stroke="var(--border)"
        strokeOpacity="0.45"
      />

      {/* WINDOW LEDGE */}
      <path
        d={`M${x - 7} ${y + height + 4} H${x + width + 7}`}
        stroke="#807969"
        strokeOpacity="0.5"
      />
    </g>
  )
}

/* ============================================================
   MAILBOX
============================================================ */

const Mailbox = ({ x, y }: { x: number; y: number }) => {
  return (
    <g transform={`translate(${x} ${y})`}>
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="30"
        stroke="var(--border)"
        strokeWidth="3"
      />

      <path
        d="
          M-19 -8
          Q-19 -22 -5 -22
          H14
          Q21 -22 21 -14
          V-3
          H-19
          Z
        "
        fill="var(--mail-box)"
        stroke="var(--street-fence)"
        strokeOpacity="0.75"
      />

      <line
        x1="-12"
        y1="-11"
        x2="13"
        y2="-11"
        stroke="#a39a85"
        strokeOpacity="0.5"
      />

      {/* flag */}

      <path d="M13 -22 V-37 H26" fill="none" stroke="#c79037" strokeWidth="2" />

      <rect x="19" y="-40" width="10" height="7" fill="#c79037" />

      {/* incoming indicator */}

      <circle
        cx="-13"
        cy="-17"
        r="2"
        fill="#d49a39"
        filter="url(#contact-small-glow)"
      >
        <animate
          attributeName="opacity"
          values="0.25;1;0.25"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  )
}

/* ============================================================
   PHONE BOOTH
============================================================ */

/* ============================================================
   CONTACT CABLE
============================================================ */

const ContactCable = ({
  startX,
  endX,
  y,
}: {
  startX: number
  endX: number
  y: number
}) => {
  return (
    <g>
      <path
        d={`
          M ${startX} ${y}
          H ${startX + 35}
          V ${y - 8}
          H ${endX - 35}
          V ${y}
          H ${endX}
        `}
        fill="none"
        stroke="var(--foreground)"
        strokeOpacity="0.27"
      />

      <circle
        cx={startX + 35}
        cy={y - 8}
        r="2"
        fill="var(--foreground)"
        stroke="var(--foreground)"
        strokeOpacity="0.55"
      />

      <circle
        cx={endX - 35}
        cy={y - 8}
        r="2"
        fill="var(--foreground)"
        stroke="var(--foreground)"
        strokeOpacity="0.55"
      />
    </g>
  )
}

/* ============================================================
   VISITOR
============================================================ */

/* ============================================================
   STREET LIGHT
============================================================ */

const StreetLight = ({
  x,
  groundY,
  height,
  delay,
}: {
  x: number
  groundY: number
  height: number
  delay: string
}) => {
  const top = groundY - height

  return (
    <g>
      <path
        d={`
          M ${x} ${groundY}
          V ${top + 18}
          Q ${x} ${top} ${x + 17} ${top}
          H ${x + 35}
        `}
        fill="none"
        stroke="#777062"
        strokeWidth="3"
      />

      <path
        d={`
          M ${x + 26} ${top}
          H ${x + 44}
          L ${x + 40} ${top + 11}
          H ${x + 30}
          Z
        `}
        fill="#c79037"
      />

      <g>
        <animate
          attributeName="opacity"
          values="0.25;0.9;0.25"
          dur="5s"
          begin={delay}
          repeatCount="indefinite"
        />

        <path
          d={`
            M ${x + 35} ${top + 8}
            L ${x + 5} ${groundY}
            H ${x + 67}
            Z
          `}
          fill="#d49a39"
          fillOpacity="0.13"
        />

        <ellipse
          cx={x + 35}
          cy={groundY - 2}
          rx="42"
          ry="7"
          fill="#d49a39"
          fillOpacity="0.07"
          filter="url(#contact-glow)"
        />
      </g>
    </g>
  )
}

/* ============================================================
   BACKGROUND BUILDING
============================================================ */

const BackgroundBuilding = ({
  x,
  y,
  width,
  height,
}: {
  x: number
  y: number
  width: number
  height: number
}) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="var(--house-walls)"
        stroke="var(--border)"
        strokeOpacity="0.35"
        fillOpacity={0.4}
      />

      <path
        d={`
          M ${x - 10} ${y}
          L ${x + width / 2} ${y - 25}
          L ${x + width + 10} ${y}
          Z
        `}
        fill="var(--house-roof)"
        stroke="var(--border)"
        strokeOpacity="0.45"
        fillOpacity={0.4}
      />

      <rect
        x={x + 18}
        y={y + 25}
        width="18"
        height="22"
        rx="1"
        fill="var(--house-window)"
        stroke="var(--border)"
        strokeOpacity="0.4"
      />

      <rect
        x={x + width - 37}
        y={y + 25}
        width="18"
        height="22"
        rx="1"
        fill="var(--house-window)"
        stroke="var(--border)"
        strokeOpacity="0.4"
      />
    </g>
  )
}

/* ============================================================
   TREE
============================================================ */

const Tree = ({ x, y, scale }: { x: number; y: number; scale: number }) => {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <line
        x1="0"
        y1="-4"
        x2="0"
        y2="29"
        stroke="var(--border)"
        strokeWidth="4"
      />

      <circle
        cx="0"
        cy="-24"
        r="28"
        fill="var(--street-leaf-s3)"
        stroke="#526045"
        strokeOpacity="0.65"
      />

      <circle
        cx="-18"
        cy="-15"
        r="17"
        fill="var(--street-leaf-s1)"
        stroke="#526045"
        strokeOpacity="0.65"
      />

      <circle
        cx="10"
        cy="-18"
        r="20"
        fill="var(--street-leaf-s2)"
        stroke="#526045"
        strokeOpacity="0.65"
      />
    </g>
  )
}

/* ============================================================
   BENCH
============================================================ */

const Bench = ({ x, y }: { x: number; y: number }) => {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width="72"
        height="8"
        rx="1"
        fill="var(--street-bench)"
        stroke="#58674d"
      />

      <rect
        y="12"
        width="72"
        height="6"
        rx="1"
        fill="var(--street-bench)"
        stroke="#58674d"
      />

      <line x1="9" y1="18" x2="7" y2="28" stroke="#716858" />

      <line x1="63" y1="18" x2="65" y2="28" stroke="#716858" />
    </g>
  )
}

const StreetFence = () => {
  const topY = 289
  const middleY = 302
  const groundY = 316

  // Keep the entire main studio frontage open.
  const leftStart = 20
  const leftEnd = 500

  const rightStart = 940
  const rightEnd = 1420

  const postSpacing = 42

  const createPosts = (start: number, end: number) => {
    const posts: number[] = []

    for (let x = start; x <= end; x += postSpacing) {
      posts.push(x)
    }

    if (posts[posts.length - 1] !== end) {
      posts.push(end)
    }

    return posts
  }

  const leftPosts = createPosts(leftStart, leftEnd)
  const rightPosts = createPosts(rightStart, rightEnd)

  return (
    <g>
      {/* =====================================================
          LEFT FENCE
      ===================================================== */}

      <g>
        {/* TOP RAIL */}
        <line
          x1={leftStart}
          y1={topY}
          x2={leftEnd}
          y2={topY}
          stroke="var(--street-fence)"
          strokeOpacity="0.55"
          strokeWidth="1"
        />

        {/* MIDDLE RAIL */}
        <line
          x1={leftStart}
          y1={middleY}
          x2={leftEnd}
          y2={middleY}
          stroke="var(--street-fence)"
          strokeOpacity="0.45"
          strokeWidth="1"
        />

        {/* POSTS */}
        {leftPosts.map((x) => (
          <g key={`left-fence-${x}`}>
            <line
              x1={x}
              y1={topY - 8}
              x2={x}
              y2={groundY}
              stroke="var(--street-fence)"
              strokeOpacity="0.55"
              strokeWidth="1"
            />

            {/* SMALL POST CAP */}
            <path
              d={`
                M ${x - 2.5} ${topY - 8}
                L ${x} ${topY - 12}
                L ${x + 2.5} ${topY - 8}
                Z
              `}
              stroke="var(--street-fence)"
              fillOpacity="0.45"
            />
          </g>
        ))}
      </g>

      {/* =====================================================
          RIGHT FENCE
      ===================================================== */}

      <g>
        {/* TOP RAIL */}
        <line
          x1={rightStart}
          y1={topY}
          x2={rightEnd}
          y2={topY}
          stroke="var(--street-fence)"
          strokeOpacity="0.55"
          strokeWidth="1"
        />

        {/* MIDDLE RAIL */}
        <line
          x1={rightStart}
          y1={middleY}
          x2={rightEnd}
          y2={middleY}
          stroke="var(--street-fence)"
          strokeOpacity="0.45"
          strokeWidth="1"
        />

        {/* POSTS */}
        {rightPosts.map((x) => (
          <g key={`right-fence-${x}`}>
            <line
              x1={x}
              y1={topY - 8}
              x2={x}
              y2={groundY}
              stroke="var(--street-fence)"
              strokeOpacity="0.55"
              strokeWidth="1"
            />

            <path
              d={`
                M ${x - 2.5} ${topY - 8}
                L ${x} ${topY - 12}
                L ${x + 2.5} ${topY - 8}
                Z
              `}
              stroke="var(--street-fence)"
              fillOpacity="0.45"
            />
          </g>
        ))}
      </g>

      {/* =====================================================
          END POSTS BESIDE STUDIO OPENING
      ===================================================== */}

      <g>
        {/* LEFT END POST */}
        <rect
          x={leftEnd - 2}
          y={topY - 11}
          width="4"
          height={groundY - topY + 11}
          rx="1"
          fill="var(--street-fence)"
          stroke="var(--street-fence)"
          strokeOpacity="0.65"
        />

        <circle
          cx={leftEnd}
          cy={topY - 12}
          r="2.8"
          fill="#b2833d"
          fillOpacity="0.65"
        />

        {/* RIGHT END POST */}
        <rect
          x={rightStart - 2}
          y={topY - 11}
          width="4"
          height={groundY - topY + 11}
          rx="1"
          fill="var(--street-fence)"
          stroke="var(--street-fence)"
          strokeOpacity="0.65"
        />

        <circle
          cx={rightStart}
          cy={topY - 12}
          r="2.8"
          fill="var(--street-fence)"
          fillOpacity="0.65"
        />
      </g>
    </g>
  )
}

const AnimatedClouds = () => {
  return (
    <g>
      {/* CLOUD 1 */}
      <g opacity="0.55">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-140 0"
          to="1540 0"
          dur="30s"
          repeatCount="indefinite"
        />

        <Cloud x={0} y={70} scale={1} />
      </g>

      {/* CLOUD 2 */}
      <g opacity="0.4">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-250 0"
          to="1540 0"
          dur="42s"
          begin="-15s"
          repeatCount="indefinite"
        />

        <Cloud x={0} y={112} scale={0.72} />
      </g>

      {/* CLOUD 3 */}
      <g opacity="0.48">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-200 0"
          to="1540 0"
          dur="36s"
          begin="-23s"
          repeatCount="indefinite"
        />

        <Cloud x={0} y={42} scale={0.84} />
      </g>

      {/* CLOUD 4 */}
      <g opacity="0.32">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-180 0"
          to="1540 0"
          dur="50s"
          begin="-34s"
          repeatCount="indefinite"
        />

        <Cloud x={0} y={145} scale={0.55} />
      </g>
    </g>
  )
}

const Cloud = ({
  x,
  y,
  scale = 1,
}: {
  x: number
  y: number
  scale?: number
}) => {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* trailing wind lines */}
      <line
        x1="-42"
        y1="11"
        x2="-15"
        y2="11"
        stroke="#8a806b"
        strokeOpacity="0.45"
        strokeWidth="1"
      />

      <line
        x1="-31"
        y1="18"
        x2="-8"
        y2="18"
        stroke="#8a806b"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {/* CLOUD BODY */}
      <path
        d="
          M 0 18
          H 61

          C 70 18 77 13 77 6

          C 77 -1 71 -6 62 -6

          C 59 -16 49 -22 37 -22

          C 25 -22 15 -15 12 -5

          C 4 -6 -2 -1 -4 6

          C -6 13 -1 18 8 18

          Z
        "
        fill="var(--border)"
        stroke="var(--footer-line-border)"
        strokeOpacity="0.75"
        strokeWidth="1.1"
      />

      {/* slightly lit lower edge */}
      <path
        d="
          M 4 17
          H 59
          C 67 17 71 13 72 9
        "
        fill="none"
        stroke="var(--footer-line-border)"
        strokeOpacity="0.26"
        strokeWidth="1"
      />

      {/* INNER CLOUD DETAIL */}
      <path
        d="
          M 12 15

          C 10 8 14 2 22 1

          C 24 -7 31 -12 39 -12

          C 47 -12 53 -8 56 -1

          C 63 -1 68 3 69 8
        "
        fill="none"
        stroke="var(--footer-line-border)"
        strokeOpacity="0.2"
        strokeWidth="1"
      />
    </g>
  )
}
