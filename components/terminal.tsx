"use client";

import { useEffect, useRef, useState } from "react";

const PROMPT = "atharv@cloudforge:~$";

const commands: Record<string, string> = {
  help: `Available commands:

  help          Show available commands
  whoami        About Atharv
  about         About me
  skills        Technical skills
  projects      DevOps projects
  experience    Professional experience
  aws           AWS services
  stack         Technology stack
  architecture  AWS architecture
  status        Infrastructure status
  resume        Resume information
  contact       Contact information

  ls            List files
  pwd           Current directory
  uname         System information
  docker ps     Running containers
  kubectl get pods
                Kubernetes pods
  git status    Git status

  clear         Clear terminal`,

  whoami: `atharv

AWS DevOps Engineer

Building cloud infrastructure,
automation and reliable deployments
with AWS and modern DevOps tools.`,

  about: `Atharv Dange

AWS DevOps Engineer focused on:

• Cloud Infrastructure
• DevOps Automation
• CI/CD
• Docker & Kubernetes
• Infrastructure as Code
• Linux & Networking
• High Availability`,

  skills: `Technical Skills
────────────────────────────

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
CloudWatch`,

  projects: `DevOps Projects
────────────────────────────

01  EBS Backup Automation
    Lambda + EventBridge + EBS

02  EduBlitz 3-Tier Application
    S3 + CloudFront + EC2 + RDS

03  AWS High Availability Web App
    EC2 + ALB + Auto Scaling

04  Static Website Deployment
    S3 + CloudFront`,

  experience: `Professional Experience
────────────────────────────

DevOps / Cloud Computing Intern

Working with:

• AWS infrastructure
• Cloud deployments
• Linux environments
• Docker
• Terraform
• CI/CD
• Cloud monitoring
• DevOps automation`,

  aws: `AWS Services
────────────────────────────

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

Monitoring
  CloudWatch

Automation
  EventBridge`,

  stack: `Technology Stack
────────────────────────────

Cloud          AWS
IaC            Terraform
Containers     Docker
Orchestration  Kubernetes
CI/CD          Jenkins
Version Control Git
OS             Linux
Monitoring     CloudWatch`,

  architecture: `AWS Architecture
────────────────────────────

             USER
               │
               ▼
         ┌───────────┐
         │ CloudFront│
         └─────┬─────┘
               │
               ▼
         ┌───────────┐
         │    S3     │
         │ Frontend  │
         └─────┬─────┘
               │
               ▼
         ┌───────────┐
         │    EC2    │
         │  Backend  │
         └─────┬─────┘
               │
               ▼
         ┌───────────┐
         │    RDS    │
         │   MySQL   │
         └───────────┘`,

  status: `System Status
────────────────────────────

AWS             [ ONLINE ]
CI/CD           [ ONLINE ]
Docker          [ ONLINE ]
Kubernetes      [ ONLINE ]
Terraform       [ READY  ]
GitHub          [ ONLINE ]
Monitoring      [ ONLINE ]

Environment     PRODUCTION
Region          ap-south-1

Overall Status  OPERATIONAL`,

  resume: `Atharv Dange
AWS DevOps Engineer
────────────────────────────

Core Technologies:

AWS
Terraform
Docker
Kubernetes
Jenkins
Linux
Git
CI/CD

View the Resume section for
complete professional details.`,

  contact: `Contact
────────────────────────────

LinkedIn
linkedin.com/in/atharv-dange

GitHub
github.com/atharvdange70-maker

Email
Available through the Contact section.`,

  ls: `skills.md
projects
experience.log
architecture.md
terraform/
kubernetes/
aws/
slo.md`,

  pwd: `/home/atharv`,

  uname: `Linux atharv-cloudforge 6.8.0-aws x86_64 GNU/Linux`,

  "docker ps": `CONTAINER ID   IMAGE              STATUS

a82f31c91a2e   api-gateway:latest   Up 18 days
b72e89c1024a   grafana:latest       Up 42 days
c61a77f8124e   prometheus:latest    Up 42 days`,

  "kubectl get pods": `NAME                              READY   STATUS
api-gateway-7db9c8f9f-2kxq9       1/1     Running
api-gateway-7db9c8f9f-n7k2m       1/1     Running
worker-65b4b78d9b-n8m2p           1/1     Running
grafana-6bbf9f5689-xc9m2          1/1     Running
prometheus-7bd9b8-5m              1/1     Running

cluster: 5/5 pods healthy`,

  "git status": `On branch main

Your branch is up to date with
'origin/main'.

nothing to commit,
working tree clean`,
};

