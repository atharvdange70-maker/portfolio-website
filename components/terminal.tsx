"use client";

import { useEffect, useRef, useState } from "react";

const commands: Record<string, string> = {
  help: `
Available commands:

  whoami         → Professional profile
  about          → About me
  skills         → Technical skills
  stack           → DevOps technology stack
  projects       → My DevOps projects
  architecture   → AWS architecture
  experience     → Professional experience
  aws            → AWS services I work with
  certifications → Certifications & training
  status         → Infrastructure status
  uptime         → System information
  neofetch       → System profile
  resume         → Resume information
  contact        → Contact information
  clear          → Clear terminal
`,

  whoami: `
atharv@devops:~$ whoami

Atharv Dange
AWS DevOps Engineer

Focus:
• AWS Cloud Infrastructure
• DevOps Automation
• CI/CD
• Docker & Kubernetes
• Infrastructure as Code
• High Availability

Status: Available for opportunities
`,

  about: `
Atharv Dange

AWS DevOps Engineer focused on building:
• Cloud Infrastructure
• Automation
• CI/CD Pipelines
• Containerized Applications
• Highly Available Systems
• Secure Cloud Architecture

I build reliable and scalable cloud-native solutions
using modern DevOps practices.
`,

  skills: `
TECHNICAL SKILLS
────────────────────────────────

Cloud:
  AWS

DevOps:
  CI/CD
  Jenkins
  GitHub

Containers:
  Docker
  Kubernetes

Infrastructure as Code:
  Terraform

Operating Systems:
  Linux

Networking:
  VPC
  Subnets
  Security Groups
  Load Balancing

Monitoring:
  CloudWatch

Version Control:
  Git & GitHub
`,

  stack: `
DEVOPS STACK
────────────────────────────────

AWS             ████████████████████
Terraform       ██████████████████
Docker          ███████████████████
Kubernetes      █████████████████
Jenkins         ████████████████
Linux           ███████████████████
Git/GitHub      ████████████████████

Infrastructure → AWS
IaC            → Terraform
Containers     → Docker
Orchestration  → Kubernetes
CI/CD          → Jenkins
Monitoring     → CloudWatch
`,

  projects: `
DEVOPS PROJECTS
────────────────────────────────

01  EBS Backup Automation
    Lambda + EventBridge + EBS
    Automated snapshot workflow

02  EduBlitz 3-Tier Application
    S3 + CloudFront + EC2 + RDS
    Production-style AWS architecture

03  AWS HA Web Application
    EC2 + ALB + Auto Scaling
    Highly available infrastructure

04  Static Website Deployment
    S3 + CloudFront
    Secure cloud-based deployment
`,

  architecture: `
AWS 3-TIER ARCHITECTURE
────────────────────────────────

                    USER
                      │
                      ▼
               ┌─────────────┐
               │ CloudFront  │
               └──────┬──────┘
                      │
                      ▼
               ┌─────────────┐
               │     S3      │
               │  Frontend   │
               └──────┬──────┘
                      │
                      ▼
               ┌─────────────┐
               │     EC2     │
               │   Backend   │
               └──────┬──────┘
                      │
                      ▼
               ┌─────────────┐
               │     RDS     │
               │   MySQL DB  │
               └─────────────┘

Infrastructure:
• AWS VPC
• Security Groups
• CloudFront
• S3
• EC2
• RDS
• Load Balancer
`,

  experience: `
PROFESSIONAL EXPERIENCE
────────────────────────────────

Cloud Computing / DevOps Intern

Working with:

• AWS Infrastructure
• Cloud Deployments
• Linux Environments
• Docker
• Terraform
• CI/CD Workflows
• Cloud Monitoring
• DevOps Automation

Focus:
Building practical cloud infrastructure
and improving deployment workflows.
`,

  aws: `
AWS SERVICES
────────────────────────────────

Compute:
  EC2
  Lambda
  ECS
  EKS

Storage:
  S3
  EBS

Database:
  RDS

Networking:
  VPC
  Route 53
  CloudFront
  ALB

Security:
  IAM
  Security Groups

Automation:
  EventBridge
  CloudFormation

Monitoring:
  CloudWatch

Container Registry:
  ECR
`,

  certifications: `
CERTIFICATIONS & TRAINING
────────────────────────────────

• AWS Developer Associate:
  Optimizing AWS

• Introduction to Kubernetes

• Docker & Kubernetes Training

• Terraform for AWS

• Cyber Security Audits

• AWS Cloud Practitioner
  In Progress
`,

  status: `
SYSTEM STATUS
────────────────────────────────

[ ONLINE ] AWS Infrastructure
[ ONLINE ] CI/CD Pipeline
[ ONLINE ] Docker Environment
[ ONLINE ] Kubernetes
[ READY  ] Terraform
[ ONLINE ] Git / GitHub
[ ONLINE ] CloudWatch
[ READY  ] Infrastructure Automation

Environment : AWS Cloud
Deployment  : Automated
Monitoring  : CloudWatch
Status      : OPERATIONAL
`,

  uptime: `
SYSTEM INFORMATION
────────────────────────────────

Environment : Production
Platform    : AWS Cloud
OS          : Linux
Runtime     : Cloud Infrastructure
Deployment  : CI/CD
Containers  : Docker
Orchestrator: Kubernetes
IaC         : Terraform
Monitoring  : CloudWatch

System Status: OPERATIONAL
`,

  neofetch: `
        ████████        atharv@devops
      ██        ██      ─────────────────────────
     ██          ██     Role       : AWS DevOps Engineer
     ██          ██     Cloud      : AWS
      ██        ██      OS         : Linux
        ████████        Containers : Docker
                        Orchestration: Kubernetes
                        IaC         : Terraform
                        CI/CD       : Jenkins
                        Monitoring  : CloudWatch
                        Location    : Cloud
`,

  resume: `
RESUME
────────────────────────────────

AWS DevOps Engineer

Experience:
Cloud Computing / DevOps Intern

Core Technologies:
AWS • Terraform • Docker • Kubernetes
Jenkins • Linux • Git • CI/CD

Use the Resume section of this portfolio
to view or download my latest resume.
`,

  contact: `
CONTACT
────────────────────────────────

Let's connect.

LinkedIn:
linkedin.com/in/atharv-dange

GitHub:
github.com/atharvdange70-maker

Email:
Available through the Contact section.

Feel free to connect regarding:
• DevOps opportunities
• Cloud projects
• Collaboration
• Technical discussions
`,
};

