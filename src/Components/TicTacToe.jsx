import { useState } from "react"

const WIN_LINES = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

const getWinner = (board) => {
  for (const [a,b,c] of WIN_LINES) {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a]
    }
  }

  if (board.every(Boolean)) return "draw"
  return null
}

const getAvailableMoves = (board) => {
  return board
    .map((cell, i) => (cell === null ? i : null))
    .filter(v => v !== null)
}

const minimax = (board, isMaximizing) => {
  const result = getWinner(board)
  if (result === "O") return 1
  if (result === "X") return -1
  if (result === "draw") return 0
  const moves = getAvailableMoves(board)

  if (isMaximizing) {
    let best = -Infinity
    for (const move of moves) {
      const next = [...board]
      next[move] = "O"
      const score = minimax(next, false)
      best = Math.max(best, score)
    }

    return best
  }

  let best = Infinity

  for (const move of moves) {
    const next = [...board]
    next[move] = "X"
    const score = minimax(next, true)
    best = Math.min(best, score)
  }

  return best
}

const cpuMove = (board) => {
  const moves = getAvailableMoves(board)
  let bestScore = -Infinity
  let bestMove = null

  for (const move of moves) {
    const next = [...board]
    next[move] = "O"

    const score = minimax(next, false)

    if (score > bestScore) {
      bestScore = score
      bestMove = move
    }
  }

  const next = [...board]

  if (bestMove !== null) {
    next[bestMove] = "O"
  }

  return next
}

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [locked, setLocked] = useState(false)
  const winner = getWinner(board)

  const handleClick = (i) => {
    if (locked) return
    if (board[i]) return
    if (winner) return
    const next = [...board]
    next[i] = "X"
    const playerResult = getWinner(next)
    setBoard(next)
    if (playerResult) return
    setLocked(true)

    setTimeout(() => {
      const cpuBoard = cpuMove(next)
      setBoard(cpuBoard)
      setLocked(false)
    }, 450)
  }

  const reset = () => {
    setBoard(Array(9).fill(null))
    setLocked(false)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white dark:bg-black rounded-lg overflow-hidden transition-colors duration-700 ease-in-out">
      <div className="grid grid-cols-3 gap-2 p-4 w-full max-w-[260px]">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="
              aspect-square rounded-xl
              border border-black/10 dark:border-white/10
              bg-black/[0.04] dark:bg-white/[0.06]
              hover:bg-black/[0.08]
              dark:hover:bg-white/[0.1]
              transition-colors duration-700 ease-in-out
              text-3xl font-bold
              flex items-center justify-center
              text-black dark:text-white
            "
          >
            {cell}
          </button>
        ))}

      </div>

      {winner && (
        <div
          className="
            absolute inset-0
            bg-black/70 backdrop-blur-sm
            flex flex-col items-center justify-center
            gap-4
          "
        >
          <h2 className="text-white text-2xl font-bold">
            {winner === "draw"
              ? "Draw!"
              : winner === "X"
              ? "You Win!"
              : "CPU Wins!"}
          </h2>

          <button
            onClick={reset}
            className="
              px-5 py-2 rounded-full
              bg-white text-black
              font-semibold
              hover:scale-105
              transition-transform duration-700 ease-in-out
            "
          >
            Play Again
          </button>
        </div>
      )}

    </div>
  )
}