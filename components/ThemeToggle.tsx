"use client";

import { Moon, Sun } from "lucide-react";
import { useIsDarkTheme, setTheme } from "@/lib/theme";

export default function ThemeToggle({
  colorClassName = "text-ink",
}: {
  colorClassName?: string;
}) {
  const isDark = useIsDarkTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(!isDark)}
      aria-label="Toggle theme"
      className={`${colorClassName} transition-all duration-300 active:scale-90`}
    >
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
