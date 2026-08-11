"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  GitBranch,
  Boxes,
  Workflow,
  Terminal,
  Server,
  Cpu,
  CircleDot,
} from "lucide-react";

import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

type NodeData = {
  name: string;
  x: string;
  y: string;
  color: string;
  icon: LucideIcon;
};
type Connection = [string, string, string, string];

type Point = {
  x: string;
  y: string;
};

/* =========================================================
   TECHNOLOGY NODES
========================================================= */

const nodes: NodeData[] = [
  {
    name: "AWS",
    x: "8%",
    y: "25%",
    color: "#ff9900",
    icon: Cloud,
  },
  {
    name: "DOCKER",
    x: "91%",
    y: "27%",
    color: "#2496ed",
    icon: Container,
  },
  {
    name: "GITHUB",
    x: "90%",
    y: "49%",
    color: "#ffffff",
    icon: CircleDot,
  },
  {
    name: "LINUX",
    x: "7%",
    y: "55%",
    color: "#f6c344",
    icon: Terminal,
  },
  {
    name: "KUBERNETES",
    x: "12%",
    y: "74%",
    color: "#326ce5",
    icon: Boxes,
  },
  {
    name: "GIT",
    x: "68%",
    y: "72%",
    color: "#f05032",
    icon: GitBranch,
  },
  {
    name: "TERRAFORM",
    x: "91%",
    y: "76%",
    color: "#844fba",
    icon: Workflow,
  },
  {
    name: "JENKINS",
    x: "38%",
    y: "82%",
    color: "#d24939",
    icon: Server,
  },
];

/* =========================================================
   NETWORK CONNECTIONS
========================================================= */

