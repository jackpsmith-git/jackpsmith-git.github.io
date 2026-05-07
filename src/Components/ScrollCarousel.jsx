import "./ScrollCarousel.css"
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

import { useLatestRepos } from '../hooks/useLatestRepos.js'

import github from "../assets/images/github.png"
import react from "../assets/images/react.png"
import uno from "../assets/images/TermProject.png"

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
  "Java" : '#007396'
};

export const ScrollCarousel = () => {
  const repos = useLatestRepos();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);
  const seemore = {
    name: "See All",
    url: "https://github.com/jackpsmith-git?tab=repositories",
    languages: [],
    image: github
  }

  return (
    <div>
        <section ref={targetRef} className="scrollSection">
            <div className="stickyContainer">
                <motion.div style={{ x }} className="carousel">
                    {repos.map((repo) => (
                        <a href={repo.url} target="_blank"><Card repo={repo} key={repo.name} /></a>
                    ))}

                    <div className="carousel-card">
                        <div
                            className="cardImage"
                            style={{backgroundImage: `
                                linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,0,0.9)),
                                url(${seemore.image})`
                            }}
                        />

                        <div className="cardOverlay">
                            <a href={seemore.url} target="_blank">
                                <p className="cardTitle">{seemore.name}</p>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
  );
};

const Card = ({ repo }) => {
  return (
    <div className="carousel-card">
      <div
        className="cardImage"
        style={{backgroundImage: `
            linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,0,0.9)),
            url(${repo.image})`
        }}
      />

        <div className="cardOverlay">
            <a href={repo.url}>
                <p className="cardTitle">{repo.name}</p>
                <span className="languages-span">
                    {repo.languages.slice(0, 12).map((lang) => (
                    <span
                        key={lang}
                        className="language"
                        style={{backgroundColor: LANG_COLS[lang] || "#000000"}}>
                        {lang}
                    </span>
                    ))}
                </span>
                
                <span>
                    <div className="github-info">
                        <span className="stars-span"><strong className="github-info-icon">★</strong> {repo.stars}</span>
                        <span className="watchers-span"><strong className="github-info-icon">👁</strong> {repo.watchers}</span>
                        <span className="issues-span"><strong className="github-info-icon">⚠</strong> {repo.issues}</span>
                    </div>
                </span>

                <p className="project-description">{repo.description}</p>
            </a>
        </div>
    </div>
  );
};