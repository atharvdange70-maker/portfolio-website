"use client";

import { useEffect, useRef, useState } from "react";

const commands: Record<string, string> = {
  help: `
Available commands:

  about        → About me
  skills       → Technical skills
  projects     → My DevOps projects
  experience   → Professional experience
  aws          → AWS services I work with
  contact      → Contact information
  clear        → Clear terminal
`,

  about: `
Atharv Dange

AWS DevOps Engineer focused on:
• Cloud Infrastructure
• Automation
• CI/CD
• Containerization
• High Availability

I build secure, scalable and reliable cloud-native solutions.
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
`,

  projects: `
01  EBS Backup Automation
    Lambda + EventBridge + EBS

02  EduBlitz 3-Tier Application
    S3 + CloudFront + EC2 + RDS

03  AWS HA Web Application
    EC2 + ALB + Auto Scaling

04  Static Website Deployment
    S3 + CloudFront
`,

  experience: `
Cloud Computing Intern

Working with:
• AWS infrastructure
• Cloud deployments
• Linux environments
• DevOps automation
• CI/CD workflows
`,

  aws: `
AWS Services:

EC2
S3
CloudFront
Route 53
VPC
ALB
Auto Scaling
RDS
Lambda
EBS
IAM
CloudFormation
ECR
ECS
EKS
EventBridge
`,

  contact: `
Let's connect.

LinkedIn:
linkedin.com/in/atharv-dange

GitHub:
github.com/atharvdange70-maker

Email:
Available through the Contact section.
`,
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Atharv Dange's DevOps Terminal.",
    "Type 'help' to see available commands.",
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const executeCommand = () => {
    const command = input.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output =
      commands[command] ||
      `Command not found: ${command}

Type 'help' to see available commands.`;

    setHistory((prev) => [
      ...prev,
      `atharv@devops:~$ ${command}`,
      output,
    ]);

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand();
    }
  };

  return (
    <section
      id="terminal"
      className="relative py-24 px-6"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="text-center mb-10">

          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-cyan-400">
            INTERACTIVE TERMINAL
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Explore My{" "}
            <span className="text-cyan-400">
              DevOps World
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Type a command below to explore my skills, projects and experience.
          </p>

        </div>

        {/* Terminal */}
        <div
          className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#050b14] shadow-[0_0_60px_rgba(0,200,255,0.08)]"
          onClick={() => inputRef.current?.focus()}
        >

          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#0b111b] px-5 py-4">

            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />

            <div className="ml-4 text-sm text-slate-400">
              atharv@devops-portfolio:~
            </div>

          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="h-107.5 overflow-y-auto p-6 font-mono text-sm leading-7 text-slate-300 md:text-base"
          >

            {history.map((line, index) => (
              <pre
                key={index}
                className="whitespace-pre-wrap"
              >
                {line}
              </pre>
            ))}

            {/* Input */}
            <div className="mt-2 flex items-center">

              <span className="mr-2 whitespace-nowrap text-cyan-400">
                atharv@devops:~$
              </span>

              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-transparent text-white outline-none caret-cyan-400"
                aria-label="Terminal command"
              />

            </div>

          </div>
        </div>

        {/* Quick Commands */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">

          {[
            "help",
            "about",
            "skills",
            "projects",
            "experience",
            "aws",
            "contact",
          ].map((command) => (
            <button
              key={command}
              onClick={() => {
                setInput(command);
                setTimeout(() => {
                  inputRef.current?.focus();
                }, 0);
              }}
              className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 font-mono text-sm text-cyan-400 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              {command}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}