const connections: Connection[] = [
  ["8%", "25%", "50%", "50%"],
  ["50%", "50%", "91%", "27%"],
  ["50%", "50%", "90%", "49%"],
  ["50%", "50%", "7%", "55%"],
  ["50%", "50%", "12%", "74%"],
  ["50%", "50%", "68%", "72%"],
  ["50%", "50%", "91%", "76%"],
  ["50%", "50%", "38%", "82%"],
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DevOpsBackground() {
  return (
    <div
      className="devops-background"
      aria-hidden="true"
    >
      {/* =====================================================
          ATMOSPHERIC GLOWS
      ===================================================== */}

      <div className="devops-orb devops-orb-left" />
      <div className="devops-orb devops-orb-right" />
      <div className="devops-orb devops-orb-bottom" />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div className="devops-grid" />

      {/* =====================================================
          NETWORK SVG
      ===================================================== */}

      <svg
        className="devops-network"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main cyan/blue gradient */}
          <linearGradient
            id="devopsNetworkGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#00eaff"
              stopOpacity="0.15"
            />

            <stop
              offset="50%"
              stopColor="#00eaff"
              stopOpacity="0.95"
            />

            <stop
              offset="100%"
              stopColor="#1677ff"
              stopOpacity="0.25"
            />
          </linearGradient>

          {/* Strong glow */}
          <filter
            id="devopsStrongGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Small glow */}
          <filter
            id="devopsSmallGlow"
            x="-200%"
            y="-200%"
            width="400%"
            height="400%"
          >
            <feGaussianBlur
              stdDeviation="2"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Center glow */}
          <radialGradient id="devopsCoreGradient">
            <stop
              offset="0%"
              stopColor="#00eaff"
              stopOpacity="0.9"
            />

            <stop
              offset="40%"
              stopColor="#00eaff"
              stopOpacity="0.25"
            />

            <stop
              offset="100%"
              stopColor="#00eaff"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* =================================================
            CONNECTIONS
        ================================================= */}

        {connections.map((line, index) => (
          <g key={`connection-${index}`}>
            {/* Large glow */}
            <line
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              stroke="#00eaff"
              strokeOpacity="0.22"
              strokeWidth="5"
              filter="url(#devopsStrongGlow)"
            />

            {/* Sharp main line */}
            <line
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              stroke="url(#devopsNetworkGradient)"
              strokeWidth="1.3"
            />

            {/* Animated-looking data segments */}
            <line
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              stroke="#67e8f9"
              strokeOpacity="0.55"
              strokeWidth="0.8"
              strokeDasharray="3 16"
            />
          </g>
        ))}

        {/* =================================================
            CENTRAL CORE GLOW
        ================================================= */}

        <circle
          cx="500"
          cy="500"
          r="100"
          fill="url(#devopsCoreGradient)"
        />

        <circle
          cx="500"
          cy="500"
          r="5"
          fill="#00eaff"
          filter="url(#devopsSmallGlow)"
        />

        <circle
          cx="500"
          cy="500"
          r="17"
          fill="none"
          stroke="#00eaff"
          strokeOpacity="0.6"
          strokeWidth="1"
        />

        <circle
          cx="500"
          cy="500"
          r="35"
          fill="none"
          stroke="#00eaff"
          strokeOpacity="0.25"
          strokeWidth="1"
        />

        <circle
          cx="500"
          cy="500"
          r="62"
          fill="none"
          stroke="#1677ff"
          strokeOpacity="0.14"
          strokeWidth="1"
        />

        <circle
          cx="500"
          cy="500"
          r="90"
          fill="none"
          stroke="#00eaff"
          strokeOpacity="0.07"
          strokeWidth="1"
          strokeDasharray="4 12"
        />
      </svg>

      {/* =====================================================
          MOVING DATA PACKETS
      ===================================================== */}

      {connections.map((line, index) => (
        <DataPacket
          key={`packet-${index}`}
          from={{
            x: line[0],
            y: line[1],
          }}
          to={{
            x: line[2],
            y: line[3],
          }}
          delay={index * 0.45}
        />
      ))}

      {/* =====================================================
          CENTRAL CPU CORE
      ===================================================== */}

      <motion.div
        className="devops-core"
        animate={{
          scale: [0.9, 1.12, 0.9],
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="devops-core-inner">
          <Cpu size={17} strokeWidth={2} />
        </div>
      </motion.div>

      {/* =====================================================
          TECHNOLOGY NODES
      ===================================================== */}

      {nodes.map((node, index) => {
        const Icon = node.icon;

        const nodeStyle = {
          left: node.x,
          top: node.y,
          color: node.color,
        } as CSSProperties;

        const iconStyle = {
          "--node-color": node.color,
        } as CSSProperties;

        return (
          <motion.div
            key={node.name}
            className="devops-node"
            style={nodeStyle}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3.2 + index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            {/* Icon */}
            <div
              className="devops-node-icon"
              style={iconStyle}
            >
              <Icon
                size={30}
                strokeWidth={2}
              />

              <span className="devops-node-dot" />
            </div>

            {/* Label */}
            <span className="devops-node-label">
              {node.name}
            </span>
          </motion.div>
        );
      })}

      {/* =====================================================
          RANDOM PARTICLES
      ===================================================== */}

      {Array.from({ length: 50 }).map(
        (_, index) => {
          const left =
            3 + ((index * 19) % 94);

          const top =
            8 + ((index * 31) % 84);

          return (
            <motion.span
              key={`particle-${index}`}
              className="devops-particle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                opacity: [0.1, 0.9, 0.1],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration:
                  1.8 + (index % 5) * 0.45,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            />
          );
        }
      )}

      {/* =====================================================
          SCANNING LINE
      ===================================================== */}

      <motion.div
        className="devops-scanline"
        animate={{
          y: ["-10vh", "110vh"],
          opacity: [0, 0.45, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

/* =========================================================
   DATA PACKET COMPONENT
========================================================= */

function DataPacket({
  from,
  to,
  delay,
}: {
  from: Point;
  to: Point;
  delay: number;
}) {
  return (
    <motion.div
      className="devops-data-packet"
      style={{
        left: from.x,
        top: from.y,
      }}
      animate={{
        left: [from.x, to.x],
        top: [from.y, to.y],
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1.3, 1, 0.6],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        repeatType: "loop",
        delay,
        ease: "linear",
      }}
    />
  );
}