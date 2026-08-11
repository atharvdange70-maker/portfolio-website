"use client";

import { motion } from "framer-motion";
import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiTerraform,
  SiLinux,
  SiGithub,
} from "react-icons/si";
const nodes = [
 
  {
    id: "docker",
    name: "DOCKER",
    x: "91%",
    y: "24%",
    color: "#2496ed",
    icon: SiDocker,
  },
  {
    id: "github",
    name: "GITHUB",
    x: "89%",
    y: "48%",
    color: "#ffffff",
    icon: SiGithub,
  },
  {
    id: "linux",
    name: "LINUX",
    x: "5%",
    y: "57%",
    color: "#f2c94c",
    icon: SiLinux,
  },
  {
    id: "kubernetes",
    name: "KUBERNETES",
    x: "12%",
    y: "72%",
    color: "#326ce5",
    icon: SiKubernetes,
  },
  {
    id: "git",
    name: "GIT",
    x: "68%",
    y: "72%",
    color: "#f05032",
    icon: SiGit,
  },
  {
    id: "terraform",
    name: "TERRAFORM",
    x: "91%",
    y: "76%",
    color: "#844fba",
    icon: SiTerraform,
  },
  {
    id: "jenkins",
    name: "JENKINS",
    x: "38%",
    y: "80%",
    color: "#d24939",
    icon: SiJenkins,
  },
];

const connections = [
  {
    x1: "8%",
    y1: "20%",
    x2: "50%",
    y2: "50%",
  },
  {
    x1: "50%",
    y1: "50%",
    x2: "91%",
    y2: "24%",
  },
  {
    x1: "50%",
    y1: "50%",
    x2: "89%",
    y2: "48%",
  },
  {
    x1: "50%",
    y1: "50%",
    x2: "5%",
    y2: "57%",
  },
  {
    x1: "50%",
    y1: "50%",
    x2: "12%",
    y2: "72%",
  },
  {
    x1: "50%",
    y1: "50%",
    x2: "68%",
    y2: "72%",
  },
  {
    x1: "50%",
    y1: "50%",
    x2: "91%",
    y2: "76%",
  },
  {
    x1: "50%",
    y1: "50%",
    x2: "38%",
    y2: "80%",
  },
];

