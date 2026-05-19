import "./ScrollCarousel.css"
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion"
import { useRef, useState } from "react"
import { useLatestRepos } from '../hooks/useLatestRepos.js'
import { FlipCard } from './FlipCard.jsx'
import { LANG_COLS } from '../Constants.js'

export const ScrollCarousel = () => {
  const repos = useLatestRepos();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center center", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const cardWidth = 320;

  return (
    <div>
      <section ref={targetRef} className="relative h-[300vh] w-auto">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4 pl-[50vw] pr-[50vw]">
              { repos.map((repo) => (
                <div
                  key={repo.name} 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    padding: 10,
                    flex: "0 0 auto"
                  }}
                >
                  <motion.div
                    className="origin-center will-change-transform"
                    initial={{ scale: 0.85, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ amount: 0.8, once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <FlipCard repo={repo} width={cardWidth} height={cardWidth}/>
                  </motion.div>
                </div>
              ))}

              <motion.div
                className="origin-center will-change-transform"
                initial={{ scale: 0.85, opacity: 0.6 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.8, once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div 
                  style={{ width: cardWidth, height: cardWidth }}
                  className="text-black rounded-[20px] m-[15px] relative overflow-visible flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <a href="https://github.com/jackpsmith-git" target="_blank">
                      <span className="see-all-span" style={{gap: 15}}>
                        <span>
                          <h2 className="m-0">SEE ALL</h2>
                        </span>
                        <span><img src="assets/icons/external.svg" style={{filter: "brightness(0) invert(1)" }}/></span>
                      </span>
                    </a>
                  </div>
                </div>
                </motion.div>
            </motion.div>
        </div>
      </section>
      <div id="contact" />
    </div>
  );
};