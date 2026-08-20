"use client";

import { Download, ArrowUpRight, Terminal as TerminalIcon } from "lucide-react";

function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angle: number
) {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
}

function donutSegment(
  cx: number,
  cy: number,
  outerRadius: number,
  innerRadius: number,
  startAngle: number,
  endAngle: number
) {
  const outerStart = polarToCartesian(
    cx,
    cy,
    outerRadius,
    startAngle
  );

  const outerEnd = polarToCartesian(
    cx,
    cy,
    outerRadius,
    endAngle
  );

  const innerEnd = polarToCartesian(
    cx,
    cy,
    innerRadius,
    endAngle
  );

  const innerStart = polarToCartesian(
    cx,
    cy,
    innerRadius,
    startAngle
  );

  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return `
    M ${outerStart.x} ${outerStart.y}
    A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}
    L ${innerEnd.x} ${innerEnd.y}
    A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}
    Z
  `;
}

const devSegments = [
  {
    label: "CREATE",
    color: "#9aaa20",
    start: -46,
    end: 40,
    labelX: 145,
    labelY: 100,
    rotate: -45,
  },
  {
    label: "PLAN",
    color: "#168c9b",
    start: 44,
    end: 130,
    labelX: 275,
    labelY: 100,
    rotate: 38,
  },
  {
    label: "PACKAGE",
    color: "#3fa8e8",
    start: 134,
    end: 220,
    labelX: 280,
    labelY: 320,
    rotate: -40,
  },
  {
    label: "VERIFY",
    color: "#3d3bb5",
    start: 224,
    end: 310,
    labelX: 125,
    labelY: 320,
    rotate: 40,
  },
];