const commandNames = Object.keys(commands);

const quickCommands = [
  "help",
  "about",
  "skills",
  "projects",
  "status",
  "contact",
];

export default function Terminal() {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState<string[]>([
    "Ubuntu 24.04.2 LTS portfolio-ops tty1",
    "Cloud-init: loaded cloud infrastructure and DevOps environment",
    "Type 'help' to inspect the command center.",
    "",
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  /*
   * Focus terminal when section loads.
   */
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /*
   * Automatically scroll to the newest command.
   */
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop =
        terminalRef.current.scrollHeight;
    }
  }, [history]);

  /*
   * Execute terminal command.
   */
  const executeCommand = (commandValue?: string) => {
    const command = (
      commandValue ?? input
    )
      .trim()
      .toLowerCase();

    if (!command) {
      return;
    }

    /*
     * Clear terminal.
     */
    if (command === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    /*
     * Find command output.
     */
    const output =
      commands[command] ??
      `${command}: command not found.

Type 'help' to see available commands.`;

    /*
     * Add command and output to history.
     */
    setHistory((previous) => [
      ...previous,
      `${PROMPT} ${command}`,
      output,
      "",
    ]);

    /*
     * Save command for ↑ ↓ navigation.
     */
    setCommandHistory((previous) => {
      if (
        previous[previous.length - 1] ===
        command
      ) {
        return previous;
      }

      return [...previous, command];
    });

    setInput("");
    setHistoryIndex(-1);
  };

  /*
   * Keyboard controls.
   */
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    /*
     * ENTER
     */
    if (event.key === "Enter") {
      event.preventDefault();
      executeCommand();
      return;
    }

    /*
     * ARROW UP
     */
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!commandHistory.length) {
        return;
      }

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(
              0,
              historyIndex - 1
            );

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);

      return;
    }

    /*
     * ARROW DOWN
     */
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (
        !commandHistory.length ||
        historyIndex === -1
      ) {
        return;
      }

      const nextIndex =
        historyIndex + 1;

      if (
        nextIndex >=
        commandHistory.length
      ) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);

      return;
    }

    /*
     * TAB AUTOCOMPLETE
     */
    if (event.key === "Tab") {
      event.preventDefault();

      const current = input
        .trim()
        .toLowerCase();

      if (!current) {
        return;
      }

      const matches =
        commandNames.filter((command) =>
          command.startsWith(current)
        );

      if (matches.length === 1) {
        setInput(matches[0]);
      }

      return;
    }

    /*
     * CTRL + L
     */
    if (
      event.ctrlKey &&
      event.key.toLowerCase() === "l"
    ) {
      event.preventDefault();

      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
    }
  };

  return (
    <section
      id="terminal"
      className="relative px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mb-8 text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-slate-700/70
              bg-slate-900/50
              px-4
              py-2
              font-mono
              text-[10px]
              font-medium
              tracking-[0.22em]
              text-slate-400
            "
          >
            INTERACTIVE TERMINAL
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            DevOps
            <span className="ml-2 text-sky-400">
              Command Center
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-slate-500
            "
          >
            Explore my skills, projects and
            cloud infrastructure through the
            terminal.
          </p>

        </div>

        {/* =====================================================
            TERMINAL WINDOW
        ====================================================== */}

        <div
          onClick={() =>
            inputRef.current?.focus()
          }
          className="
            overflow-hidden
            rounded-xl
            border
            border-slate-800
            bg-[#070a0f]
            shadow-[0_20px_70px_rgba(0,0,0,0.35)]
          "
        >

          {/* ===================================================
              TERMINAL HEADER
          ==================================================== */}

          <div
            className="
              flex
              h-12
              items-center
              border-b
              border-slate-800
              bg-[#0b0f15]
              px-4
            "
          >

            {/* Traffic lights */}

            <div className="flex items-center gap-2">

              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-[#ff5f57]
                "
              />

              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-[#febc2e]
                "
              />

              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-[#28c840]
                "
              />

            </div>

            {/* Terminal title */}

            <div
              className="
                ml-4
                font-mono
                text-[11px]
                text-slate-500
                sm:text-xs
              "
            >
              atharv@cloudforge
            </div>

            {/* Environment */}

            <div
              className="
                ml-auto
                font-mono
                text-[9px]
                tracking-[0.18em]
                text-slate-600
                sm:text-[10px]
              "
            >
              PROD
            </div>

          </div>

          {/* ===================================================
              TERMINAL BODY
          ==================================================== */}

          <div
            ref={terminalRef}
            className="
              h-120
              overflow-y-auto
              bg-[#05080c]
              px-4
              py-5
              font-mono
              text-xs
              leading-6
              sm:px-5
              sm:text-sm
            "
          >

            {/* History */}

            {history.map(
              (line, index) => {

                const isPrompt =
                  line.startsWith(
                    PROMPT
                  );

                const isSystem =
                  line.startsWith(
                    "Ubuntu"
                  ) ||
                  line.startsWith(
                    "Cloud-init"
                  ) ||
                  line.startsWith(
                    "Type"
                  );

                return (
                  <pre
                    key={`${index}-${line}`}
                    className={`
                      whitespace-pre-wrap
                      wrap-break-word
                      ${
                        isPrompt
                          ? "text-sky-400"
                          : isSystem
                            ? "text-slate-300"
                            : "text-slate-400"
                      }
                    `}
                  >
                    {line}
                  </pre>
                );
              }
            )}

            {/* =================================================
                CURRENT PROMPT
            ================================================== */}

            <div
              className="
                mt-1
                flex
                min-w-0
                items-center
              "
            >

              <span
                className="
                  mr-2
                  shrink-0
                  whitespace-nowrap
                  text-sky-400
                "
              >
                {PROMPT}
              </span>

              <input
                ref={inputRef}
                value={input}
                onChange={(event) => {
                  setInput(
                    event.target.value
                  );
                  setHistoryIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal command"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  font-mono
                  text-slate-100
                  caret-sky-400
                  outline-none
                "
              />

            </div>

          </div>

          {/* ===================================================
              TERMINAL FOOTER
          ==================================================== */}

          <div
            className="
              flex
              min-h-9
              items-center
              justify-between
              border-t
              border-slate-800
              bg-[#0b0f15]
              px-4
              font-mono
              text-[9px]
              uppercase
              tracking-[0.14em]
              text-slate-600
            "
          >

            <div className="flex items-center gap-4">

              <span className="flex items-center gap-1.5">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-sky-400
                  "
                />
                AWS
              </span>

              <span className="flex items-center gap-1.5">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-blue-400
                  "
                />
                K8S
              </span>

              <span className="hidden items-center gap-1.5 sm:flex">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-slate-400
                  "
                />
                DOCKER
              </span>

              <span className="hidden items-center gap-1.5 sm:flex">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-violet-400
                  "
                />
                TERRAFORM
              </span>

            </div>

            <span>
              ONLINE
            </span>

          </div>

        </div>

        {/* =====================================================
            QUICK COMMANDS
        ====================================================== */}

        <div className="mt-5">

          <div
            className="
              mb-3
              text-center
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-slate-700
            "
          >
            Quick Commands
          </div>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >

            {quickCommands.map(
              (command) => (
                <button
                  key={command}
                  type="button"
                  onClick={() =>
                    executeCommand(
                      command
                    )
                  }
                  className="
                    rounded-md
                    border
                    border-slate-800
                    bg-slate-900/40
                    px-3
                    py-1.5
                    font-mono
                    text-[11px]
                    text-slate-500
                    transition
                    duration-200
                    hover:border-sky-500/30
                    hover:bg-sky-500/5
                    hover:text-sky-400
                    active:scale-95
                  "
                >
                  <span className="mr-1 text-slate-600">
                    $
                  </span>

                  {command}
                </button>
              )
            )}

          </div>

          <p
            className="
              mt-3
              text-center
              font-mono
              text-[9px]
              text-slate-700
            "
          >
            ENTER execute&nbsp;&nbsp;•&nbsp;&nbsp;
            ↑ ↓ history&nbsp;&nbsp;•&nbsp;&nbsp;
            TAB autocomplete&nbsp;&nbsp;•&nbsp;&nbsp;
            CTRL + L clear
          </p>

        </div>

      </div>
    </section>
  );
}