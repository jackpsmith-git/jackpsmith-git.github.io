import { useEffect, useRef, useState } from "react"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import PauseRoundedIcon from '@mui/icons-material/PauseRounded'
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded'

const ROWS = 24
const COLS = 24

const createGrid = () =>
  Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => 0)
  )

const countNeighbors = (grid, x, y) => {
  let total = 0

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue

      const row = y + i
      const col = x + j

      if (
        row >= 0 &&
        row < ROWS &&
        col >= 0 &&
        col < COLS
      ) {
        total += grid[row][col]
      }
    }
  }

  return total
}

const nextGeneration = (grid) => {
  const next = createGrid()

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const alive = grid[y][x] === 1
      const neighbors = countNeighbors(grid, x, y)

      if (alive && (neighbors === 2 || neighbors === 3)) {
        next[y][x] = 1
      } else if (!alive && neighbors === 3) {
        next[y][x] = 1
      }
    }
  }

  return next
}

export const GameOfLife = () => {
  const [grid, setGrid] = useState(createGrid())
  const [running, setRunning] = useState(false)

  const runningRef = useRef(running)
  runningRef.current = running

  useEffect(() => {
    if (!running) return

    const interval = setInterval(() => {
      setGrid(g => nextGeneration(g))
    }, 120)

    return () => clearInterval(interval)
  }, [running])

  const toggleCell = (y, x) => {
    if (running) return

    setGrid(g => {
      const next = g.map(row => [...row])
      next[y][x] = next[y][x] ? 0 : 1
      return next
    })
  }

  const randomize = () => {
    const next = createGrid().map(row =>
      row.map(() => (Math.random() > 0.7 ? 1 : 0))
    )

    setGrid(next)
  }

  const clear = () => {
    setGrid(createGrid())
    setRunning(false)
  }

  return (
    <div className="h-full flex flex-col bg-white dark:bg-black rounded-lg overflow-hidden transition-col">

      <div className="flex-1 items-center justify-center flex p-2 border-b border-black/10 dark:border-white/10">
        <div className="flex w-full gap-2">

          <button
            onClick={() => setRunning(v => !v)}
            className="
              flex-1 flex items-center justify-center
              py-1 rounded-md
              bg-black text-white
              dark:bg-white dark:text-black
            "
          >
            {running
              ? <PauseRoundedIcon fontSize="small" />
              : <PlayArrowRoundedIcon fontSize="small" />
            }
          </button>

          <button
            onClick={randomize}
            className="
              flex-1 flex items-center justify-center
              py-1 rounded-md
              border border-black/10 dark:border-white/10
              text-black dark:text-white
            "
          >
            <ShuffleRoundedIcon fontSize="small" />
          </button>

          <button
            onClick={clear}
            className="
              flex-1 flex items-center justify-center
              py-1 rounded-md
              border border-black/10 dark:border-white/10
              text-black dark:text-white
            "
          >
            <ReplayRoundedIcon fontSize="small" />
          </button>

        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-2">
        <div
          className="
            grid gap-px
            bg-black/5 dark:bg-white/5
            w-full h-full
            max-h-full
            aspect-square
          "
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`
          }}
        >
          {grid.map((row, y) =>
            row.map((cell, x) => (
              <button
                key={`${y}-${x}`}
                onClick={() => toggleCell(y, x)}
                className={`
                  transition-col
                  ${cell
                    ? "bg-black dark:bg-white"
                    : "bg-white dark:bg-zinc-900"}
                `}
              />
            ))
          )}
        </div>
      </div>

    </div>
  )
}