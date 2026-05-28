import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FEATURED_PROJECTS, LANG_COLS } from "../Constants.jsx"
import { BentoProject, BentoButton } from "./Bento.jsx"

gsap.registerPlugin(ScrollTrigger)

export const ScrollCarousel = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  const cardWidth = 180
  const gap = 16

  useLayoutEffect(() => {
    const track = trackRef.current

    const totalX = (FEATURED_PROJECTS.length + 2) * (cardWidth + gap)

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalX,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalX}`,
          scrub: 1,
          pin: true
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [FEATURED_PROJECTS])

  return (
    <>
    <section ref={sectionRef}>
      <div className="flex items-center h-screen overflow-hidden">

        <div ref={trackRef} className="flex gap-4 pl-[50vw] pr-[50vw]">

          {FEATURED_PROJECTS.map((project) => (
            <BentoProject
            key={project.name}
            {...project}
            langColors={LANG_COLS}
            className='w-60 text-white'
            />
          ))}

          <BentoButton link="https://github.com/jackpsmith-git" target="_blank">
            <div
              style={{ width: 220, height: 280 }}
              className=" text-white font-semibold rounded-[20px] flex items-center justify-center transition-colors duration-700 ease-in-out"
            >
              SEE ALL →
            </div>
          </BentoButton>

        </div>

      </div>
    </section>
    </>
  )
}