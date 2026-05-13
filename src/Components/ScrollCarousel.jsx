import "./ScrollCarousel.css"
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { useLatestRepos } from '../hooks/useLatestRepos.js'
import { FlipCard } from './FlipCard.jsx';
import { ExternalButton } from './ExternalButton.jsx';

const LANG_COLS = {
  "C": '#064090',
  "Objective-C" : '#064090',
  "C++" : '#041e42',
  "Objective-C++" : '#041e42',
  "C#": '#68217A',
  "JavaScript": 'darkorange',
  "Python": '#0B6623',
  "Lua": '#6e6a39',
  "Batchfile" : "#000000",
  "CMake" : 'green',
  "HTML" : '#E34C26',
  "CSS" : '#663399',
  "Java" : '#007396',
};

export const ScrollCarousel = () => {
  const repos = useLatestRepos();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const cardWidth = 320;

  return (
    <div>
      <section ref={targetRef} className="scrollSection">
        <div className="stickyContainer">
          
            <motion.div style={{ x }} className="carousel">
              { repos.map((repo) => (
                <div
                  style={{
                    // minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "white",
                    padding: 10,
                    flex: "0 0 auto"
                  }}
                >
                  <motion.div
                    className="carouselWrapper"
                    initial={{ scale: 0.85, opacity: 0.6 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ amount: 0.8, once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <FlipCard 
                      width={cardWidth}
                      height={cardWidth}
                      frontContent={
                        <div
                          style={{
                            padding: 40,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            backgroundImage: `
                              linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0,0.8)),
                              url(${repo.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            position: "relative",
                          }}
                        >
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                              zIndex: 5,
                            }}
                          >
                            <ExternalButton size={30}/>
                          </a>

                          <div>
                            <h2
                              style={{
                                margin: 0,
                                marginBottom: 15,
                                fontSize: 24,
                                fontWeight: 700,
                                color: "white",
                              }}
                            >
                              {repo.name}
                            </h2>

                            <span className="languages-span">
                              {repo.languages.slice(0, 12).map((lang) => (
                                <span
                                  key={lang}
                                  className="language"
                                  style={{
                                    backgroundColor: LANG_COLS[lang] || "#000000",
                                  }}
                                >
                                  {lang}
                                </span>
                              ))}
                            </span>
                          </div>
                        </div>
                      }

                      backContent={
                        <div
                          style={{
                            padding: 40,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              flex: 1,
                            }}
                          >
                            <div>
                              <h2
                                style={{
                                  margin: 0,
                                  fontSize: 24,
                                  fontWeight: 700,
                                }}
                              >
                                {repo.name}
                              </h2>
                            </div>

                            <div
                              style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <p
                                style={{
                                  lineHeight: 1.6,
                                  color: "white",
                                  margin: 0,
                                }}
                              >
                                {repo.description}
                              </p>
                            </div>

                            <div style={{ color: "white" }}>
                              <div className="github-info">
                                <span className="stars-span">
                                  <strong className="github-info-icon">★</strong> {repo.stars}
                                </span>

                                <span className="watchers-span">
                                  <strong className="github-info-icon">👁</strong> {repo.watchers}
                                </span>

                                <span className="issues-span">
                                  <strong className="github-info-icon">⚠</strong> {repo.issues}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </motion.div>
                </div>
              ))}

              <motion.div
                className="carouselWrapper"
                initial={{ scale: 0.85, opacity: 0.6 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.8, once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <a 
                  href="https://github.com/jackpsmith-git"
                  target="_blank"
                  style={{
                  color: "black",
                  width: cardWidth,
                  height: cardWidth,
                  borderRadius: 20,
                  margin: 15,
                  position: "relative",
                  overflow: "visible",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "black",
                }}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h2
                      style={{
                        color: "white",
                        margin: 0,
                      }}
                    >
                      SEE ALL
                    </h2>
                  </div>
                </a>
                </motion.div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};