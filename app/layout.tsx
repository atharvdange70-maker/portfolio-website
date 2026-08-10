import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "@/components/ThemeProvider";
import DevOpsBackground from "@/components/background/DevOpsBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atharv Dange | AWS DevOps Engineer",
  description:
    "AWS DevOps Engineer portfolio showcasing cloud infrastructure, automation, CI/CD, Docker, Kubernetes, Terraform, Jenkins and AWS projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen text-white">
        <Providers>
          <div className="portfolio-bg min-h-screen">
            {/* DevOps infrastructure background */}
            <DevOpsBackground />

            {/* Portfolio content */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}