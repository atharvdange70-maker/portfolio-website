"use client";

import { useEffect, useRef, useState } from "react";

const PROMPT = "atharv@eks-prod:/home/atharv$";

const commands: Record<string, string> = {
  help: `Available commands:

  help             Show available commands
  whoami           Professional profile
  about            About me
  skills           Technical skills
  stack            DevOps technology stack
  projects         DevOps projects
  experience       Professional experience
  certifications   Certifications & training
  architecture     AWS architecture
  aws              AWS services
  status           Infrastructure status
  uptime           System information
  neofetch         System profile
  resume           Resume information
  contact          Contact information

  Linux:
  ls               List files
  pwd              Current directory
  cd               Change directory
  cat              Read file
  df               Disk usage
  free             Memory usage
  uname            System information
  htop             System monitor
  systemctl        Service status

  DevOps:
  docker ps        Running containers
  kubectl get pods Kubernetes pods
  kubectl get nodes Kubernetes nodes
  kubectl top pods Kubernetes resource usage
  kubectl get deployments Kubernetes deployments
  terraform        Terraform information
  terraform state list Terraform resources

  Git:
  git status       Git working tree
  git branch       Git branches
  git log          Git history

  clear            Clear terminal

Tip:
  Use ↑ / ↓ for command history
  Use TAB for autocomplete`,

  whoami: `atharv

AWS DevOps Engineer

Focus:
  AWS Cloud Infrastructure
  DevOps Automation
  CI/CD
  Docker & Kubernetes
  Infrastructure as Code
  Linux & Networking
  High Availability`,

  about: `Atharv Dange

AWS DevOps Engineer focused on building
secure, scalable and reliable cloud-native
infrastructure.

Core focus:
  • AWS Cloud
  • Infrastructure Automation
  • CI/CD
  • Containers
  • Kubernetes
  • Infrastructure as Code
  • Monitoring
  • High Availability`,

  skills: `TECHNICAL SKILLS
────────────────────────────────

Cloud:
  AWS

DevOps:
  CI/CD
  Jenkins
  Git & GitHub

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
  CloudWatch`,

  stack: `DEVOPS STACK
────────────────────────────────

Cloud             AWS
Infrastructure    Terraform
Containers        Docker
Orchestration     Kubernetes
CI/CD             Jenkins
Operating System  Linux
Version Control   Git / GitHub
Monitoring        CloudWatch
`,

  projects: `DEVOPS PROJECTS
────────────────────────────────

01  EBS Backup Automation
    Lambda + EventBridge + EBS

02  EduBlitz 3-Tier Application
    S3 + CloudFront + EC2 + RDS

03  AWS High Availability Web App
    EC2 + ALB + Auto Scaling

04  Static Website Deployment
    S3 + CloudFront
`,

  experience: `PROFESSIONAL EXPERIENCE
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
`,

  certifications: `CERTIFICATIONS & TRAINING
────────────────────────────────

  • AWS Developer Associate
    Optimizing AWS

  • Introduction to Kubernetes

  • Docker & Kubernetes Training

  • Terraform for AWS

  • Cyber Security Audits

  • AWS Cloud Practitioner
    In Progress
`,

  architecture: `AWS CLOUD ARCHITECTURE
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
                  │    MySQL    │
                  └─────────────┘

Infrastructure:
  VPC
  Security Groups
  ALB
  Auto Scaling
  CloudFront
  S3
  EC2
  RDS
`,

  aws: `AWS SERVICES
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

Containers:
  ECR
`,

  status: `SYSTEM STATUS
────────────────────────────────

AWS Infrastructure       [ ONLINE ]
CI/CD Pipeline             [ ONLINE ]
Docker                     [ ONLINE ]
Kubernetes                 [ ONLINE ]
Terraform                  [ READY  ]
Git / GitHub               [ ONLINE ]
CloudWatch                 [ ONLINE ]

Environment               PRODUCTION
Region                    ap-south-1
Deployment                AUTOMATED
Monitoring                ENABLED

Overall Status            OPERATIONAL
`,

  uptime: `SYSTEM INFORMATION
────────────────────────────────

Environment    : Production
Platform       : AWS Cloud
Region         : ap-south-1
OS             : Linux
Containers     : Docker
Orchestration  : Kubernetes
IaC            : Terraform
CI/CD          : Jenkins
Monitoring     : CloudWatch

System Status  : OPERATIONAL
`,

  neofetch: `       ████████        atharv@devops
     ████      ████      ─────────────────────
    ███          ███     Role        AWS DevOps Engineer
    ███          ███     Cloud       AWS
     ████      ████      OS          Linux
       ████████          Docker      Enabled
                         Kubernetes  Enabled
                         Terraform   Enabled
                         Jenkins     Enabled
                         Monitoring  CloudWatch
`,

  resume: `ATHARV DANGE
AWS DEVOPS ENGINEER
────────────────────────────────

Core Technologies:

  AWS
  Terraform
  Docker
  Kubernetes
  Jenkins
  Linux
  Git
  CI/CD

Visit the Resume section of this
portfolio to view my latest resume.
`,

  contact: `CONTACT
────────────────────────────────

LinkedIn:
linkedin.com/in/atharv-dange

GitHub:
github.com/atharvdange70-maker

Email:
Available through the Contact section.

Open to:
  • DevOps opportunities
  • Cloud projects
  • Collaboration
  • Technical discussions
`,

  ls: `skills.md       projects
experience.log  contact.env
architecture.md terraform
kubernetes      aws
slo.md`,

  "ls -la": `total 48

drwxr-xr-x  8 atharv devops 4096 Aug 13 .
drwxr-xr-x  3 root   root   4096 Aug 10 ..
-rw-r--r--  1 atharv devops 1284 Aug 13 skills.md
-rw-r--r--  1 atharv devops 2048 Aug 13 projects
-rw-r--r--  1 atharv devops 1842 Aug 13 experience.log
-rw-------  1 atharv devops  512 Aug 13 contact.env
drwxr-xr-x  4 atharv devops 4096 Aug 13 terraform
drwxr-xr-x  5 atharv devops 4096 Aug 13 kubernetes
drwxr-xr-x  3 atharv devops 4096 Aug 13 aws
-rw-r--r--  1 atharv devops  842 Aug 13 slo.md`,

  pwd: `/home/atharv`,

  cd: `Usage:
  cd <directory>

Available directories:
  projects
  terraform
  kubernetes
  aws`,

  "cd projects": `~/projects`,

  "cd terraform": `~/terraform`,

  "cd kubernetes": `~/kubernetes`,

  "cd aws": `~/aws`,

  cat: `Usage:
  cat <file>

Available files:
  skills.md
  experience.log
  architecture.md
  slo.md`,

  "cat skills.md": `AWS
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

  "cat architecture.md": `AWS 3-TIER ARCHITECTURE

User
 ↓
CloudFront
 ↓
S3
 ↓
EC2
 ↓
RDS MySQL`,

  "cat experience.log": `DevOps / Cloud Computing Intern

AWS Infrastructure
Cloud Deployments
Linux
Docker
Terraform
CI/CD
Monitoring
Automation`,

  "cat slo.md": `SERVICE LEVEL OBJECTIVES

Availability      99.9%
Deployment        Automated
Monitoring        Enabled
Backups           Enabled
Infrastructure    Terraform
Containers        Docker
Orchestration     Kubernetes`,

  df: `Filesystem      Size  Used Avail Use%
/dev/root        30G   12G   17G  42%
/dev/data        80G   31G   45G  41%
/dev/logs        20G    7G   12G  37%`,

  free: `              total        used        free
Mem:           15.6Gi      8.2Gi      7.4Gi
Swap:           2.0Gi      0.0Gi      2.0Gi`,

  uname: `Linux atharv-devops 6.8.0-aws x86_64 GNU/Linux`,

  "uname -a": `Linux atharv-devops 6.8.0-aws #1 SMP x86_64 GNU/Linux`,

  htop: `CPU  [|||||||||||||||||       ]  68%
MEM  [||||||||||||||          ]  56%
DISK [|||||||||               ]  38%

Processes:

  124  node
  216  docker
  382  kubelet
  411  prometheus
  512  grafana
  631  nginx`,

  systemctl: `● devops-pipeline.service
     Loaded: loaded
     Active: active (running)
     Status: CI/CD pipeline operational

● docker.service
     Active: active (running)

● kubelet.service
     Active: active (running)

● cloudwatch-agent.service
     Active: active (running)`,

  "systemctl status": `● devops-pipeline.service
   Loaded: loaded
   Active: active (running)

   Deployment pipeline operational
   Last deployment: successful
   Monitoring: healthy`,

  "docker ps": `CONTAINER ID   IMAGE              STATUS
a82f31c91a2e   api-gateway:latest Up 18 days
b72e89c1024a   grafana:latest     Up 42 days
c61a77f8124e   prometheus:latest  Up 42 days`,

  "docker images": `REPOSITORY       TAG       STATUS
api-gateway      latest    ready
grafana          latest    ready
prometheus       latest    ready`,

  "kubectl get pods": `NAME                              READY   STATUS    RESTARTS   AGE
api-gateway-7db9c8f9f-2kxq9       1/1     Running   0          18d
api-gateway-7db9c8f9f-n7k2m       1/1     Running   0          4m
worker-65b4b78d9b-n8m2p           1/1     Running   0          2m
grafana-6bbf9f5689-xc9m2          1/1     Running   0          42d
prometheus-7bd9b8-5m              1/1     Running   0          42d

cluster complete: 5/5 pods healthy`,

  "kubectl get nodes": `NAME              STATUS   ROLES    AGE
ip-10-0-4-21      Ready    worker   42d
ip-10-0-5-13      Ready    worker   42d
ip-10-0-6-17      Ready    worker   41d

3 nodes
3 ready
0 not-ready`,

  "kubectl top pods": `NAME                         CPU(cores)   MEMORY(bytes)
api-gateway-7db9c8f9f-2kxq9   24m          184Mi
api-gateway-7db9c8f9f-n7k2m   18m          161Mi
worker-65b4b78d9b-n8m2p       31m          228Mi
grafana-6bbf9f5689-xc9m2      19m          342Mi
prometheus-7bd9b8-5m              27m          418Mi`,

  "kubectl get deployments": `NAME           READY   UP-TO-DATE   AVAILABLE
api-gateway    2/2     2            2
worker         1/1     1            1
grafana        1/1     1            1
prometheus     1/1     1            1`,

  "kubectl get svc": `NAME           TYPE        CLUSTER-IP      PORT(S)
api-gateway    ClusterIP   10.96.120.21     8080/TCP
grafana        ClusterIP   10.96.130.18     3000/TCP
prometheus     ClusterIP   10.96.140.11     9090/TCP`,

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

  terraform: `Terraform Infrastructure
────────────────────────────────

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
  synchronized`,

  "terraform plan": `Terraform will perform the following actions:

  + create
  ~ update in-place

Plan:
  2 to add
  1 to change
  0 to destroy

Plan: infrastructure changes ready.`,

  "git status": `On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean`,

  "git branch": `* main
  develop
  feature/cloud-infrastructure`,

  "git log": `commit 8f31d92 (HEAD -> main)
feat: improve cloud infrastructure

commit 62a91fc
feat: add CI/CD pipeline

commit 3a18d71
feat: deploy 3-tier AWS application`,

  "aws sts get-caller-identity": `AWS ACCOUNT
────────────────────────────────

Provider   : Amazon Web Services
Region     : ap-south-1
Identity   : DevOps Engineer
Environment: Production

Status     : AUTHENTICATED`,

  "aws configure": `AWS CLI configuration

Profile: default
Region : ap-south-1
Output : json

Configuration loaded.`,

  "aws ec2 describe-instances": `Reservations: 2
Instances : 3

State:
  running   3
  stopped   0

Region:
  ap-south-1`,

  "aws s3 ls": `2026-06-18  portfolio-website
2026-07-04  edublitz-static
2026-07-21  aws-backup-automation`,

  "aws cloudfront list-distributions": `CloudFront distributions:

E2ABC123XYZ
Status: Deployed

E3DEF456XYZ
Status: Deployed`,

  "tail -f /var/log/deployments.log": `2026-08-13 14:01:21 deployment started
2026-08-13 14:01:29 building application
2026-08-13 14:01:47 docker image created
2026-08-13 14:02:03 deployment successful
2026-08-13 14:02:05 health check passed
2026-08-13 14:02:05 service status: healthy`,

  "journalctl -u kubelet": `Aug 13 13:58:21 kubelet started
Aug 13 13:58:22 node registered
Aug 13 13:58:23 container runtime ready
Aug 13 13:58:24 node status: Ready
Aug 13 14:02:05 health checks passed`,

  ss: `Netid  State   Local Address
tcp    LISTEN  0.0.0.0:22
tcp    LISTEN  0.0.0.0:80
tcp    LISTEN  0.0.0.0:443
tcp    LISTEN  0.0.0.0:8080`,

  "ss -tulpn": `tcp LISTEN 0.0.0.0:22
tcp LISTEN 0.0.0.0:80
tcp LISTEN 0.0.0.0:443
tcp LISTEN 0.0.0.0:8080
tcp LISTEN 0.0.0.0:9090`,

  "ps aux": `USER       PID   COMMAND
atharv     124   node server.js
root       216   dockerd
root       382   kubelet
prometheus 411   prometheus
grafana    512   grafana-server
root       631   nginx`,
};

