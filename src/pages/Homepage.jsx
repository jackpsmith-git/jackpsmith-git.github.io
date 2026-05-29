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
import { BentoGrid, BentoTile, BentoRoute } from '../components/Bento.jsx'

export const Homepage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-5, -95]);
  
  return (
    <>
      <div id="home" className="relative z-10 min-h-screen dark:bg-black bg-white transition-colors duration-700 ease-in-out">
        <div ref={container} className="relative">

          <Navbar />
          <Hero />

          <div className='bg-linear-to-b from-white dark:from-black to-purple-950/80 dark:to-purple-950/60 bg-contain bg-center transition-colors duration-700 ease-in-out'>
            <Projects />
            <About />
            <Skills />
            <Widgets />

            <div className="max-w-500 mx-auto pb-20 text-white transition-colors duration-700 ease-in-out">
              <BentoGrid className='mx-[8vw]'>

                <BentoRoute size='lg' to="/terminal">
                  {`Enter Terminal Mode`}
                </BentoRoute>

              </BentoGrid>
            </div>


          </div>

          <Footer/>
          
        </div>
      </div>
      <ThemeToggle />
    </>
  )
}