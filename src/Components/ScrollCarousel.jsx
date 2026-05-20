import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLatestRepos } from "../hooks/useLatestRepos.js"
import { FlipCard } from "./FlipCard.jsx"

gsap.registerPlugin(ScrollTrigger)

export const ScrollCarousel = () => {
  const repos = useLatestRepos()
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  const cardWidth = 320
  const gap = 16

  useLayoutEffect(() => {
    const track = trackRef.current

    const totalX = (repos.length + 2) * (cardWidth + gap)

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
  }, [repos])

  return (
    <section ref={sectionRef}>
      <div className="flex items-center h-screen overflow-hidden">

        <div ref={trackRef} className="flex gap-4 pl-[50vw] pr-[50vw]">

          {repos.map((repo) => (
            <div key={repo.name} className="p-[10px]">
              <FlipCard
                repo={repo}
                width={cardWidth}
                height={cardWidth}
              />
            </div>
          ))}

          <div className="p-[10px]">
            <a href="https://github.com/jackpsmith-git" target="_blank">
              <div
                style={{ width: cardWidth, height: cardWidth }}
                className=" bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] dark:bg-black text-white font-semibold rounded-[20px] flex items-center justify-center transition-colors duration-700 ease-in-out"
              >
                SEE ALL →
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}