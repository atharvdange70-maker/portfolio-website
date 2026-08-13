"use client";

import { useEffect, useRef, useState } from "react";

const commands: Record<string, string> = {
  help: `
Available commands

  whoami          Professional profile
  about           About me
  skills          Technical skills
  stack           DevOps technology stack
  projects        DevOps projects
  architecture    AWS architecture
  experience      Professional experience
  aws             AWS services
  certifications  Certifications
  status          Infrastructure status
  uptime          System information
  neofetch        System profile
  resume          Resume information
  contact         Contact information
  clear           Clear terminal
`,

  whoami: `
Atharv Dange
AWS DevOps Engineer

Focus:
  Cloud Infrastructure
  DevOps Automation
  CI/CD
  Docker & Kubernetes
  Infrastructure as Code
  High Availability
`,

  about: `
I build secure, scalable and reliable cloud-native solutions.

My focus is on:
  • AWS cloud infrastructure
  • Infrastructure automation
  • CI/CD pipelines
  • Containerization
  • High availability
  • Cloud monitoring
`,

  skills: `
AWS
Docker
Kubernetes
Terraform
Jenkins
Linux
Git & GitHub
CI/CD
Networking
Cloud Architecture
CloudWatch
`,

  stack: `
DEVOPS STACK

Cloud            AWS
Infrastructure   Terraform
Containers       Docker
Orchestration    Kubernetes
CI/CD            Jenkins
OS               Linux
Version Control  Git / GitHub
Monitoring       CloudWatch
`,

  projects: `
01  EBS Backup Automation
    Lambda + EventBridge + EBS

02  EduBlitz 3-Tier Application
    S3 + CloudFront + EC2 + RDS

03  AWS High Availability Web App
    EC2 + ALB + Auto Scaling

04  Static Website Deployment
    S3 + CloudFront
`,

  architecture: `
AWS 3-TIER ARCHITECTURE

                    USER
                      │
                      ▼
                 CLOUDFRONT
                      │
                      ▼
                    S3
                 FRONTEND
                      │
                      ▼
                    EC2
                 BACKEND API
                      │
                      ▼
                    RDS
                 MYSQL DATABASE

Infrastructure:
  VPC
  Security Groups
  CloudFront
  S3
  EC2
  RDS
  ALB
`,

  experience: `
DEVOPS / CLOUD COMPUTING INTERN

Working with:

  AWS Infrastructure
  Cloud Deployments
  Linux Environments
  Docker
  Terraform
  CI/CD
  Cloud Monitoring
  DevOps Automation
`,

  aws: `
AWS SERVICES

Compute
  EC2
  Lambda
  ECS
  EKS

Storage
  S3
  EBS

Database
  RDS

Networking
  VPC
  Route 53
  CloudFront
  ALB

Security
  IAM
  Security Groups

Automation
  EventBridge
  CloudFormation

Monitoring
  CloudWatch

Containers
  ECR
`,

  certifications: `
CERTIFICATIONS & TRAINING

  AWS Developer Associate
  Optimizing AWS

  Introduction to Kubernetes

  Docker & Kubernetes Training

  Terraform for AWS

  Cyber Security Audits

  AWS Cloud Practitioner
  In Progress
`,

  status: `
INFRASTRUCTURE STATUS

  AWS Infrastructure       ONLINE
  CI/CD Pipeline            ONLINE
  Docker Environment        ONLINE
  Kubernetes                ONLINE
  Terraform                 READY
  Git / GitHub               ONLINE
  CloudWatch                 ONLINE

  Environment               AWS CLOUD
  Deployment                AUTOMATED
  Monitoring                ENABLED

  SYSTEM                    OPERATIONAL
`,

  uptime: `
SYSTEM INFORMATION

  Environment      Production
  Platform         AWS Cloud
  Operating System Linux
  Containers       Docker
  Orchestration    Kubernetes
  Infrastructure   Terraform
  CI/CD            Jenkins
  Monitoring       CloudWatch

  System Status    OPERATIONAL
`,

  neofetch: `
        ████████       ATHARV@DEVOPS
      ██        ██     ─────────────────────────
     ██          ██    Role       AWS DevOps Engineer
     ██          ██    Cloud      AWS
      ██        ██     OS         Linux
        ████████       Docker     Enabled
                       Kubernetes Enabled
                       Terraform  Enabled
                       Jenkins    Enabled
                       Monitoring CloudWatch
`,

  resume: `
ATHARV DANGE
AWS DEVOPS ENGINEER

Core Technologies

  AWS
  Terraform
  Docker
  Kubernetes
  Jenkins
  Linux
  Git
  CI/CD

View the Resume section of this portfolio
for the latest resume.
`,

  contact: `
LET'S CONNECT

LinkedIn
linkedin.com/in/atharv-dange

GitHub
github.com/atharvdange70-maker

Email
Available through the Contact section.

Available for:
  DevOps opportunities
  Cloud projects
  Collaboration
  Technical discussions
`,
};

