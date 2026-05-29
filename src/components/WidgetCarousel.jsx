import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

export const WidgetCarousel = ({
  items = [],
  className = "",
}) => {
  const [[index, direction], setSlide] = useState([0, 1])
  const nextSlide = (e) => {
    e.stopPropagation()

    setSlide(([prev]) => [
      (prev + 1) % items.length,
      1,
    ])
  }

  const prevSlide = (e) => {
    e.stopPropagation()

    setSlide(([prev]) => [
      prev === 0 ? items.length - 1 : prev - 1,
      -1,
    ])
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
      width: "100%",
    }),

    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      width: "100%",
    },

    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
      width: "100%",
    }),
  }

  return (
    <div className="mx-[8vw] my-5 h-[50vh]">
      <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white bg-zinc-900">

        <button
          type="button"
          onClick={prevSlide}
          className="
            absolute
            left-4
            top-1/2
            z-20
            -translate-y-1/2
            rounded-full
            bg-black/50
            p-2
            text-white
            backdrop-blur
            transition hover:scale-110
          "
        >
          <ChevronLeftIcon fontSize="medium" />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          className="
            absolute
            right-4
            top-1/2
            z-20
            -translate-y-1/2
            rounded-full
            bg-black/50
            p-2
            text-white
            backdrop-blur
            transition hover:scale-110
          "
        >
          <ChevronRightIcon fontSize="medium" />
        </button>

        <div className="relative w-full h-full">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="w-full h-full">
                {items[index]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}