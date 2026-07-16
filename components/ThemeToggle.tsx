"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="w-12 h-12 rounded-xl flex items-center justify-center
      bg-white dark:bg-slate-900
      border border-cyan-500
      shadow-lg hover:scale-110 transition-all"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" size={22} />
      ) : (
        <Moon className="text-slate-700" size={22} />
      )}
    </button>
  );
}