const commandList = Object.keys(commands);

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

export default function Terminal() {
  const [input, setInput] = useState("");

  /*
   * IMPORTANT:
   * Only the boot messages are shown automatically.
   * ls/help are NOT executed automatically.
   */
  const [history, setHistory] = useState<string[]>([
    "Ubuntu 24.04.2 LTS portfolio-ops tty1",
    "Cloud-init: loaded aws-prod topology, Terraform state, SLO rules, CI/CD events",
    "Try: kubectl get pods, kubectl top pods, tail -f /var/log/deployments.log",
    "Type 'help' to inspect the DevOps command center.",
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
      commands[command] ??
      `${command}: command not found.

Type 'help' to see available commands.`;

    setHistory((previous) => [
      ...previous,
      `${PROMPT} ${command}`,
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

      const matches = commandList.filter((command) =>
        command.startsWith(current)
      );

      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory((previous) => [
          ...previous,
          `${PROMPT} ${current}`,
          matches.join("  "),
          "",
        ]);
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
      className="relative overflow-hidden px-4 py-10 sm:px-6"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.7) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/2.5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-8 text-center">

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
            Interact with my portfolio through a production-style
            DevOps command line.
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

          {/* Header */}
          <div className="relative z-30 flex h-12 items-center border-b border-cyan-400/15 bg-[#071014] px-4 sm:px-5">

            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f73]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#ffd34e]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#12d6a0]" />
            </div>

            <div className="absolute left-1/2 hidden -translate-x-1/2 font-mono text-xs text-cyan-300/80 sm:block">
              atharv@eks-prod: ~/devops-command-center
            </div>

            <div className="ml-auto font-mono text-[10px] tracking-[0.18em] text-emerald-400 sm:text-xs">
              CONTEXT: PROD
            </div>

          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="relative z-10 h-112.5 overflow-y-auto px-4 py-4 font-mono text-[12px] leading-[1.45] text-slate-200 sm:px-5 sm:text-[13px] md:h-125 md:text-sm"
          >

            {history.map((line, index) => {
              const isPrompt = line.startsWith(PROMPT);

              const isBootMessage =
                line.startsWith("Ubuntu") ||
                line.startsWith("Cloud-init") ||
                line.startsWith("Try:") ||
                line.startsWith("Type 'help'");

              return (
                <pre
                  key={`${index}-${line}`}
                  className={`whitespace-pre-wrap wrap-break-word ${
                    isPrompt
                      ? "text-emerald-400"
                      : isBootMessage
                        ? "text-slate-100"
                        : "text-slate-300"
                  }`}
                >
                  {line}
                </pre>
              );
            })}

            {/* ONLY LIVE PROMPT */}
            <div className="mt-1 flex min-w-0 items-center">

              <span className="mr-2 shrink-0 whitespace-nowrap text-emerald-400">
                {PROMPT}
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
                className="min-w-0 flex-1 bg-transparent text-cyan-100 caret-cyan-300 outline-none"
              />

              <span className="ml-1 h-4.5 w-1.75 animate-pulse bg-cyan-300/80" />

            </div>

          </div>

          {/* Footer */}
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