const quickCommands = [
  "whoami",
  "skills",
  "projects",
  "architecture",
  "status",
  "aws",
  "contact",
];

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "ATHARV / DEVOPS CONSOLE",
    "────────────────────────────────────────────",
    "AWS Cloud Infrastructure • Automation • CI/CD",
    "",
    "System initialized successfully.",
    "Type 'help' to explore the console.",
    "",
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const executeCommand = (value?: string) => {
    const command = (value ?? input).trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    const output =
      commands[command] ||
      `
Command not found: ${command}

Type 'help' to see available commands.
`;

    setHistory((previous) => [
      ...previous,
      `atharv@aws:~$ ${command}`,
      output,
    ]);

    setCommandHistory((previous) => {
      if (previous[previous.length - 1] === command) {
        return previous;
      }

      return [...previous, command];
    });

    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      executeCommand();
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);

      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (commandHistory.length === 0) return;
      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);

      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const current = input.trim().toLowerCase();

      if (!current) return;

      const match = Object.keys(commands).find((command) =>
        command.startsWith(current)
      );

      if (match) {
        setInput(match);
      }

      return;
    }

    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      setHistory([]);
      setInput("");
    }
  };

  return (
    <section
      id="terminal"
      className="relative overflow-hidden px-6 py-24"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/6 px-4 py-2 font-mono text-xs font-medium tracking-[0.18em] text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            DEVOPS CONSOLE
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Explore My{" "}
            <span className="bg-linear-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            A small interactive console to explore my cloud
            infrastructure, DevOps stack, projects and experience.
          </p>

        </div>

        {/* Console */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="overflow-hidden rounded-2xl border border-white/8 bg-[#070a10]/95 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 hover:border-indigo-400/20"
        >

          {/* Top Bar */}
          <div className="flex h-14 items-center border-b border-white/[0.07] bg-white/1.5 px-5">

            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            {/* Title */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs text-slate-500 sm:flex">
              <span className="text-indigo-400">~/</span>
              atharv/devops-console
            </div>

            {/* Status */}
            <div className="ml-auto flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              System Online
            </div>

          </div>

          {/* Console Body */}
          <div
            ref={terminalRef}
            className="h-107.5 overflow-y-auto p-5 font-mono text-[13px] leading-6 md:h-125 md:p-8 md:text-sm"
          >

            {history.map((line, index) => {
              const isCommand = line.startsWith("atharv@aws:~$");

              return (
                <pre
                  key={`${index}-${line}`}
                  className={`whitespace-pre-wrap ${
                    isCommand
                      ? "font-medium text-indigo-300"
                      : "text-slate-400"
                  }`}
                >
                  {line}
                </pre>
              );
            })}

            {/* Input */}
            <div className="mt-2 flex items-center">

              <span className="mr-2 whitespace-nowrap font-medium text-emerald-400">
                atharv@aws:~$
              </span>

              <input
                ref={inputRef}
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                  setHistoryIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal command"
                className="min-w-0 flex-1 bg-transparent text-slate-100 outline-none caret-indigo-400 placeholder:text-slate-700"
                placeholder="type a command..."
              />

            </div>

          </div>

          {/* Bottom Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/6 bg-black/20 px-5 py-3">

            <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-wider text-slate-600">

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AWS
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                Docker
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Kubernetes
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                Terraform
              </span>

            </div>

            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-700">
              terminal v1.0
            </span>

          </div>

        </div>

        {/* Quick Commands */}
        <div className="mt-7">

          <div className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
            Quick Access
          </div>

          <div className="flex flex-wrap justify-center gap-2">

            {quickCommands.map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => executeCommand(command)}
                className="rounded-lg border border-white/[0.07] bg-white/2 px-3.5 py-2 font-mono text-xs text-slate-500 transition-all duration-200 hover:border-indigo-400/30 hover:bg-indigo-400/6 hover:text-indigo-300 active:scale-95"
              >
                <span className="mr-1 text-indigo-400/50">$</span>
                {command}
              </button>
            ))}

          </div>

          <div className="mt-4 text-center font-mono text-[10px] text-slate-700">
            ENTER execute&nbsp;&nbsp;•&nbsp;&nbsp;↑ ↓ history&nbsp;&nbsp;•&nbsp;&nbsp;TAB autocomplete&nbsp;&nbsp;•&nbsp;&nbsp;CTRL + L clear
          </div>

        </div>

      </div>
    </section>
  );
}