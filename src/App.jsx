import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { Navbar } from './components/Navbar.jsx'
import { Hero } from './sections/Hero.jsx'
import { Home } from './sections/Home.jsx'
import { Projects } from './sections/Projects.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-5, -95]);
    return (
      <div className="relative z-10">
        <div ref={container} className="relative">
          <Navbar />
          <Hero />
          <Home />
          <Projects />
        </div>
        <Footer yval={y}/>
      </div>
    );
}