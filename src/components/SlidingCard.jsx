import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const SlidingCard = ({
  fromLeft = true,
  children,
  className = "",
  style = {},
  link="",
}) => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    amount: 0.4,
  })

  const controls = useAnimation()

  const restingX = fromLeft ? "-5vw" : "5vw"
  const hiddenX = fromLeft ? "-100vw" : "100vw"

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: restingX,
        opacity: 1,
      })
    } else {
      controls.start({
        x: hiddenX,
        opacity: 0,
      })
    }
  }, [isInView, controls, restingX, hiddenX])

  return (
    <div className="hover:scale-105 transition-transform duration-100 w-full">
      <section
        ref={ref}
        className={`overflow-hidden ${className}`}
      >
          <motion.div
            initial={{
              x: hiddenX,
              opacity: 0,
            }}
            animate={controls}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            style={style}
            className={`
              w-screen
              shadow-2xl
              border border-black dark:border-[#faeab4] transition-colors duration-700 ease-in-out
              bg-zinc-400 dark:bg-zinc-900
              text-white
              p-8
              overflow-hidden
              ${fromLeft ? "rounded-r-2xl" : "rounded-l-2xl"}
            `}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full px-[15vw]"
            >
              <div
                className={`
                  absolute inset-0 z-0
                  ${
                    fromLeft
                      ? "bg-linear-to-r from-gray-800 dark:from-black via-gray-800 dark:via-black to-gray-800/70 dark:to-black/70 transition-colors duration-700 ease-in-out"
                      : "bg-linear-to-l from-gray-800 dark:from-black via-gray-800 dark:via-black to-gray-800/70 dark:to-black/70 transition-colors duration-700 ease-in-out"
                  }
                `}
              />

              <div
                className={`
                  relative z-10 h-full flex flex-col justify-center 
                  ${fromLeft
                    ? "items-start text-left"
                    : "items-end text-right"
                  }
                `}
              >
                {children}
              </div>
            </a>
          </motion.div>
      </section>
    </div>
  )
}