import { useEffect, useRef, useState } from "react"

const WIDTH = 1200
const HEIGHT = 300

const BIRD_SIZE = 18
const GRAVITY = 0.24
const JUMP = -6.5

const PIPE_WIDTH = 52
const GAP = 135
const PIPE_SPEED = 1.6

export const FlappyWidget = () => {
  const frameRef = useRef()
  const containerRef = useRef()

  const birdY = useRef(HEIGHT / 2)
  const velocity = useRef(0)

  const pipes = useRef([
    {
      x: WIDTH + 80,
      gapY: 120,
      passed: false,
    },
  ])

  const [started, setStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [tick, setTick] = useState(0)

  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)

  const reset = () => {
    birdY.current = HEIGHT / 2
    velocity.current = 0

    pipes.current = [
      {
        x: WIDTH + 80,
        gapY: 120,
        passed: false,
      },
    ]

    setScore(0)
    setGameOver(false)
    setStarted(false)
  }

    const flap = () => {
    if (gameOver) return

    if (!started) {
        setStarted(true)
    }

    velocity.current = JUMP
    birdY.current -= 2
    }

  useEffect(() => {
    const loop = () => {
      if (started && !gameOver) {
        velocity.current += GRAVITY
        birdY.current += velocity.current

        pipes.current.forEach(pipe => {
          pipe.x -= PIPE_SPEED

          if (!pipe.passed && pipe.x + PIPE_WIDTH < 60) {
            pipe.passed = true

            setScore(s => {
              const next = s + 1
              setBest(b => Math.max(b, next))
              return next
            })
          }
        })

        const last = pipes.current[pipes.current.length - 1]

        if (last.x < WIDTH - 180) {
          pipes.current.push({
            x: WIDTH,
            gapY: 60 + Math.random() * 120,
            passed: false,
          })
        }

        pipes.current = pipes.current.filter(
          pipe => pipe.x > -PIPE_WIDTH
        )

        // collisions
        if (
          birdY.current < 0 ||
          birdY.current + BIRD_SIZE > HEIGHT - 2
        ) {
          setGameOver(true)
        }

        pipes.current.forEach(pipe => {
          const withinX =
            50 + BIRD_SIZE > pipe.x &&
            50 < pipe.x + PIPE_WIDTH

          const hitTop =
            birdY.current < pipe.gapY

          const hitBottom =
            birdY.current + BIRD_SIZE >
            pipe.gapY + GAP

          if (withinX && (hitTop || hitBottom)) {
            setGameOver(true)
          }
        })
      }

      setTick(t => t + 1)
      frameRef.current = requestAnimationFrame(loop)
    }

    frameRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(frameRef.current)
  }, [started, gameOver])

  return (
    <div
      ref={containerRef}
      onPointerDown={flap}
      className="
        relative w-full h-full overflow-hidden
        rounded-lg cursor-pointer select-none
        bg-white dark:bg-black
        transition-colors duration-700 ease-in-out
      "
    >
      <div
        className="
          absolute top-3 left-1/2 -translate-x-1/2
          z-30 text-sm font-bold
          text-black dark:text-white transition-colors duration-700 ease-in-out
        "
      >
        {score}
      </div>

      <div
        className="
          absolute rounded-full
          bg-black dark:bg-white
          shadow-[0_0_18px_rgba(255,255,255,0.2)]
          transition-colors duration-700 ease-in-out
        "
        style={{
          width: BIRD_SIZE,
          height: BIRD_SIZE,
          left: 50,
          top: birdY.current,
          transform: `rotate(${velocity.current * 3}deg)`,
        }}
      />

      {/* pipes */}
      {pipes.current.map((pipe, i) => (
        <div key={i}>
          {/* top */}
          <div
            className="
              absolute bg-black dark:bg-white
              rounded-b-xl
              transition-colors duration-700 ease-in-out
            "
            style={{
              left: pipe.x,
              top: 0,
              width: PIPE_WIDTH,
              height: pipe.gapY,
            }}
          />

          {/* bottom */}
          <div
            className="
              absolute bg-black dark:bg-white
              rounded-t-xl
              transition-colors duration-700 ease-in-out
            "
            style={{
              left: pipe.x,
              top: pipe.gapY + GAP,
              width: PIPE_WIDTH,
              height: HEIGHT - (pipe.gapY + GAP),
            }}
          />
        </div>
      ))}

      {/* start overlay */}
      {!started && !gameOver && (
        <div
          className="
            absolute inset-0 z-40
            flex items-center justify-center
            text-black dark:text-white
            text-sm font-medium
            backdrop-blur-[2px] transition-colors duration-700 ease-in-out
          "
        >
          Click to start
        </div>
      )}

      {/* game over */}
      {gameOver && (
        <div
          className="
            absolute inset-0 z-50
            flex flex-col items-center justify-center
            gap-3
            bg-white/70 dark:bg-black/70
            backdrop-blur-md transition-colors duration-700 ease-in-out
          "
        >
          <div className="text-center">
            <p className="text-lg font-bold text-black dark:text-white transition-colors duration-700 ease-in-out">
              Game Over
            </p>

            <p className="text-sm text-black/70 dark:text-white/70 transition-colors duration-700 ease-in-out">
              Score: {score}
            </p>

            <p className="text-sm text-black/70 dark:text-white/70 transition-colors duration-700 ease-in-out">
              Best: {best}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              reset()
            }}
            className="
              px-4 py-2 rounded-md text-sm
              bg-black text-white
              dark:bg-white dark:text-black
              transition-colors duration-700 ease-in-out
            "
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}