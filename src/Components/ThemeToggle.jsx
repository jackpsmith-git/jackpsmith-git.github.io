import { useTheme } from "../hooks/useTheme"

const Sun = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    className="text-yellow-500"
  >
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <path
      d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const Moon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    className="text-zinc-300"
  >
    <path
      d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
      fill="currentColor"
    />
  </svg>
)

export const ThemeToggle = () => {
  const [theme, setTheme] = useTheme()

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        fixed bottom-6 right-6 z-[9999]
        w-14 h-14
        rounded-full
        bg-white dark:bg-black
        border border-black/10 dark:border-white/10
        shadow-lg
        flex items-center justify-center
        transition-colors duration-300
        overflow-hidden
      "
      aria-label="Toggle theme"
    >
      {/* inner rotating container */}
      <div
        className={`
          relative w-full h-full flex items-center justify-center
          transition-transform duration-500 ease-in-out
          ${isDark ? "rotate-180" : "rotate-0"}
        `}
      >
        {/* SUN */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center
            transition-all duration-300
            ${isDark ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}
          `}
        >
          <Sun />
        </div>

        {/* MOON */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center
            transition-all duration-300
            ${isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}
          `}
        >
          <Moon />
        </div>
      </div>
    </button>
  )
}