const opsSegments = [
  {
    label: "RELEASE",
    color: "#fa551d",
    start: -46,
    end: 40,
    labelX: 445,
    labelY: 100,
    rotate: -45,
  },
  {
    label: "CONFIGURE",
    color: "#9165a8",
    start: 44,
    end: 130,
    labelX: 585,
    labelY: 105,
    rotate: 43,
  },
  {
    label: "MONITOR",
    color: "#c3292e",
    start: 134,
    end: 220,
    labelX: 585,
    labelY: 320,
    rotate: -38,
  },
  {
    label: "OPERATE",
    color: "#178b96",
    start: 224,
    end: 310,
    labelX: 445,
    labelY: 320,
    rotate: 38,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}
        <div className="absolute left-[45%] top-[30%] h-105 w-105 -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

        <div className="absolute right-[5%] top-[15%] h-75 w-75 rounded-full bg-violet-500/2.5 blur-[100px]" />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            bg-[linear-gradient(rgba(34,211,238,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.5)_1px,transparent_1px)]
            bg-size-[70px_70px]
          "
        />

        {/* Horizontal scan line */}
        <div className="absolute left-0 right-0 top-[20%] h-px bg-linear-to-r from-transparent via-cyan-400/10 to-transparent" />

        <div className="absolute left-0 right-0 top-[72%] h-px bg-linear-to-r from-transparent via-cyan-400/6 to-transparent" />

      </div>


      {/* ===================================================== */}
      {/* HERO CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">


            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <div className="max-w-2xl">

              {/* Availability */}
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-[#07131b]/70 px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-gray-400 backdrop-blur-md">

                <span className="relative flex h-2 w-2">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                </span>

                AVAILABLE FOR DEVOPS / CLOUD ROLES

              </div>


              {/* Small terminal label */}
              <div className="mb-4 flex items-center gap-2 font-mono text-xs text-cyan-400/60">

                <span className="text-cyan-500">
                  &gt;_
                </span>

                <span>
                  whoami
                </span>

                <span className="text-gray-600">
                  //
                </span>

                <span className="text-gray-500">
                  cloud.engineer
                </span>

              </div>


              {/* Name */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">

                Atharv

                <span className="block text-cyan-400">
                  Dange<span className="text-cyan-500/50">.</span>
                </span>

              </h1>


              {/* Role */}
              <div className="mt-5">

                <h2 className="text-xl font-medium text-gray-200 sm:text-2xl">

                  DevOps Engineer

                  <span className="mx-2 text-cyan-400/40">
                    |
                  </span>

                  AWS Cloud Engineer

                </h2>

              </div>


              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">

                Building reliable cloud infrastructure, automating deployments,
                and turning complex infrastructure into simple,
                scalable systems.

              </p>


              {/* ================================================= */}
              {/* COMMAND STATUS */}
              {/* ================================================= */}

              <div className="mt-7 max-w-xl rounded-xl border border-white/[0.07] bg-[#050d14]/70 p-4 font-mono backdrop-blur-md">

                <div className="flex items-center gap-2 text-[11px] text-gray-500">

                  <span className="text-cyan-400">
                    $
                  </span>

                  <span>
                    system.status
                  </span>

                </div>

                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[11px]">

                  <span className="text-gray-500">
                    AWS
                    <span className="ml-2 text-emerald-400">
                      ● ONLINE
                    </span>
                  </span>

                  <span className="text-gray-500">
                    LINUX
                    <span className="ml-2 text-emerald-400">
                      ● READY
                    </span>
                  </span>

                  <span className="text-gray-500">
                    DOCKER
                    <span className="ml-2 text-emerald-400">
                      ● READY
                    </span>
                  </span>

                </div>

              </div>


              {/* ================================================= */}
              {/* ACTIONS */}
              {/* ================================================= */}

              <div className="mt-8 flex flex-wrap gap-3">


                {/* PROJECTS */}
                <a
                  href="#projects"
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-lg
                    border
                    border-cyan-400/30
                    bg-cyan-400/6
                    px-4
                    py-3
                    font-mono
                    text-sm
                    text-cyan-300
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/60
                    hover:bg-cyan-400/10
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                  "
                >

                  <span className="relative flex h-2 w-2">

                    <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

                    <span className="relative h-2 w-2 rounded-full bg-cyan-400" />

                  </span>

                  <span>
                    View Projects
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />

                </a>


                {/* RESUME */}
                <a
                  href="/My-DevOps-Resume.pdf"
                  download="My-DevOps-Resume.pdf"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-blue-400/20
                    bg-blue-400/4
                    px-4
                    py-3
                    font-mono
                    text-sm
                    text-blue-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/50
                    hover:bg-blue-400/8
                  "
                >

                  <Download
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />

                  <span>
                    Resume
                  </span>

                </a>


                {/* CONTACT */}
                <a
                  href="#contact"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-violet-400/20
                    bg-violet-400/4
                    px-4
                    py-3
                    font-mono
                    text-sm
                    text-violet-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-violet-400/50
                    hover:bg-violet-400/8
                  "
                >

                  <span className="h-2 w-2 rounded-full bg-violet-400" />

                  <span>
                    Contact
                  </span>

                </a>


                {/* TERMINAL */}
                <a
                  href="#terminal"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-emerald-400/20
                    bg-emerald-400/[0.035]
                    px-4
                    py-3
                    font-mono
                    text-sm
                    text-emerald-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-400/50
                    hover:bg-emerald-400/[0.07]
                  "
                >

                  <TerminalIcon
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  <span>
                    Terminal
                  </span>

                  <span className="text-[9px] text-emerald-400/50">
                    READY
                  </span>

                </a>

              </div>


              {/* Bottom tech line */}
              <div className="mt-9 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-600">

                <span>
                  AWS
                </span>

                <span className="text-cyan-500/30">
                  /
                </span>

                <span>
                  DOCKER
                </span>

                <span className="text-cyan-500/30">
                  /
                </span>

                <span>
                  KUBERNETES
                </span>

                <span className="text-cyan-500/30">
                  /
                </span>

                <span>
                  TERRAFORM
                </span>

                <span className="text-cyan-500/30">
                  /
                </span>

                <span>
                  LINUX
                </span>

              </div>

            </div>


            {/* ================================================= */}
            {/* RIGHT SIDE - DEVOPS LIFECYCLE                   */}
            {/* ================================================= */}

            <div className="relative flex items-center justify-center lg:justify-end">

              {/* Outer glow */}
              <div className="pointer-events-none absolute h-107.5 w-107.5 rounded-full bg-cyan-400/2.5 blur-[90px]" />


              <div className="relative w-full max-w-170">

                {/* Top terminal status */}
                <div className="absolute left-1/2 -top-1.25 z-30 -translate-x-1/2">

                  <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-cyan-400/15 bg-[#06111b]/90 px-4 py-2 font-mono text-[9px] tracking-wider text-gray-500 shadow-xl backdrop-blur-md">

                    <span className="text-cyan-400">
                      &gt;_
                    </span>

                    <span>
                      devops.lifecycle
                    </span>

                    <span className="text-gray-700">
                      |
                    </span>

                    <span className="text-emerald-400">
                      ACTIVE
                    </span>

                  </div>

                </div>


                {/* ================================================= */}
                {/* SVG GRAPHIC */}
                {/* ================================================= */}

                <svg
                  viewBox="0 0 760 430"
                  className="relative z-10 w-full overflow-visible"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <defs>

                    <filter
                      id="softGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur
                        stdDeviation="7"
                        result="blur"
                      />

                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <radialGradient
                      id="centerGlow"
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#22d3ee"
                        stopOpacity="0.12"
                      />

                      <stop
                        offset="100%"
                        stopColor="#22d3ee"
                        stopOpacity="0"
                      />
                    </radialGradient>

                  </defs>


                  {/* ================================================= */}
                  {/* DEV RING */}
                  {/* ================================================= */}

                  {devSegments.map((segment, index) => (
                    <path
                      key={`dev-${index}`}
                      d={donutSegment(
                        230,
                        220,
                        170,
                        105,
                        segment.start,
                        segment.end
                      )}
                      fill={segment.color}
                      className="transition-all duration-300"
                    />
                  ))}


                  {/* DEV center glow */}
                  <circle
                    cx="230"
                    cy="220"
                    r="105"
                    fill="url(#centerGlow)"
                  />

                  {/* DEV center */}
                  <circle
                    cx="230"
                    cy="220"
                    r="104"
                    fill="#0b1020"
                    stroke="#1b2135"
                    strokeWidth="1"
                  />

                  <circle
                    cx="230"
                    cy="220"
                    r="82"
                    fill="none"
                    stroke="#22d3ee"
                    strokeOpacity="0.05"
                    strokeWidth="1"
                  />

                  <text
                    x="230"
                    y="229"
                    textAnchor="middle"
                    fill="#2c3040"
                    fontSize="29"
                    fontWeight="700"
                    letterSpacing="4"
                  >
                    DEV
                  </text>


                  {/* DEV labels */}

                  {devSegments.map((segment, index) => (
                    <text
                      key={`dev-label-${index}`}
                      x={segment.labelX}
                      y={segment.labelY}
                      fill="white"
                      fontSize="14"
                      fontWeight="700"
                      letterSpacing="2"
                      transform={`rotate(${segment.rotate} ${segment.labelX} ${segment.labelY})`}
                    >
                      {segment.label}
                    </text>
                  ))}


                  {/* ================================================= */}
                  {/* OPS RING */}
                  {/* ================================================= */}

                  {opsSegments.map((segment, index) => (
                    <path
                      key={`ops-${index}`}
                      d={donutSegment(
                        530,
                        220,
                        170,
                        105,
                        segment.start,
                        segment.end
                      )}
                      fill={segment.color}
                    />
                  ))}


                  {/* OPS center glow */}
                  <circle
                    cx="530"
                    cy="220"
                    r="105"
                    fill="url(#centerGlow)"
                  />

                  {/* OPS center */}
                  <circle
                    cx="530"
                    cy="220"
                    r="104"
                    fill="#0b1020"
                    stroke="#1b2135"
                    strokeWidth="1"
                  />

                  <circle
                    cx="530"
                    cy="220"
                    r="82"
                    fill="none"
                    stroke="#22d3ee"
                    strokeOpacity="0.05"
                    strokeWidth="1"
                  />

                  <text
                    x="530"
                    y="229"
                    textAnchor="middle"
                    fill="#2c3040"
                    fontSize="29"
                    fontWeight="700"
                    letterSpacing="4"
                  >
                    OPS
                  </text>


                  {/* OPS labels */}

                  {opsSegments.map((segment, index) => (
                    <text
                      key={`ops-label-${index}`}
                      x={segment.labelX}
                      y={segment.labelY}
                      fill="white"
                      fontSize="14"
                      fontWeight="700"
                      letterSpacing="1.8"
                      transform={`rotate(${segment.rotate} ${segment.labelX} ${segment.labelY})`}
                    >
                      {segment.label}
                    </text>
                  ))}


                  {/* ================================================= */}
                  {/* CENTER CONNECTION */}
                  {/* ================================================= */}

                  <line
                    x1="400"
                    y1="204"
                    x2="360"
                    y2="204"
                    stroke="#07111b"
                    strokeWidth="8"
                  />

                  <line
                    x1="400"
                    y1="236"
                    x2="360"
                    y2="236"
                    stroke="#07111b"
                    strokeWidth="8"
                  />

                  <circle
                    cx="380"
                    cy="220"
                    r="5"
                    fill="#22d3ee"
                    opacity="0.8"
                    filter="url(#softGlow)"
                  />


                  {/* ================================================= */}
                  {/* SMALL CENTER DATA LINE */}
                  {/* ================================================= */}

                  <text
                    x="380"
                    y="408"
                    textAnchor="middle"
                    fill="#22d3ee"
                    fillOpacity="0.45"
                    fontSize="8"
                    fontFamily="monospace"
                    letterSpacing="3"
                  >
                    CONTINUOUS • AUTOMATED • SCALABLE
                  </text>

                </svg>


                {/* Bottom status */}
                <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">

                  <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-emerald-400/15 bg-[#06130f]/90 px-4 py-2 font-mono text-[9px] tracking-wider text-emerald-400/70 backdrop-blur-md">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                    INFRASTRUCTURE READY

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ===================================================== */}
      {/* BOTTOM SCROLL INDICATOR */}
      {/* ===================================================== */}

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">

        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-gray-600">
          Scroll
        </span>

        <div className="h-8 w-px bg-linear-to-b from-cyan-400/40 to-transparent" />

      </div>

    </section>
  );
}