export default function DevOpsBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* =========================================
          ATMOSPHERIC GLOW
      ========================================= */}

      <div className="absolute inset-0">
        <div
          className="
            absolute
            left-[-10%]
            top-[20%]
            h-125
            w-125
            rounded-full
            bg-cyan-500/[0.07]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            top-[20%]
            h-125
            w-125
            rounded-full
            bg-blue-600/8
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            bottom-[-15%]
            left-[35%]
            h-112.5
            w-112.5
            rounded-full
            bg-indigo-600/6
            blur-[120px]
          "
        />
      </div>

      {/* =========================================
          NETWORK SYSTEM
      ========================================= */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Sharp cyan network glow */}
          <filter
            id="networkGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Packet glow */}
          <filter
            id="packetGlow"
            x="-200%"
            y="-200%"
            width="400%"
            height="400%"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Network lines */}

        {connections.map((line, index) => (
          <g key={index}>
            {/* subtle outer glow */}
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(0, 200, 255, 0.12)"
              strokeWidth="2"
              filter="url(#networkGlow)"
            />

            {/* sharp main line */}
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(0, 190, 255, 0.28)"
              strokeWidth="0.8"
              strokeDasharray="5 10"
            />
          </g>
        ))}

        {/* Center infrastructure node */}

        <circle
          cx="500"
          cy="500"
          r="3"
          fill="#00d9ff"
          filter="url(#packetGlow)"
        />

        <circle
          cx="500"
          cy="500"
          r="12"
          fill="none"
          stroke="rgba(0, 210, 255, 0.20)"
          strokeWidth="1"
        />

        <circle
          cx="500"
          cy="500"
          r="24"
          fill="none"
          stroke="rgba(0, 210, 255, 0.08)"
          strokeWidth="1"
        />
      </svg>

      {/* =========================================
          ANIMATED DATA PACKETS
      ========================================= */}

      <DataPacket
        from={{ x: "8%", y: "20%" }}
        to={{ x: "50%", y: "50%" }}
        delay={0}
      />

      <DataPacket
        from={{ x: "50%", y: "50%" }}
        to={{ x: "91%", y: "24%" }}
        delay={1.3}
      />

      <DataPacket
        from={{ x: "50%", y: "50%" }}
        to={{ x: "89%", y: "48%" }}
        delay={2.1}
      />

      <DataPacket
        from={{ x: "50%", y: "50%" }}
        to={{ x: "5%", y: "57%" }}
        delay={2.8}
      />

      <DataPacket
        from={{ x: "50%", y: "50%" }}
        to={{ x: "12%", y: "72%" }}
        delay={1.7}
      />

      <DataPacket
        from={{ x: "50%", y: "50%" }}
        to={{ x: "68%", y: "72%" }}
        delay={3.2}
      />

      <DataPacket
        from={{ x: "50%", y: "50%" }}
        to={{ x: "91%", y: "76%" }}
        delay={4}
      />

      <DataPacket
        from={{ x: "50%", y: "50%" }}
        to={{ x: "38%", y: "80%" }}
        delay={4.8}
      />

      {/* =========================================
          DEVOPS TECHNOLOGY NODES
      ========================================= */}

      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
              color: node.color,
            }}
            initial={{ opacity: 0.35, scale: 0.96 }}
            animate={{
              opacity: [0.35, 0.72, 0.35],
              scale: [0.96, 1, 0.96],
            }}
            transition={{
              duration: 4 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.25,
            }}
          >
            <div className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              {/* Icon */}

              <div
                className="relative"
                style={{
                  filter: `drop-shadow(0 0 8px ${node.color})`,
                }}
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="opacity-90"
                />

                {/* small node point */}

                <span
                  className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full"
                  style={{
                    background: node.color,
                    boxShadow: `0 0 8px ${node.color}`,
                  }}
                />
              </div>

              {/* Label */}

              <span
                className="
                  mt-2
                  whitespace-nowrap
                  text-[9px]
                  font-bold
                  tracking-[0.22em]
                  opacity-75
                "
                style={{
                  textShadow: `0 0 8px ${node.color}`,
                }}
              >
                {node.name}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* =========================================
          RANDOM PARTICLES
      ========================================= */}

      {Array.from({ length: 28 }).map((_, index) => (
        <motion.span
          key={`particle-${index}`}
          className="absolute h-0.5 w-0.5 rounded-full bg-cyan-300"
          style={{
            left: `${5 + ((index * 17) % 90)}%`,
            top: `${12 + ((index * 29) % 76)}%`,
            boxShadow: "0 0 7px rgba(0, 220, 255, 0.9)",
          }}
          animate={{
            opacity: [0.1, 0.9, 0.1],
            scale: [0.7, 1.6, 0.7],
          }}
          transition={{
            duration: 2.5 + (index % 5) * 0.6,
            repeat: Infinity,
            delay: index * 0.18,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}


/* =========================================
   DATA PACKET
========================================= */

function DataPacket({
  from,
  to,
  delay,
}: {
  from: { x: string; y: string };
  to: { x: string; y: string };
  delay: number;
}) {
  return (
    <motion.div
      className="
        pointer-events-none
        absolute
        z-1
        h-1.25
        w-1.25
        rounded-full
        bg-cyan-300
      "
      style={{
        left: from.x,
        top: from.y,
        boxShadow:
          "0 0 5px #00d9ff, 0 0 12px #00d9ff, 0 0 22px rgba(0,217,255,0.8)",
      }}
      animate={{
        left: [from.x, to.x],
        top: [from.y, to.y],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1.3, 1, 0.5],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
}