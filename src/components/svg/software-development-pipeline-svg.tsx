import type { SVGProps } from 'react'

const PIPELINE_DURATION = 9.2
const ROBOT_WALK_DURATION = 5.5

export const SoftwareDevelopmentPipelineSvg = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      viewBox="0 0 980 272"
      preserveAspectRatio="xMidYMax meet"
      role="img"
      aria-label="Software development workflow"
      {...props}
    >
      <style>{`
        .sd-pipeline {
          font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
        }

        .sd-bg { fill: var(--software-pipeline-bg); }

        .rg-ground,
        .rg-skirt,
        .rg-brd-bus,
        .rg-brd-trace,
        .rg-brd-silk,
        .rg-brd-pin,
        .rg-drop,
        .rg-rail,
        .rg-wire,
        .rg-feet,
        .rg-pin,
        .rg-code-ln {
          fill: none;
          vector-effect: non-scaling-stroke;
        }

        .rg-ground { stroke: var(--software-pipeline-ground); stroke-width: 1; }
        .rg-skirt { stroke: var(--software-pipeline-skirt); stroke-width: 1; }
        .rg-brd-bus { stroke: var(--software-pipeline-board-bus); stroke-width: .75; }
        .rg-brd-trace { stroke: var(--software-pipeline-board-trace); stroke-width: .7; }
        .rg-brd-silk { stroke: var(--software-pipeline-board-silk); stroke-width: .65; }
        .rg-brd-via { fill: var(--software-pipeline-board-via-bg); stroke: var(--software-pipeline-board-via-edge); stroke-width: .75; }
        .rg-brd-chip,
        .rg-brd-res { fill: var(--software-pipeline-board-component); stroke: var(--software-pipeline-board-component-edge); stroke-width: .55; }
        .rg-brd-cap { fill: var(--software-pipeline-board-cap); stroke: var(--software-pipeline-board-cap-edge); stroke-width: .65; }
        .rg-brd-pin { stroke: var(--software-pipeline-board-pin); stroke-width: .55; }

        .rg-drop,
        .rg-wire,
        .rg-rail {
          stroke: var(--software-pipeline-line);
          stroke-width: 1;
        }
        .rg-rail { stroke-dasharray: 4 5; stroke: var(--software-pipeline-line-soft); }
        .rg-back { stroke: var(--software-pipeline-line-deep); }
        .rg-tie { stroke: var(--software-pipeline-line-tie); }

        .rg-box,
        .rg-ag-box,
        .rg-unit,
        .rg-code-box,
        .rg-code-bar {
          vector-effect: non-scaling-stroke;
        }

        .rg-box,
        .rg-ag-box {
          fill: var(--software-pipeline-surface);
          stroke: var(--software-pipeline-border);
          stroke-width: 1;
        }

        .rg-lip { fill: var(--software-pipeline-lip); }
        .prompt .rg-lip { fill: var(--software-pipeline-purple); }
        .router .rg-lip { fill: var(--software-pipeline-blue); }
        .gate .rg-lip { fill: var(--software-pipeline-gate); }
        .ship .rg-lip { fill: var(--software-pipeline-olive); }

        .rg-nm {
          fill: var(--software-pipeline-text);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 12px;
          font-weight: 650;
        }

        .rg-sb {
          fill: var(--software-pipeline-text-muted);
          font-size: 7.4px;
          letter-spacing: .85px;
          text-transform: uppercase;
        }

        .rg-unit {
          fill: var(--software-pipeline-surface-soft);
          stroke: var(--software-pipeline-unit-edge);
          stroke-width: .8;
        }

        .rg-vent { stroke: var(--software-pipeline-vent); stroke-width: .8; }
        .rg-slot { fill: none; stroke: var(--software-pipeline-slot); stroke-width: 1.7; stroke-linecap: round; }
        .rg-led { fill: var(--software-pipeline-led-idle); }
        .rg-feet { stroke: var(--software-pipeline-feet); stroke-width: .8; }

        .rg-ag-box { fill: var(--software-pipeline-surface-soft); }
        .rg-ag-dot { fill: var(--software-pipeline-card-dot); }
        .rg-ag-nm {
          fill: var(--software-pipeline-card-title);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 11px;
          font-weight: 600;
        }
        .rg-ag-out { fill: var(--software-pipeline-card-copy); font-size: 7.4px; }
        .rg-ag-run {
          fill: none;
          stroke: var(--software-pipeline-progress);
          stroke-width: 1.25;
          stroke-dasharray: 188;
          stroke-dashoffset: 188;
          vector-effect: non-scaling-stroke;
        }

        .rg-chip .rg-pin { stroke: var(--software-pipeline-chip-pin); stroke-width: .9; }
        .rg-chip-pkg { fill: var(--software-pipeline-chip-bg); stroke: var(--software-pipeline-chip-edge); stroke-width: 1; }
        .rg-chip-die { fill: var(--software-pipeline-chip-core); stroke: var(--software-pipeline-chip-core-edge); stroke-width: .8; }

        .rg-db-body { fill: var(--software-pipeline-db-body); stroke: var(--software-pipeline-db-edge); stroke-width: .8; }
        .rg-db-top { fill: var(--software-pipeline-db-top); stroke: var(--software-pipeline-db-top-edge); stroke-width: .8; }

        .rg-cloud-body { fill: none; stroke: var(--software-pipeline-cloud); stroke-width: 1; }
        .rg-chip-t { fill: var(--software-pipeline-cloud-copy); font-size: 7.5px; letter-spacing: 1px; }

        .rg-code-box { fill: var(--software-pipeline-surface-soft); stroke: var(--software-pipeline-code-edge); stroke-width: .9; }
        .rg-code-bar { fill: var(--software-pipeline-code-bar); stroke: var(--software-pipeline-code-edge); stroke-width: .8; }
        .rg-code-dot { fill: var(--software-pipeline-code-dot); }
        .rg-code-ln { stroke-width: 1.7; stroke-linecap: round; }
        .k-kw { stroke: var(--software-pipeline-code-keyword); }
        .k-id { stroke: var(--software-pipeline-code-identifier); }
        .k-st { stroke: var(--software-pipeline-code-string); }

        .robot .shadow { fill: var(--software-pipeline-robot-shadow); opacity: .55; }
        .robot .limb { fill: var(--software-pipeline-robot-limb); stroke: var(--software-pipeline-robot-limb-edge); stroke-width: .75; }
        .robot .joint { fill: var(--software-pipeline-robot-joint); stroke: var(--software-pipeline-robot-joint-edge); stroke-width: .75; }
        .robot .foot,
        .robot .grip { fill: var(--software-pipeline-robot-foot); stroke: var(--software-pipeline-robot-foot-edge); stroke-width: .75; }
        .robot .body { fill: var(--software-pipeline-robot-body); stroke: var(--software-pipeline-robot-body-edge); stroke-width: .85; }
        .robot .vent { fill: var(--software-pipeline-robot-vent); }
        .robot .core { fill: var(--software-pipeline-robot-core); stroke: var(--software-pipeline-robot-core-edge); stroke-width: .7; }
        .robot .neck { fill: var(--software-pipeline-robot-neck); stroke: var(--software-pipeline-robot-neck-edge); stroke-width: .7; }
        .robot .head { fill: var(--software-pipeline-robot-head); stroke: var(--software-pipeline-robot-head-edge); stroke-width: .85; }
        .robot .visor { fill: var(--software-pipeline-robot-visor); stroke: var(--software-pipeline-robot-visor-edge); stroke-width: .65; }
        .robot .eye { fill: var(--software-pipeline-robot-eye); }
        .robot .ant { fill: none; stroke: var(--software-pipeline-robot-antenna); stroke-width: .8; }
        .robot .ant-led { fill: var(--software-pipeline-robot-antenna-led); }

        .rg-think-t {
          fill: var(--software-pipeline-status-copy);
          font-size: 8.5px;
          letter-spacing: .25px;
        }
        .rg-think-d { fill: var(--software-pipeline-status-dot); }

        .prompt .rg-led { animation: prompt-led ${PIPELINE_DURATION}s linear forwards; }
        .router .rg-led { animation: router-led ${PIPELINE_DURATION}s linear forwards; }
        .gate .rg-led { animation: gate-led ${PIPELINE_DURATION}s linear forwards; }
        .ship .rg-led { animation: ship-led ${PIPELINE_DURATION}s linear forwards; }
        .rg-ag-dot { animation: dev-dot ${PIPELINE_DURATION}s linear forwards; }
        .rg-ag-run { animation: dev-run ${PIPELINE_DURATION}s linear forwards; }
        .rg-fan .rg-wire { animation: dev-wire ${PIPELINE_DURATION}s linear forwards; }

        @keyframes prompt-led {
          0%, 7% { fill: var(--software-pipeline-accent); }
          10%, 100% { fill: var(--software-pipeline-led-idle); }
        }
        @keyframes router-led {
          0%, 8% { fill: var(--software-pipeline-led-idle); }
          10%, 18% { fill: var(--software-pipeline-accent); }
          21%, 100% { fill: var(--software-pipeline-led-idle); }
        }
        @keyframes dev-dot {
          0%, 18% { fill: var(--software-pipeline-card-dot); }
          20%, 38% { fill: var(--software-pipeline-accent); }
          41%, 100% { fill: var(--software-pipeline-card-dot); }
        }
        @keyframes dev-run {
          0%, 18% { stroke: var(--software-pipeline-progress); stroke-dashoffset: 188; }
          20% { stroke: var(--software-pipeline-accent-dim); stroke-dashoffset: 188; }
          37%, 100% { stroke: var(--software-pipeline-accent-dim); stroke-dashoffset: 0; }
        }
        @keyframes dev-wire {
          0%, 18% { stroke: var(--software-pipeline-line); }
          20%, 38% { stroke: var(--software-pipeline-wire-active); }
          41%, 100% { stroke: var(--software-pipeline-line); }
        }
        @keyframes gate-led {
          0%, 38% { fill: var(--software-pipeline-led-idle); }
          40%, 50% { fill: var(--software-pipeline-accent); }
          53%, 100% { fill: var(--software-pipeline-led-idle); }
        }
        @keyframes ship-led {
          0%, 50% { fill: var(--software-pipeline-led-idle); }
          53%, 100% { fill: var(--software-pipeline-accent); }
        }

        @media (prefers-reduced-motion: reduce) {
          .prompt .rg-led,
          .router .rg-led,
          .gate .rg-led,
          .ship .rg-led,
          .rg-ag-dot,
          .rg-ag-run,
          .rg-fan .rg-wire {
            animation: none;
          }
        }
      `}</style>

      <g className="sd-pipeline">
        <rect className="sd-bg" x="0" y="0" width="980" height="272" />
        <path className="rg-ground" d="M0 250 H980" />
        <g aria-hidden="true" className="rg-brd">
          <path className="rg-brd-bus" d="M0 254 H980" />
          <path className="rg-brd-bus" d="M0 261 H980" />
          <g>
            <circle className="rg-brd-via" cx="3" cy="254" r="1.1" />
            <g className="rg-brd-pkg">
              <path className="rg-brd-chip" d="M0 255.5 h9 v4 h-9 z" />
              <path className="rg-brd-pin" d="M1.5 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M4.5 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M7.5 255.5 v-1.6" />
            </g>
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="34.61290322580645"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-res"
              d="M32.61290322580645 256 h5 v3 h-5 z"
            />
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="66.2258064516129"
              cy="254"
              r="1.1"
            />
            <circle
              className="rg-brd-cap"
              cx="66.2258064516129"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <path
              className="rg-brd-trace"
              d="M82.03225806451613 254 l3 3.5 H91.03225806451613"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="97.83870967741936"
              cy="254"
              r="1.1"
            />
            <path className="rg-brd-silk" d="M97.83870967741936 262.6 h4" />
          </g>
          <g>
            <g className="rg-brd-pkg">
              <path
                className="rg-brd-chip"
                d="M110.64516129032258 255.5 h9 v4 h-9 z"
              />
              <path
                className="rg-brd-pin"
                d="M112.14516129032258 255.5 v-1.6"
              />
              <path
                className="rg-brd-pin"
                d="M115.14516129032258 255.5 v-1.6"
              />
              <path
                className="rg-brd-pin"
                d="M118.14516129032258 255.5 v-1.6"
              />
            </g>
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="129.4516129032258"
              cy="254"
              r="1.1"
            />
          </g>
          <g>
            <path
              className="rg-brd-res"
              d="M143.25806451612902 256 h5 v3 h-5 z"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="161.06451612903226"
              cy="254"
              r="1.1"
            />
          </g>
          <g>
            <circle
              className="rg-brd-cap"
              cx="176.8709677419355"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="192.67741935483872"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-trace"
              d="M192.67741935483872 254 l3 3.5 H201.67741935483872"
            />
          </g>
          <g>
            <path className="rg-brd-silk" d="M208.48387096774195 262.6 h4" />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="224.29032258064515"
              cy="254"
              r="1.1"
            />
            <g className="rg-brd-pkg">
              <path
                className="rg-brd-chip"
                d="M221.29032258064515 255.5 h9 v4 h-9 z"
              />
              <path
                className="rg-brd-pin"
                d="M222.79032258064515 255.5 v-1.6"
              />
              <path
                className="rg-brd-pin"
                d="M225.79032258064515 255.5 v-1.6"
              />
              <path
                className="rg-brd-pin"
                d="M228.79032258064515 255.5 v-1.6"
              />
            </g>
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="255.90322580645162"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-res"
              d="M253.90322580645162 256 h5 v3 h-5 z"
            />
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="287.51612903225805"
              cy="254"
              r="1.1"
            />
            <circle
              className="rg-brd-cap"
              cx="287.51612903225805"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <path
              className="rg-brd-trace"
              d="M303.3225806451613 254 l3 3.5 H312.3225806451613"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="319.1290322580645"
              cy="254"
              r="1.1"
            />
            <path className="rg-brd-silk" d="M319.1290322580645 262.6 h4" />
          </g>
          <g>
            <g className="rg-brd-pkg">
              <path
                className="rg-brd-chip"
                d="M331.93548387096774 255.5 h9 v4 h-9 z"
              />
              <path
                className="rg-brd-pin"
                d="M333.43548387096774 255.5 v-1.6"
              />
              <path
                className="rg-brd-pin"
                d="M336.43548387096774 255.5 v-1.6"
              />
              <path
                className="rg-brd-pin"
                d="M339.43548387096774 255.5 v-1.6"
              />
            </g>
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="350.741935483871"
              cy="254"
              r="1.1"
            />
          </g>
          <g>
            <path
              className="rg-brd-res"
              d="M364.5483870967742 256 h5 v3 h-5 z"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="382.35483870967744"
              cy="254"
              r="1.1"
            />
          </g>
          <g>
            <circle
              className="rg-brd-cap"
              cx="398.16129032258067"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="413.9677419354839"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-trace"
              d="M413.9677419354839 254 l3 3.5 H422.9677419354839"
            />
          </g>
          <g>
            <path className="rg-brd-silk" d="M429.7741935483871 262.6 h4" />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="445.5806451612903"
              cy="254"
              r="1.1"
            />
            <g className="rg-brd-pkg">
              <path
                className="rg-brd-chip"
                d="M442.5806451612903 255.5 h9 v4 h-9 z"
              />
              <path className="rg-brd-pin" d="M444.0806451612903 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M447.0806451612903 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M450.0806451612903 255.5 v-1.6" />
            </g>
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="477.19354838709677"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-res"
              d="M475.19354838709677 256 h5 v3 h-5 z"
            />
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="508.80645161290323"
              cy="254"
              r="1.1"
            />
            <circle
              className="rg-brd-cap"
              cx="508.80645161290323"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <path
              className="rg-brd-trace"
              d="M524.6129032258065 254 l3 3.5 H533.6129032258065"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="540.4193548387096"
              cy="254"
              r="1.1"
            />
            <path className="rg-brd-silk" d="M540.4193548387096 262.6 h4" />
          </g>
          <g>
            <g className="rg-brd-pkg">
              <path
                className="rg-brd-chip"
                d="M553.2258064516129 255.5 h9 v4 h-9 z"
              />
              <path className="rg-brd-pin" d="M554.7258064516129 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M557.7258064516129 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M560.7258064516129 255.5 v-1.6" />
            </g>
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="572.0322580645161"
              cy="254"
              r="1.1"
            />
          </g>
          <g>
            <path
              className="rg-brd-res"
              d="M585.8387096774194 256 h5 v3 h-5 z"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="603.6451612903226"
              cy="254"
              r="1.1"
            />
          </g>
          <g>
            <circle
              className="rg-brd-cap"
              cx="619.4516129032259"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="635.258064516129"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-trace"
              d="M635.258064516129 254 l3 3.5 H644.258064516129"
            />
          </g>
          <g>
            <path className="rg-brd-silk" d="M651.0645161290323 262.6 h4" />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="666.8709677419355"
              cy="254"
              r="1.1"
            />
            <g className="rg-brd-pkg">
              <path
                className="rg-brd-chip"
                d="M663.8709677419355 255.5 h9 v4 h-9 z"
              />
              <path className="rg-brd-pin" d="M665.3709677419355 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M668.3709677419355 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M671.3709677419355 255.5 v-1.6" />
            </g>
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="698.483870967742"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-res"
              d="M696.483870967742 256 h5 v3 h-5 z"
            />
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="730.0967741935484"
              cy="254"
              r="1.1"
            />
            <circle
              className="rg-brd-cap"
              cx="730.0967741935484"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <path
              className="rg-brd-trace"
              d="M745.9032258064516 254 l3 3.5 H754.9032258064516"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="761.7096774193549"
              cy="254"
              r="1.1"
            />
            <path className="rg-brd-silk" d="M761.7096774193549 262.6 h4" />
          </g>
          <g>
            <g className="rg-brd-pkg">
              <path
                className="rg-brd-chip"
                d="M774.516129032258 255.5 h9 v4 h-9 z"
              />
              <path className="rg-brd-pin" d="M776.016129032258 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M779.016129032258 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M782.016129032258 255.5 v-1.6" />
            </g>
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="793.3225806451613"
              cy="254"
              r="1.1"
            />
          </g>
          <g>
            <path
              className="rg-brd-res"
              d="M807.1290322580645 256 h5 v3 h-5 z"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="824.9354838709678"
              cy="254"
              r="1.1"
            />
          </g>
          <g>
            <circle
              className="rg-brd-cap"
              cx="840.741935483871"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="856.5483870967741"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-trace"
              d="M856.5483870967741 254 l3 3.5 H865.5483870967741"
            />
          </g>
          <g>
            <path className="rg-brd-silk" d="M872.3548387096774 262.6 h4" />
          </g>
          <g>
            <circle
              className="rg-brd-via"
              cx="888.1612903225806"
              cy="254"
              r="1.1"
            />
            <g className="rg-brd-pkg">
              <path
                className="rg-brd-chip"
                d="M885.1612903225806 255.5 h9 v4 h-9 z"
              />
              <path className="rg-brd-pin" d="M886.6612903225806 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M889.6612903225806 255.5 v-1.6" />
              <path className="rg-brd-pin" d="M892.6612903225806 255.5 v-1.6" />
            </g>
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="919.7741935483871"
              cy="254"
              r="1.1"
            />
            <path
              className="rg-brd-res"
              d="M917.7741935483871 256 h5 v3 h-5 z"
            />
          </g>
          <g />
          <g>
            <circle
              className="rg-brd-via"
              cx="951.3870967741935"
              cy="254"
              r="1.1"
            />
            <circle
              className="rg-brd-cap"
              cx="951.3870967741935"
              cy="257.5"
              r="2"
            />
          </g>
          <g>
            <path
              className="rg-brd-trace"
              d="M967.1935483870968 254 l3 3.5 H976.1935483870968"
            />
          </g>
        </g>
        <path className="rg-skirt" d="M0 265 H980" />
        <path className="rg-drop" d="M534 113 H559" />
        <path className="rg-drop" d="M559 113 V124" />
        <path className="rg-drop" d="M559 124 V176" />
        <path className="rg-drop" d="M562 205 V250" />
        <g transform="translate(548 102) scale(.66)">
          <g className="rg-prop rg-chip">
            <g>
              <path className="rg-pin" d="M8 0 v-5" />
              <path className="rg-pin" d="M8 34 v5" />
              <path className="rg-pin" d="M0 8 h-5" />
              <path className="rg-pin" d="M34 8 h5" />
            </g>
            <g>
              <path className="rg-pin" d="M15 0 v-5" />
              <path className="rg-pin" d="M15 34 v5" />
              <path className="rg-pin" d="M0 15 h-5" />
              <path className="rg-pin" d="M34 15 h5" />
            </g>
            <g>
              <path className="rg-pin" d="M22 0 v-5" />
              <path className="rg-pin" d="M22 34 v5" />
              <path className="rg-pin" d="M0 22 h-5" />
              <path className="rg-pin" d="M34 22 h5" />
            </g>
            <g>
              <path className="rg-pin" d="M29 0 v-5" />
              <path className="rg-pin" d="M29 34 v5" />
              <path className="rg-pin" d="M0 29 h-5" />
              <path className="rg-pin" d="M34 29 h5" />
            </g>
            <path className="rg-chip-pkg" d="M0 0 h34 v34 h-34 z" />
            <path className="rg-chip-die" d="M10 10 h14 v14 h-14 z" />
          </g>
        </g>
        <g transform="translate(552 176) scale(.72)">
          <g className="rg-prop rg-db">
            <g>
              <path
                className="rg-db-body"
                d="M0 24 v8 a13 4.6 0 0 0 26 0 v-8 z"
              />
              <ellipse className="rg-db-top" cx="13" cy="24" rx="13" ry="4.6" />
            </g>
            <g>
              <path
                className="rg-db-body"
                d="M0 12 v8 a13 4.6 0 0 0 26 0 v-8 z"
              />
              <ellipse className="rg-db-top" cx="13" cy="12" rx="13" ry="4.6" />
            </g>
            <g>
              <path
                className="rg-db-body"
                d="M0 0 v8 a13 4.6 0 0 0 26 0 v-8 z"
              />
              <ellipse className="rg-db-top" cx="13" cy="0" rx="13" ry="4.6" />
            </g>
          </g>
        </g>
        <g className="rg-prop rg-cloud">
          <path
            className="rg-cloud-body"
            d="M901 142 a9.5 9.5 0 0 1 2 -18 a12.5 12.5 0 0 1 23 -2.5 a8.5 8.5 0 0 1 7 20.5 z"
          />
          <text className="rg-chip-t" x="913" y="154">
            PROD
          </text>
        </g>
        <g className="rg-prop rg-code">
          <path className="rg-code-box" d="M888 180 h84 v70 h-84 z" />
          <path className="rg-code-bar" d="M888 180 h84 v11 h-84 z" />
          <circle className="rg-code-dot" cx="896" cy="185.5" r="1.8" />
          <circle className="rg-code-dot" cx="903" cy="185.5" r="1.8" />
          <circle className="rg-code-dot" cx="910" cy="185.5" r="1.8" />
          <path className="rg-code-ln k-kw" d="M896 202 h22" />
          <path className="rg-code-ln k-id" d="M922 207.4 h30" />
          <path className="rg-code-ln k-kw" d="M902 212.8 h16" />
          <path className="rg-code-ln k-st" d="M922 218.2 h34" />
          <path className="rg-code-ln k-id" d="M902 223.6 h30" />
          <path className="rg-code-ln k-kw" d="M896 229 h14" />
          <path className="rg-code-ln k-st" d="M914 234.4 h26" />
          <path className="rg-code-ln k-id" d="M902 239.8 h20" />
          <path className="rg-code-ln k-kw" d="M926 245.2 h18" />
        </g>
        <path className="rg-wire rg-tie" d="M876 152 H930 V180" />
        <g className="rg-store">
          <path className="rg-drop" d="M384 136 V250" />
          <path className="rg-drop" d="M440 192 V250" />
          <path className="rg-drop" d="M496 248 V250" />
        </g>
        <path
          className="rg-rail"
          d="M110 152 H300 M534 152 H606 M690 152 H760"
        />
        <g className="rg-fan">
          <path className="rg-wire" d="M300 152 C324 152 324 116 344 116" />
          <path className="rg-wire" d="M534 116 C554 116 554 152 578 152" />
        </g>
        <g className="rg-fan">
          <path className="rg-wire" d="M300 152 C324 152 324 172 344 172" />
          <path className="rg-wire" d="M534 172 C554 172 554 152 578 152" />
        </g>
        <g className="rg-fan">
          <path className="rg-wire" d="M300 152 C324 152 324 228 344 228" />
          <path className="rg-wire" d="M534 228 C554 228 554 152 578 152" />
        </g>
        <path className="rg-rail rg-back" d="M648 246 H256 V196" />
        <g className="rg-stn prompt">
          <path className="rg-box" d="M62 250 V176 h100 V250 z" />
          <path className="rg-lip" d="M62 176 h100 v7 h-100 z" />
          <text className="rg-nm" x="73" y="199">
            Plan
          </text>
          <text className="rg-sb" x="73" y="212">
            scope · specs
          </text>
          <g>
            <path className="rg-unit" d="M70 210 h84 v15 h-84 z" />
            <path className="rg-vent" d="M88 214 v7" />
            <path className="rg-vent" d="M93 214 v7" />
            <path className="rg-vent" d="M98 214 v7" />
            <path className="rg-vent" d="M103 214 v7" />
            <path className="rg-vent" d="M108 214 v7" />
            <circle className="rg-led l0" cx="78" cy="217.5" r="2.6" />
            <path className="rg-slot" d="M136 217.5 h14" />
          </g>
          <g>
            <path className="rg-unit" d="M70 230 h84 v15 h-84 z" />
            <path className="rg-vent" d="M88 234 v7" />
            <path className="rg-vent" d="M93 234 v7" />
            <path className="rg-vent" d="M98 234 v7" />
            <path className="rg-vent" d="M103 234 v7" />
            <path className="rg-vent" d="M108 234 v7" />
            <circle className="rg-led l1" cx="78" cy="237.5" r="2.6" />
            <path className="rg-slot" d="M136 237.5 h14" />
          </g>
          <path className="rg-feet" d="M68 250 v-4 M156 250 v-4" />
        </g>
        <g className="rg-stn router">
          <path className="rg-box" d="M218 250 V158 h88 V250 z" />
          <path className="rg-lip" d="M218 158 h88 v7 h-88 z" />
          <text className="rg-nm" x="229" y="181">
            Design
          </text>
          <text className="rg-sb" x="229" y="194">
            flow · api
          </text>
          <g>
            <path className="rg-unit" d="M226 210 h72 v15 h-72 z" />
            <path className="rg-vent" d="M244 214 v7" />
            <path className="rg-vent" d="M249 214 v7" />
            <path className="rg-vent" d="M254 214 v7" />
            <path className="rg-vent" d="M259 214 v7" />
            <path className="rg-vent" d="M264 214 v7" />
            <circle className="rg-led l0" cx="234" cy="217.5" r="2.6" />
            <path className="rg-slot" d="M280 217.5 h14" />
          </g>
          <g>
            <path className="rg-unit" d="M226 230 h72 v15 h-72 z" />
            <path className="rg-vent" d="M244 234 v7" />
            <path className="rg-vent" d="M249 234 v7" />
            <path className="rg-vent" d="M254 234 v7" />
            <path className="rg-vent" d="M259 234 v7" />
            <path className="rg-vent" d="M264 234 v7" />
            <circle className="rg-led l1" cx="234" cy="237.5" r="2.6" />
            <path className="rg-slot" d="M280 237.5 h14" />
          </g>
          <path className="rg-feet" d="M224 250 v-4 M300 250 v-4" />
        </g>
        <g className="rg-stn gate">
          <path className="rg-box" d="M606 250 V154 h92 V250 z" />
          <path className="rg-lip" d="M606 154 h92 v7 h-92 z" />
          <text className="rg-nm" x="617" y="177">
            QA Gate
          </text>
          <text className="rg-sb" x="617" y="190">
            lint · type
          </text>
          <text className="rg-sb" x="617" y="200">
            · test
          </text>
          <g>
            <path className="rg-unit" d="M614 210 h76 v15 h-76 z" />
            <path className="rg-vent" d="M632 214 v7" />
            <path className="rg-vent" d="M637 214 v7" />
            <path className="rg-vent" d="M642 214 v7" />
            <path className="rg-vent" d="M647 214 v7" />
            <path className="rg-vent" d="M652 214 v7" />
            <circle className="rg-led l0" cx="622" cy="217.5" r="2.6" />
            <path className="rg-slot" d="M672 217.5 h14" />
          </g>
          <g>
            <path className="rg-unit" d="M614 230 h76 v15 h-76 z" />
            <path className="rg-vent" d="M632 234 v7" />
            <path className="rg-vent" d="M637 234 v7" />
            <path className="rg-vent" d="M642 234 v7" />
            <path className="rg-vent" d="M647 234 v7" />
            <path className="rg-vent" d="M652 234 v7" />
            <circle className="rg-led l1" cx="622" cy="237.5" r="2.6" />
            <path className="rg-slot" d="M672 237.5 h14" />
          </g>
          <path className="rg-feet" d="M612 250 v-4 M692 250 v-4" />
        </g>
        <g className="rg-stn ship is-live">
          <path className="rg-box" d="M764 250 V172 h112 V250 z" />
          <path className="rg-lip" d="M764 172 h112 v7 h-112 z" />
          <text className="rg-nm" x="775" y="195">
            Release
          </text>
          <text className="rg-sb" x="775" y="208">
            git · ci/cd
          </text>
          <g>
            <path className="rg-unit" d="M772 210 h96 v15 h-96 z" />
            <path className="rg-vent" d="M790 214 v7" />
            <path className="rg-vent" d="M795 214 v7" />
            <path className="rg-vent" d="M800 214 v7" />
            <path className="rg-vent" d="M805 214 v7" />
            <path className="rg-vent" d="M810 214 v7" />
            <circle className="rg-led l0" cx="780" cy="217.5" r="2.6" />
            <path className="rg-slot" d="M850 217.5 h14" />
          </g>
          <g>
            <path className="rg-unit" d="M772 230 h96 v15 h-96 z" />
            <path className="rg-vent" d="M790 234 v7" />
            <path className="rg-vent" d="M795 234 v7" />
            <path className="rg-vent" d="M800 234 v7" />
            <path className="rg-vent" d="M805 234 v7" />
            <path className="rg-vent" d="M810 234 v7" />
            <circle className="rg-led l1" cx="780" cy="237.5" r="2.6" />
            <path className="rg-slot" d="M850 237.5 h14" />
          </g>
          <path className="rg-feet" d="M770 250 v-4 M870 250 v-4" />
        </g>
        <g className="rg-ag">
          <path className="rg-ag-box" d="M344 96 h190 v40 h-190 z" />
          <circle className="rg-ag-dot" cx="359" cy="116" r="5" />
          <text className="rg-ag-nm" x="374" y="114">
            Frontend
          </text>
          <text className="rg-ag-out" x="374" y="127">
            react · typescript
          </text>
          <path className="rg-ag-run" d="M345 134 h188" />
        </g>
        <g className="rg-ag">
          <path className="rg-ag-box" d="M344 152 h190 v40 h-190 z" />
          <circle className="rg-ag-dot" cx="359" cy="172" r="5" />
          <text className="rg-ag-nm" x="374" y="170">
            Backend
          </text>
          <text className="rg-ag-out" x="374" y="183">
            node · services
          </text>
          <path className="rg-ag-run" d="M345 190 h188" />
        </g>
        <g className="rg-ag">
          <path className="rg-ag-box" d="M344 208 h190 v40 h-190 z" />
          <circle className="rg-ag-dot" cx="359" cy="228" r="5" />
          <text className="rg-ag-nm" x="374" y="226">
            Testing
          </text>
          <text className="rg-ag-out" x="374" y="239">
            unit · e2e · a11y
          </text>
          <path className="rg-ag-run" d="M345 246 h188" />
        </g>
        <WalkingRobot
          startX={112}
          endX={806}
          y={250}
          scale={0.74}
          duration={ROBOT_WALK_DURATION}
          animationId="softwareRobotTravel"
        />
      </g>
    </svg>
  )
}

