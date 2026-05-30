import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { Navbar } from '../components/Navbar.jsx'
import { Hero } from '../sections/Hero.jsx'
import { Projects } from '../sections/Projects.jsx'
import { About } from '../sections/About.jsx'
import { Skills } from '../sections/Skills.jsx'
import { Widgets } from '../sections/Widgets.jsx'
import { Footer } from '../components/Footer.jsx'
import { ThemeToggle } from '../components/ThemeToggle.jsx'

export const Home = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-5, -95]);
  
  return (
    <>
      <div id="home" className="relative z-10 min-h-screen dark:bg-black bg-white transition-col">
        <div ref={container} className="relative">

          <Navbar />

          <Hero />
          <Projects />
          <About />
          <Skills />
          <Widgets />

          <Footer/>
          
        </div>
      </div>
      <ThemeToggle />
    </>
  )
}