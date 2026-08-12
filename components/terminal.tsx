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

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      executeCommand();
    }
  };

  return (
    <section
      id="terminal"
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">

          <span
            className="
              inline-block rounded-full
              border border-amber-400/30
              bg-amber-400/10
              px-5 py-2
              text-sm font-semibold
              tracking-widest
              text-amber-300
            "
          >
            INTERACTIVE TERMINAL
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Explore My{" "}
            <span className="text-amber-300">
              DevOps World
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Type a command below to explore my skills, projects and experience.
          </p>

        </div>

        {/* Terminal */}
        <div
          className="
            overflow-hidden rounded-2xl
            border border-amber-400/20
            bg-[#0a0a0a]
            shadow-[0_0_60px_rgba(245,158,11,0.06)]
          "
          onClick={() => inputRef.current?.focus()}
        >

          {/* Terminal Header */}
          <div
            className="
              flex items-center gap-2
              border-b border-white/8
              bg-[#111111]
              px-5 py-4
            "
          >

            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />

            <div className="ml-4 flex items-center gap-2 font-mono text-sm">
              <span className="text-slate-500">
                root
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-amber-300">
                atharv@devops
              </span>

              <span className="text-slate-500">
                ~/portfolio
              </span>
            </div>

          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="
              h-107.5
              overflow-y-auto
              p-6
              font-mono
              text-sm
              leading-7
              text-[#d6d3c9]
              md:text-base
            "
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

              <span
                className="
                  mr-2
                  whitespace-nowrap
                  font-semibold
                  text-amber-300
                "
              >
                atharv@devops:~$
              </span>

              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck={false}
                className="
                  w-full
                  bg-transparent
                  text-amber-100
                  outline-none
                  caret-amber-400
                  placeholder:text-slate-600
                "
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
              className="
                rounded-lg
                border border-amber-400/20
                bg-amber-400/4
                px-4 py-2
                font-mono
                text-sm
                text-amber-300
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-amber-400/50
                hover:bg-amber-400/10
                hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]
              "
            >
              {command}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}