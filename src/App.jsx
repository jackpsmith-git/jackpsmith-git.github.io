import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { Navbar } from './components/Navbar.jsx'
import { Hero } from './sections/Hero.jsx'
import { Home } from './sections/Home.jsx'
import { Projects } from './sections/Projects.jsx'
import { Footer } from './components/Footer.jsx'
import { ThemeToggle } from './components/ThemeToggle.jsx'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react'

export default function App() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-5, -95]);
    return (
      <div className="relative z-10 min-h-screen dark:bg-black bg-white transition-colors duration-700 ease-in-out">
        <div ref={container} className="relative">
          <Analytics />
          <SpeedInsights />
          <Navbar />
          <Hero />
          <div className='bg-linear-to-b from-white dark:from-black to-purple-950/80 dark:to-purple-950/60 bg-contain bg-center transition-colors duration-700 ease-in-out'>
            <Projects />
            <Home />
          </div>
          <Footer/>
          <ThemeToggle />
        </div>
      </div>
    );
}