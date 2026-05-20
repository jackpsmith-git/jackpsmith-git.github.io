import { useTheme } from "../hooks/useTheme"
import { useState } from "react"

const SunCore = () => (
  <div className="relative flex items-center justify-center scale-80">

    {/* rays (slightly larger) */}
    <div className="absolute w-12 h-12 opacity-60">
      <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400">
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">

          {/* main axes */}
          <line x1="50" y1="2"  x2="50" y2="16" />
          <line x1="50" y1="84" x2="50" y2="98" />
          <line x1="2"  y1="50" x2="16" y2="50" />
          <line x1="84" y1="50" x2="98" y2="50" />

          {/* diagonals */}
          <line x1="20" y1="20" x2="32" y2="32" />
          <line x1="68" y1="68" x2="80" y2="80" />
          <line x1="20" y1="80" x2="32" y2="68" />
          <line x1="68" y1="32" x2="80" y2="20" />

        </g>
      </svg>
    </div>

    {/* glow */}
    <div className="absolute w-6 h-6 bg-yellow-400 rounded-full blur-md opacity-70" />

    {/* core */}
    <div className="relative z-10 w-3.5 h-3.5 bg-yellow-300 rounded-full" />
  </div>
)

const MoonCore = () => (
  <div className="relative flex items-center justify-center">
    <div className="w-5 h-5 bg-zinc-300 rounded-full" />
    <div className="absolute w-4 h-4 bg-zinc-900 dark:bg-zinc-950 rounded-full translate-x-1 -translate-y-1 opacity-100" />
  </div>
)

export const ThemeToggle = () => {
  const [theme, setTheme] = useTheme()
  const [rippling, setRippling] = useState(false)

  const isDark = theme === "dark"

  const toggle = () => {
    setRippling(true)
    setTheme(isDark ? "light" : "dark")

    setTimeout(() => setRippling(false), 700)
  }

  return (
    <button
      onClick={toggle}
      className="
        fixed bottom-6 right-6 z-[9999]
        w-16 h-16 rounded-full
        flex items-center justify-center
        overflow-hidden
        transition-colors duration-700
        bg-white dark:bg-zinc-950
        border border-black/10 dark:border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]
      "
    >
      {/* ambient ripple */}
      <span
        className={`
          absolute inset-0 rounded-full
          bg-yellow-200/40 dark:bg-blue-500/20
          scale-0
          ${rippling ? "animate-ping opacity-100" : "opacity-0"}
        `}
      />

      {/* inner orb */}
      <div
        className={`
          relative w-full h-full flex items-center justify-center
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isDark ? "rotate-180 scale-110" : "rotate-0 scale-100"}
        `}
      >
        {/* SUN CORE */}
        <div
          className={`
            absolute transition-all duration-500
            ${isDark ? "opacity-0 scale-50 blur-sm" : "opacity-100 scale-100"}
          `}
        >
          <SunCore />
        </div>

        {/* MOON CORE */}
        <div
          className={`
            absolute transition-all duration-500
            ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-50 blur-sm"}
          `}
        >
          <MoonCore />
        </div>
      </div>
    </button>
  )
}