const quickCommands = [
  "help",
  "whoami",
  "skills",
  "stack",
  "projects",
  "architecture",
  "status",
  "aws",
  "contact",
];

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "╭──────────────────────────────────────────────╮",
    "│  ATHARV DANGE // DEVOPS TERMINAL             │",
    "│  AWS • CLOUD • AUTOMATION • INFRASTRUCTURE    │",
    "╰──────────────────────────────────────────────╯",
    "",
    "Welcome to Atharv Dange's DevOps Terminal.",
    "Type 'help' to see available commands.",
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

  const executeCommand = (commandInput?: string) => {
    const command = (commandInput ?? input).trim().toLowerCase();

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

Available commands:
  help
  whoami
  about
  skills
  stack
  projects
  architecture
  experience
  aws
  certifications
  status
  uptime
  neofetch
  resume
  contact
  clear
`;

    setHistory((prev) => [
      ...prev,
      `atharv@devops:~$ ${command}`,
      output,
    ]);

    setCommandHistory((prev) => {
      if (prev[prev.length - 1] === command) {
        return prev;
      }

      return [...prev, command];
    });

    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand();
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);

      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

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

    if (e.key === "Tab") {
      e.preventDefault();

      const currentInput = input.trim().toLowerCase();

      if (!currentInput) return;

      const matchingCommand = Object.keys(commands).find((command) =>
        command.startsWith(currentInput)
      );

      if (matchingCommand) {
        setInput(matchingCommand);
      }

      return;
    }

    if (e.ctrlKey && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setHistory([]);
      setInput("");
    }
  };

  return (
    <section
      id="terminal"
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 font-mono text-sm font-semibold tracking-[0.2em] text-cyan-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            INTERACTIVE TERMINAL
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Explore My{" "}
            <span className="text-cyan-400">
              DevOps World
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Explore my cloud infrastructure, technical skills,
            projects and DevOps experience through the terminal.
          </p>

        </div>

        {/* Terminal */}
        <div
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#05080d] shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_25px_90px_rgba(0,200,255,0.08)]"
          onClick={() => inputRef.current?.focus()}
        >

          {/* Terminal Header */}
          <div className="flex items-center border-b border-white/10 bg-[#0a0f16] px-5 py-3.5">

            <div className="flex items-center gap-2">

              <span className="h-3 w-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.35)]" />

              <span className="h-3 w-3 rounded-full bg-yellow-500/90 shadow-[0_0_8px_rgba(234,179,8,0.35)]" />

              <span className="h-3 w-3 rounded-full bg-green-500/90 shadow-[0_0_8px_rgba(34,197,94,0.35)]" />

            </div>

            <div className="ml-5 flex-1 text-center font-mono text-xs text-slate-500 sm:text-sm">
              atharv@devops-portfolio:~
            </div>

            <div className="hidden font-mono text-xs text-slate-600 sm:block">
              bash
            </div>

          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="h-107.5 overflow-y-auto p-5 font-mono text-sm leading-7 text-slate-300 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 md:h-117.5 md:p-7 md:text-[15px]"
          >

            {history.map((line, index) => {

              const isCommand = line.startsWith("atharv@devops:~$");

              return (
                <pre
                  key={`${line}-${index}`}
                  className={`whitespace-pre-wrap ${
                    isCommand
                      ? "font-semibold text-green-400"
                      : "text-slate-300"
                  }`}
                >
                  {line}
                </pre>
              );
            })}

            {/* Input */}
            <div className="mt-2 flex items-center">

              <span className="mr-2 whitespace-nowrap font-semibold text-green-400">
                atharv@devops:~$
              </span>

              <input
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setHistoryIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
                className="min-w-0 flex-1 bg-transparent text-white outline-none caret-green-400 placeholder:text-slate-700"
                placeholder="type 'help'..."
                aria-label="Terminal command"
              />

            </div>

          </div>

          {/* Terminal Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 bg-[#080c12] px-5 py-3 font-mono text-[11px] text-slate-600">

            <span>
              ↑ ↓ history
            </span>

            <span>
              TAB autocomplete
            </span>

            <span>
              CTRL + L clear
            </span>

          </div>

        </div>

        {/* Quick Commands */}
        <div className="mt-6">

          <div className="mb-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
            Quick Commands
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">

            {quickCommands.map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => executeCommand(command)}
                className="rounded-lg border border-white/10 bg-white/2 px-3.5 py-2 font-mono text-xs text-slate-400 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400 active:scale-95"
              >
                {command}
              </button>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}