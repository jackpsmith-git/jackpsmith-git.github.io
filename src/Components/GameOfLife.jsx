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
    <div className="w-full h-full bg-white dark:bg-black rounded-lg flex flex-col overflow-hidden transition-colors duration-700 ease-in-out">
      <div className="flex items-center justify-between pb-2 border-b border-black/10 dark:border-white/10 transition-colors duration-700 ease-in-out">
        <div className="flex w-full gap-2">

          <button
            onClick={() => setRunning(v => !v)}
            className="
              flex-1 flex items-center justify-center
              py-1 rounded-md
              bg-black text-white
              dark:bg-white dark:text-black
              transition-colors duration-700 ease-in-out
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
              transition-colors duration-700 ease-in-out
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
              transition-colors duration-700 ease-in-out
            "
          >
            <ReplayRoundedIcon fontSize="small" />
          </button>

        </div>
      </div>

      <div
        className="
          flex-1 grid p-2 gap-[1px]
          bg-black/5 dark:bg-white/5 transition-colors duration-700 ease-in-out
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
                aspect-square rounded-[2px]
                transition-colors duration-700 ease-in-out
                ${
                  cell
                    ? "bg-black dark:bg-white"
                    : "bg-white dark:bg-zinc-900"
                }
              `}
            />
          ))
        )}
      </div>

    </div>
  )
}