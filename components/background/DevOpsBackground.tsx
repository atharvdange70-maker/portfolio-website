"use client";

import {
  siDocker,
  siKubernetes,
  siTerraform,
  siJenkins,
  siGit,
  siLinux,
  siGithub,
} from "simple-icons";

const icons = [
  {
    icon: siDocker,
    name: "Docker",
    className: "docker",
  },
  {
    icon: siKubernetes,
    name: "Kubernetes",
    className: "kubernetes",
  },
  {
    icon: siTerraform,
    name: "Terraform",
    className: "terraform",
  },
  {
    icon: siJenkins,
    name: "Jenkins",
    className: "jenkins",
  },
  {
    icon: siGit,
    name: "Git",
    className: "git",
  },
  {
    icon: siLinux,
    name: "Linux",
    className: "linux",
  },
  {
    icon: siGithub,
    name: "GitHub",
    className: "github",
  },
];

export default function DevOpsBackground() {
  return (
    <div className="devops-background" aria-hidden="true">

      {/* Infrastructure connection lines */}
      <div className="infra-lines">
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
        <span className="line line-4" />
        <span className="line line-5" />
      </div>

      {/* AWS */}
      <div className="devops-logo aws-logo">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.1 15.9c-.1-.4.1-.7.5-.8 1.2-.3 2.9-.1 3.1.2.2.3-.1 1.8-.6 2.8-.2.3-.5.4-.8.2-.3-.2-.4-.5-.2-.8.3-.5.5-1 .5-1.5-.7-.2-1.6-.2-2.5 0z" />
          <path d="M18.5 7.4c-.2-.3-.1-.7.2-.9.3-.2.7-.1.9.2 1.2 1.8 1.5 4.1.9 6.1-.1.4-.5.6-.8.5-.4-.1-.6-.5-.5-.8.5-1.7.3-3.5-.7-5.1z" />
          <path d="M8.2 10.7c.8-1.6 2.3-2.7 4-2.9 1.9-.3 3.8.4 5.1 1.8.3.3.2.7-.1 1-.3.2-.7.2-.9-.1-1-1.1-2.5-1.7-4-1.5-1.3.2-2.4 1-3 2.2-.2.3-.6.5-.9.3-.3-.1-.4-.5-.2-.8z" />
        </svg>

        <span>AWS</span>
      </div>

      {/* Other technology logos */}
      {icons.map(({ icon, name, className }) => (
        <div
          key={name}
          className={`devops-logo ${className}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={icon.path} />
          </svg>

          <span>{name}</span>
        </div>
      ))}

      {/* Center infrastructure core */}
      <div className="infra-core">
        <span />
        <span />
        <span />
      </div>

      {/* Data particles */}
      <div className="data-particles">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}