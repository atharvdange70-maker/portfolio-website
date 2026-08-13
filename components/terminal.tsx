"use client";

import { useEffect, useRef, useState } from "react";

const commands: Record<string, string> = {
  help: `Available commands:
help  whoami  skills  projects  experience  certifications  contact  resume
ls    pwd     cd      cat      tail          journalctl       df       free
ss    kubectl neofetch systemctl htop uname  terraform        aws      docker

Try:
kubectl get pods
kubectl get nodes
kubectl top pods
kubectl get deployments
terraform state list
docker ps
aws sts get-caller-identity
`,

  whoami: `atharv
AWS DevOps Engineer

Focus:
• AWS Cloud Infrastructure
• CI/CD Automation
• Docker & Kubernetes
• Infrastructure as Code
• Linux & Networking
• High Availability
`,

  skills: `AWS
Docker
Kubernetes
Terraform
Jenkins
Linux
Git & GitHub
CI/CD
Networking
CloudWatch
Cloud Architecture
`,

  projects: `01  EBS Backup Automation
    AWS Lambda + EventBridge + EBS

02  EduBlitz 3-Tier Application
    CloudFront + S3 + EC2 + RDS

03  AWS High Availability Web App
    ALB + Auto Scaling + EC2

04  Static Website Deployment
    S3 + CloudFront
`,

  experience: `Cloud Computing / DevOps Intern

Working with:
• AWS infrastructure
• Cloud deployments
• Linux environments
• Docker
• Terraform
• CI/CD workflows
• Cloud monitoring
• DevOps automation
`,

  certifications: `CERTIFICATIONS & TRAINING

• AWS Developer Associate
  Optimizing AWS

• Introduction to Kubernetes

• Docker & Kubernetes Training

• Terraform for AWS

• Cyber Security Audits

• AWS Cloud Practitioner
  In Progress
`,

  contact: `Let's connect.

LinkedIn:
linkedin.com/in/atharv-dange

GitHub:
github.com/atharvdange70-maker

Email:
Available through the Contact section.
`,

  resume: `ATHARV DANGE
AWS DEVOPS ENGINEER

AWS • Terraform • Docker • Kubernetes
Jenkins • Linux • Git • CI/CD

Visit the Resume section of this portfolio
to view my latest resume.
`,

  pwd: `/home/atharv`,

  ls: `skills.md
projects
experience.log
contact.env
architecture.md
terraform
kubernetes
aws
slo.md`,

  "ls -la": `total 48
drwxr-xr-x  8 atharv devops 4096 Aug 13 14:02 .
drwxr-xr-x  3 root   root   4096 Aug 10 09:41 ..
-rw-r--r--  1 atharv devops 1284 Aug 13 13:48 skills.md
-rw-r--r--  1 atharv devops 2048 Aug 13 13:50 projects
-rw-r--r--  1 atharv devops 1842 Aug 13 13:52 experience.log
-rw-------  1 atharv devops  512 Aug 13 13:55 contact.env
drwxr-xr-x  4 atharv devops 4096 Aug 13 13:57 terraform
drwxr-xr-x  5 atharv devops 4096 Aug 13 13:58 kubernetes`,

  "kubectl get pods": `NAME                              READY   STATUS    RESTARTS   AGE
api-gateway-7db9c8f9f-2kxq9       1/1     Running   0          18d
api-gateway-7db9c8f9f-n7k2m       1/1     Running   0          4m
worker-65b4b78d9b-n8m2p           1/1     Running   0          2m
grafana-6bbf9f5689-xc9m2          1/1     Running   0          42d
prometheus-7bd9b8-5m              1/1     Running   0          42d

cluster complete: 5/5 pods healthy`,

  "kubectl get nodes": `NAME                          STATUS   ROLES    AGE
ip-10-0-4-21                  Ready    worker   42d
ip-10-0-5-13                  Ready    worker   42d
ip-10-0-6-17                  Ready    worker   41d

3 nodes
3 ready
0 not-ready`,

  "kubectl top pods": `NAME                         CPU(cores)   MEMORY(bytes)
api-gateway-7db9c8f9f-2kxq9   24m          184Mi
api-gateway-7db9c8f9f-n7k2m   18m          161Mi
worker-65b4b78d9b-n8m2p       31m          228Mi
grafana-6bbf9f5689-xc9m2      19m          342Mi
prometheus-7bd9b8-5m          27m          418Mi`,

  "kubectl get deployments": `NAME           READY   UP-TO-DATE   AVAILABLE
api-gateway    2/2     2            2
worker         1/1     1            1
grafana        1/1     1            1
prometheus     1/1     1            1`,

  "terraform state list": `aws_vpc.main
aws_subnet.public
aws_subnet.private
aws_security_group.app
aws_instance.app
aws_lb.main
aws_lb_target_group.app
aws_autoscaling_group.app
aws_db_instance.mysql
aws_cloudfront_distribution.main
aws_s3_bucket.website`,

  "docker ps": `CONTAINER ID   IMAGE              STATUS          PORTS
a82f31c91a2e   api-gateway:latest Up 18 days       0.0.0.0:8080
b72e89c1024a   grafana:latest     Up 42 days       0.0.0.0:3000
c61a77f8124e   prometheus:latest  Up 42 days       0.0.0.0:9090`,

  "aws sts get-caller-identity": `AWS ACCOUNT
────────────────────────────────

Account    : AWS Cloud Environment
Identity   : DevOps Engineer
Region     : ap-south-1
Provider   : Amazon Web Services

Status     : AUTHENTICATED`,

  neofetch: `       ████████        atharv@devops
     ████      ████      --------------------------
    ███          ███     OS          Linux
    ███          ███     Role        AWS DevOps Engineer
     ████      ████      Cloud       AWS
       ████████          Containers  Docker
                         Cluster     Kubernetes
                         IaC         Terraform
                         CI/CD       Jenkins
                         Monitoring  CloudWatch
`,

  architecture: `AWS CLOUD ARCHITECTURE

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
                    │    MySQL    │
                    └─────────────┘

Infrastructure:
VPC • Security Groups • ALB • Auto Scaling
`,

  status: `SYSTEM STATUS

AWS Infrastructure       [ ONLINE ]
CI/CD Pipeline            [ ONLINE ]
Docker                    [ ONLINE ]
Kubernetes                [ ONLINE ]
Terraform                 [ READY  ]
Git / GitHub               [ ONLINE ]
CloudWatch                 [ ONLINE ]

Environment               PRODUCTION
Region                    ap-south-1
Deployment                AUTOMATED
Monitoring                ENABLED

Overall Status            OPERATIONAL`,

  uptime: `SYSTEM INFORMATION

Environment    : Production
Platform       : AWS Cloud
Region         : ap-south-1
OS             : Linux
Containers     : Docker
Orchestration  : Kubernetes
IaC            : Terraform
CI/CD          : Jenkins
Monitoring     : CloudWatch

System Status  : OPERATIONAL`,

  systemctl: `● devops-pipeline.service - DevOps Deployment Pipeline
     Loaded: loaded
     Active: active (running)
     Status: "CI/CD pipeline operational"

● cloudwatch-agent.service
     Active: active (running)

● docker.service
     Active: active (running)

● kubelet.service
     Active: active (running)
`,

  "systemctl status": `● devops-pipeline.service
   Loaded: loaded
   Active: active (running)

   Deployment pipeline operational
   Last deployment: successful
   Monitoring: healthy
`,

  htop: `CPU  [|||||||||||||||||       ]  68%
MEM  [||||||||||||||          ]  56%
DISK [|||||||||               ]  38%

Processes:

  124  node
  216  docker
  382  kubelet
  411  prometheus
  512  grafana
  631  nginx
`,

  uname: `Linux atharv-devops 6.8.0-aws #1 SMP x86_64 GNU/Linux`,

  "uname -a": `Linux atharv-devops 6.8.0-aws #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`,

  terraform: `Terraform Infrastructure

Provider:
  AWS

Resources:
  VPC
  EC2
  ALB
  Auto Scaling
  RDS
  S3
  CloudFront
  IAM

State:
  synchronized
`,

  aws: `AWS SERVICES

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

Automation
  EventBridge
  CloudFormation

Monitoring
  CloudWatch

Containers
  ECR
`,

  docker: `Docker Environment

Containers: 3
Running:   3
Stopped:   0

Images:
  api-gateway
  grafana
  prometheus

Docker Engine: RUNNING
`,

  df: `Filesystem      Size  Used Avail Use%
/dev/root        30G   12G   17G  42%
/dev/data        80G   31G   45G  41%
/dev/logs        20G    7G   12G  37%`,

  free: `              total        used        free
Mem:           15.6Gi      8.2Gi      7.4Gi
Swap:           2.0Gi      0.0Gi      2.0Gi`,

  "git status": `On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
`,

  "git branch": `* main
  develop
  feature/cloud-infrastructure
`,

  "git log": `commit 8f31d92 (HEAD -> main)
feat: improve cloud infrastructure

commit 62a91fc
feat: add CI/CD pipeline

commit 3a18d71
feat: deploy 3-tier AWS application
`,
};