type RobotBodyProps = {
  walkAnimationId?: string
}

export const RobotBody = ({
  walkAnimationId = 'softwareRobotTravel',
}: RobotBodyProps) => {
  const walkBegin = `${walkAnimationId}.begin`
  const walkEnd = `${walkAnimationId}.end`

  return (
    <g className="robot">
      {/* Final/front pose: appears exactly when the walk finishes. */}
      <g className="front" aria-hidden="true" opacity="0">
        <set attributeName="opacity" to="1" begin={walkEnd} fill="freeze" />

        <ellipse className="shadow" cx="0" cy="1.5" rx="14" ry="2.6" />
        <rect
          className="limb"
          x="-8.4"
          y="-24"
          width="6.4"
          height="20"
          rx="2"
        />
        <rect className="limb" x="2" y="-24" width="6.4" height="20" rx="2" />
        <rect className="foot" x="-10" y="-5" width="9.6" height="4" rx="1.2" />
        <rect className="foot" x="0.4" y="-5" width="9.6" height="4" rx="1.2" />
        <rect
          className="body"
          x="-11"
          y="-46"
          width="22"
          height="23"
          rx="4.5"
        />
        <rect className="vent" x="-6" y="-41" width="12" height="1.8" rx=".9" />
        <rect
          className="vent"
          x="-6"
          y="-37.4"
          width="12"
          height="1.8"
          rx=".9"
        />
        <circle className="core" cx="0" cy="-31" r="4">
          <animate
            attributeName="opacity"
            values=".65;1;.65"
            dur="1.6s"
            begin={walkEnd}
            repeatCount="indefinite"
          />
        </circle>
        <rect className="limb" x="-15.5" y="-44" width="5" height="17" rx="2" />

        {/* Right arm - raises once, then waves hello */}
        <g className="wave">
          {/* Raise arm from resting position */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 13 -45;-138 13 -45"
              keyTimes="0;1"
              dur=".38s"
              begin={`${walkEnd}+0.12s`}
              fill="freeze"
            />

            {/* Small repeated hello-wave after arm is raised */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="
          0 13 -45;
          -12 13 -45;
          10 13 -45;
          -10 13 -45;
          8 13 -45;
          -7 13 -45;
          0 13 -45
        "
                keyTimes="0;.16;.32;.48;.64;.8;1"
                dur=".9s"
                begin={`${walkEnd}+0.5s`}
                repeatCount="indefinite"
              />

              <rect
                className="limb"
                x="10.5"
                y="-45"
                width="5"
                height="16"
                rx="2"
              />

              <rect
                className="grip"
                x="10"
                y="-48.5"
                width="6"
                height="5"
                rx="1.8"
              />
            </g>
          </g>
        </g>

        <rect className="neck" x="-2.4" y="-50" width="4.8" height="4.6" />
        <rect
          className="head"
          x="-11"
          y="-64"
          width="22"
          height="14.5"
          rx="4.5"
        />
        <rect
          className="visor"
          x="-7.4"
          y="-60.4"
          width="14.8"
          height="6.4"
          rx="2.6"
        />
        <circle className="eye" cx="-3.4" cy="-57.2" r="1.5" />
        <circle className="eye" cx="3.4" cy="-57.2" r="1.5" />
        <path className="ant" d="M0 -64 v-7" />
        <circle className="ant-led" cx="0" cy="-72.5" r="2.4" />
      </g>

      {/* Side pose used only during travel. Geometry is the reference robot. */}
      <g className="side" opacity="1">
        <set attributeName="opacity" to="0" begin={walkEnd} fill="freeze" />

        <ellipse className="shadow" cx="1" cy="1.5" rx="13" ry="2.4">
          <animate
            attributeName="rx"
            values="13;11.8;13"
            dur=".31s"
            begin={walkBegin}
            end={walkEnd}
            repeatCount="indefinite"
          />
        </ellipse>

        <g className="jump">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;0 -1.7;0 0"
            dur=".31s"
            begin={walkBegin}
            end={walkEnd}
            repeatCount="indefinite"
          />

          <g className="hull">
            {/* Back leg */}
            <g className="leg leg-b" transform="translate(1.5 -26)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-22 0 0;22 0 0;-22 0 0"
                dur=".62s"
                begin={walkBegin}
                end={walkEnd}
                repeatCount="indefinite"
                additive="sum"
              />
              <g className="thigh">
                <rect
                  className="limb"
                  x="-3.2"
                  y="0"
                  width="6.4"
                  height="11"
                  rx="2"
                />
                <circle className="joint" cx="0" cy="11.5" r="2.8" />
                <g transform="translate(0 12)">
                  <g className="knee">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="26 0 0;-15 0 0;26 0 0"
                      dur=".62s"
                      begin={walkBegin}
                      end={walkEnd}
                      repeatCount="indefinite"
                    />
                    <rect
                      className="limb"
                      x="-2.8"
                      y="0"
                      width="5.6"
                      height="10"
                      rx="2"
                    />
                    <rect
                      className="foot"
                      x="-4.6"
                      y="9.4"
                      width="9.6"
                      height="4"
                      rx="1.2"
                    />
                  </g>
                </g>
              </g>
            </g>

            {/* Back arm */}
            <g className="arm arm-b" transform="translate(1.2 -44)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="22 0 0;-22 0 0;22 0 0"
                dur=".62s"
                begin={walkBegin}
                end={walkEnd}
                repeatCount="indefinite"
                additive="sum"
              />
              <g className="shoulder">
                <rect
                  className="limb"
                  x="-2.6"
                  y="0"
                  width="5.2"
                  height="9"
                  rx="2"
                />
                <circle className="joint" cx="0" cy="9.4" r="2.4" />
                <g transform="translate(0 10)">
                  <g className="elbow">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="-11 0 0;16 0 0;-11 0 0"
                      dur=".62s"
                      begin={walkBegin}
                      end={walkEnd}
                      repeatCount="indefinite"
                    />
                    <rect
                      className="limb"
                      x="-2.4"
                      y="0"
                      width="4.8"
                      height="8"
                      rx="2"
                    />
                    <rect
                      className="grip"
                      x="-3"
                      y="7.4"
                      width="6"
                      height="4.4"
                      rx="1.6"
                    />
                  </g>
                </g>
              </g>
            </g>

            <rect
              className="body"
              x="-8"
              y="-46"
              width="18.5"
              height="21"
              rx="4"
            />
            <rect
              className="vent"
              x="-4.6"
              y="-41"
              width="11.5"
              height="1.8"
              rx=".9"
            />
            <rect
              className="vent"
              x="-4.6"
              y="-37.4"
              width="11.5"
              height="1.8"
              rx=".9"
            />
            <circle className="core" cx="1.2" cy="-31" r="3.4" />

            {/* Front leg */}
            <g className="leg leg-a" transform="translate(1.5 -26)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="22 0 0;-22 0 0;22 0 0"
                dur=".62s"
                begin={walkBegin}
                end={walkEnd}
                repeatCount="indefinite"
                additive="sum"
              />
              <g className="thigh">
                <rect
                  className="limb"
                  x="-3.2"
                  y="0"
                  width="6.4"
                  height="11"
                  rx="2"
                />
                <circle className="joint" cx="0" cy="11.5" r="2.8" />
                <g transform="translate(0 12)">
                  <g className="knee">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="-15 0 0;26 0 0;-15 0 0"
                      dur=".62s"
                      begin={walkBegin}
                      end={walkEnd}
                      repeatCount="indefinite"
                    />
                    <rect
                      className="limb"
                      x="-2.8"
                      y="0"
                      width="5.6"
                      height="10"
                      rx="2"
                    />
                    <rect
                      className="foot"
                      x="-4.6"
                      y="9.4"
                      width="9.6"
                      height="4"
                      rx="1.2"
                    />
                  </g>
                </g>
              </g>
            </g>

            {/* Front arm */}
            <g className="arm arm-a" transform="translate(1.2 -44)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="-22 0 0;22 0 0;-22 0 0"
                dur=".62s"
                begin={walkBegin}
                end={walkEnd}
                repeatCount="indefinite"
                additive="sum"
              />
              <g className="shoulder">
                <rect
                  className="limb"
                  x="-2.6"
                  y="0"
                  width="5.2"
                  height="9"
                  rx="2"
                />
                <circle className="joint" cx="0" cy="9.4" r="2.4" />
                <g transform="translate(0 10)">
                  <g className="elbow">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="16 0 0;-11 0 0;16 0 0"
                      dur=".62s"
                      begin={walkBegin}
                      end={walkEnd}
                      repeatCount="indefinite"
                    />
                    <rect
                      className="limb"
                      x="-2.4"
                      y="0"
                      width="4.8"
                      height="8"
                      rx="2"
                    />
                    <rect
                      className="grip"
                      x="-3"
                      y="7.4"
                      width="6"
                      height="4.4"
                      rx="1.6"
                    />
                  </g>
                </g>
              </g>
            </g>

            <rect className="neck" x="-1" y="-50" width="4.6" height="4.6" />
            <rect
              className="head"
              x="-7.5"
              y="-63"
              width="18"
              height="13.5"
              rx="4"
            />
            <rect
              className="visor"
              x="-3.4"
              y="-59.6"
              width="12"
              height="5.6"
              rx="2.4"
            />
            <path className="ant" d="M6.5 -63 v-7" />
            <circle className="ant-led" cx="6.5" cy="-71.5" r="2.4" />
          </g>
        </g>
      </g>
    </g>
  )
}

type WalkingRobotProps = {
  startX?: number
  endX?: number
  y?: number
  scale?: number
  duration?: number
  animationId?: string
}

export const WalkingRobot = ({
  startX = 112,
  endX = 806,
  y = 250,
  scale = 0.74,
  duration = ROBOT_WALK_DURATION,
  animationId = 'softwareRobotTravel',
}: WalkingRobotProps) => {
  const distance = endX - startX

  return (
    <g className="rg-bot" transform={`translate(${startX} ${y})`}>
      <g>
        <animateTransform
          id={animationId}
          attributeName="transform"
          type="translate"
          from="0 0"
          to={`${distance} 0`}
          dur={`${duration}s`}
          begin="0s"
          fill="freeze"
          calcMode="linear"
        />

        <g transform={`scale(${scale})`}>
          <RobotBody walkAnimationId={animationId} />

          <g className="rg-think" aria-hidden="true" opacity="0">
            <set
              attributeName="opacity"
              to="1"
              begin={`${animationId}.end+0.28s`}
              fill="freeze"
            />
            <text className="rg-think-t" x="-34" y="-147">
              Deploying
            </text>
            <circle className="rg-think-d" cx="23" cy="-150" r="1.9">
              <animate
                attributeName="opacity"
                values=".25;1;.25"
                dur=".82s"
                begin={`${animationId}.end+0.28s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle className="rg-think-d" cx="30" cy="-150" r="1.9">
              <animate
                attributeName="opacity"
                values=".25;1;.25"
                dur=".82s"
                begin={`${animationId}.end+0.46s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle className="rg-think-d" cx="37" cy="-150" r="1.9">
              <animate
                attributeName="opacity"
                values=".25;1;.25"
                dur=".82s"
                begin={`${animationId}.end+0.64s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </g>
    </g>
  )
}
