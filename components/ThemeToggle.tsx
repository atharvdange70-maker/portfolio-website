"use client";

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
      className="rounded-lg border px-4 py-2 transition
      bg-gray-900 text-white
      dark:bg-white dark:text-black"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}