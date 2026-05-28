import { useEffect, useRef } from "react"

export const BouncyOrb = () => {
  const active = useRef(false)
  const boxRef = useRef(null)
  const ballRef = useRef(null)
  const colorIndex = useRef(0)

  const colors = [
    "#7a7a7a",
    "#ff4d4d",
    "#4dff88",
    "#4da6ff",
    "#ffd24d",
    "#c44dff",
  ]

  const onEnter = () => {
    active.current = true
    vel.current.x *= 1.5
    vel.current.y *= 1.5
  }

  const onClick = () => {
    if (!active.current) return
    if (!ballRef.current) return

    colorIndex.current =
      (colorIndex.current + 1) % colors.length

    ballRef.current.style.backgroundColor =
      colors[colorIndex.current]
  }

  const onLeave = () => {
    active.current = false
  }

  const pos = useRef({ x: 0, y: 0 })
  const vel = useRef({ x: 1.5, y: 2 })
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const box = boxRef.current
    const ball = ballRef.current
    if (!box || !ball) return
    ball.style.backgroundColor = colors[0]

    const radius = 6
    let r = box.getBoundingClientRect()

    pos.current.x = r.width / 2
    pos.current.y = r.height / 2

    const onMouseMove = (e) => {
      r = box.getBoundingClientRect()

      mouse.current.x = e.clientX - r.left
      mouse.current.y = e.clientY - r.top
    }

    box.addEventListener("mousemove", onMouseMove)

    let frame

    const loop = () => {
      r = box.getBoundingClientRect()

      let dx = 0
      let dy = 0

      if (active.current) {
        dx = mouse.current.x - pos.current.x
        dy = mouse.current.y - pos.current.y
      }

      vel.current.x += dx * 0.02
      vel.current.y += dy * 0.02

      vel.current.x *= 0.95
      vel.current.y *= 0.95

      pos.current.x += vel.current.x
      pos.current.y += vel.current.y

      if (pos.current.x < radius) {
        pos.current.x = radius
        vel.current.x *= -1
      }
      if (pos.current.x > r.width - radius) {
        pos.current.x = r.width - radius
        vel.current.x *= -1
      }

      if (pos.current.y < radius) {
        pos.current.y = radius
        vel.current.y *= -1
      }
      if (pos.current.y > r.height - radius) {
        pos.current.y = r.height - radius
        vel.current.y *= -1
      }

      ball.style.left = `${pos.current.x}px`
      ball.style.top = `${pos.current.y}px`

      frame = requestAnimationFrame(loop)
    }

    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      box.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div
      ref={boxRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="relative w-full h-full overflow-hidden rounded-lg bg-white dark:bg-transparent transition-colors duration-700 ease-in-out"
    >
      <div
        ref={ballRef}
        className="absolute w-3 h-3 rounded-full bg-gray dark:bg-zinc-300 shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-colors duration-700 ease-in-out"
        style={{
          left: 0,
          top: 0,
        }}
      />
    </div>
  )
}