const quickCommands = [
  "help",
  "whoami",
  "skills",
  "projects",
  "kubectl get pods",
  "status",
  "aws",
  "contact",
];

const suggestions = [
  "help",
  "whoami",
  "skills",
  "projects",
  "experience",
  "certifications",
  "contact",
  "resume",
  "ls",
  "pwd",
  "kubectl get pods",
  "kubectl get nodes",
  "kubectl top pods",
  "terraform state list",
  "docker ps",
  "aws sts get-caller-identity",
  "neofetch",
  "status",
  "uptime",
  "systemctl",
  "htop",
  "uname -a",
  "aws",
  "docker",
  "clear",
];

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Ubuntu 24.04.2 LTS portfolio-ops tty1",
    "Cloud-init: loaded aws-prod topology, Terraform state, SLO rules, CI/CD events",
    "Try: kubectl get pods, kubectl top pods, tail -f /var/log/deployments.log",
    "Type 'help' to inspect the DevOps command center.",
    "",
    "atharv@aws-prod:/home/atharv$ ls",
    "skills.md  projects  experience.log  contact.env  architecture.md",
    "terraform  kubernetes  aws  slo.md",
    "",
    "atharv@aws-prod:/home/atharv$ ",
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
      commands[command] ??
      `${command}: command not found. Type 'help' for available commands.`;

    setHistory((previous) => [
      ...previous,
      `atharv@aws-prod:/home/atharv$ ${command}`,
      output,
      "",
    ]);

    setCommandHistory((previous) => {
      if (previous[previous.length - 1] === command) {
        return previous;
      }

      return [...previous, command];
    });

    setInput("");
    setHistoryIndex(-1);
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

      if (!commandHistory.length) return;

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);

      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!commandHistory.length || historyIndex === -1) {
        return;
      }

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);

      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();

      const current = input.trim().toLowerCase();

      if (!current) return;

      const match = suggestions.find((command) =>
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
      setHistoryIndex(-1);
    }
  };

  return (
    <section
      id="terminal"
      className="relative overflow-hidden px-4 py-24 sm:px-6"
    >
      {/* Terminal atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,212,191,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.7) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/4 px-4 py-2 font-mono text-xs tracking-[0.2em] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_currentColor]" />
            DEVOPS COMMAND CENTER
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Explore My{" "}
            <span className="text-cyan-400">
              Cloud Environment
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Interact with my portfolio like a real DevOps
            command line and explore my infrastructure, projects
            and technical stack.
          </p>

        </div>

        {/* Terminal */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-[#030608] shadow-[0_0_70px_rgba(34,211,238,0.05),0_30px_100px_rgba(0,0,0,0.55)]"
        >
          {/* Scanlines */}
          <div
            className="pointer-events-none absolute inset-0 z-20 opacity-[0.025]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(255,255,255,0.8) 3px)",
            }}
          />

          {/* Terminal Header */}
          <div className="relative z-30 flex h-12 items-center border-b border-cyan-400/15 bg-[#071014] px-4 sm:px-5">

            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f73]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#ffd34e]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#12d6a0]" />
            </div>

            {/* Terminal title */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 font-mono text-xs text-cyan-300/80 sm:block">
              atharv@eks-prod: ~/devops-command-center
            </div>

            {/* Production context */}
            <div className="ml-auto font-mono text-[10px] tracking-[0.18em] text-emerald-400 sm:text-xs">
              CONTEXT: PROD
            </div>

          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="relative z-10 h-125 overflow-y-auto px-4 py-5 font-mono text-[12px] leading-[1.45] text-slate-200 sm:px-5 sm:text-[13px] md:h-140 md:text-sm"
          >
            {history.map((line, index) => {
              const isPrompt = line.includes("atharv@aws-prod:");
              const isHeader =
                line.includes("Ubuntu 24.04") ||
                line.includes("Cloud-init:") ||
                line.includes("Try:") ||
                line.includes("Type 'help'");

              return (
                <pre
                  key={`${index}-${line}`}
                  className={`whitespace-pre-wrap wrap-break-word ${
                    isPrompt
                      ? "text-emerald-400"
                      : isHeader
                        ? "text-slate-100"
                        : "text-slate-300"
                  }`}
                >
                  {line}
                </pre>
              );
            })}

            {/* Input */}
            <div className="mt-1 flex min-w-0 items-center">
              <span className="mr-2 shrink-0 text-emerald-400">
                atharv@aws-prod:/home/atharv$
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
                autoCapitalize="off"
                spellCheck={false}
                aria-label="DevOps terminal command"
                className="min-w-0 flex-1 bg-transparent text-cyan-100 caret-cyan-300 outline-none placeholder:text-slate-700"
                placeholder=" "
              />

              {/* Cursor */}
              <span className="ml-1 h-4.5 w-1.75 animate-pulse bg-cyan-300/80" />
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="relative z-30 flex min-h-10 flex-wrap items-center justify-between gap-3 border-t border-cyan-400/10 bg-[#071014] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600 sm:px-5 sm:text-[10px]">

            <div className="flex flex-wrap items-center gap-3 sm:gap-5">

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AWS
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                K8S
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                DOCKER
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                TERRAFORM
              </span>

            </div>

            <span>
              PROD / ONLINE
            </span>

          </div>
        </div>

        {/* Quick Commands */}
        <div className="mt-6">

          <div className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
            Quick Commands
          </div>

          <div className="flex flex-wrap justify-center gap-2">

            {quickCommands.map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => executeCommand(command)}
                className="rounded-md border border-cyan-400/10 bg-cyan-400/2.5 px-3 py-1.5 font-mono text-[11px] text-slate-500 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/[0.07] hover:text-cyan-300 active:scale-95"
              >
                <span className="mr-1 text-emerald-400/70">
                  $
                </span>
                {command}
              </button>
            ))}

          </div>

          <div className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-slate-700">
            ENTER EXECUTE • ↑ ↓ HISTORY • TAB AUTOCOMPLETE • CTRL+L CLEAR
          </div>

        </div>

      </div>
    </section>
  );
}