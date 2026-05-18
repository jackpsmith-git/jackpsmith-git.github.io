import { Navbar } from './components/Navbar.jsx';
import { Hero } from './pages/Hero.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Skills } from "./pages/Skills.jsx";
import { Projects } from './pages/Projects.jsx'
import { Footer } from "./components/Footer.jsx";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-5, -95]);
    return (
      <div className="scroll-area">
        <div ref={container} className="relative">
          <Navbar />
          <Hero />
          <Home />
          <About />
          <Skills />
          <Projects />
        </div>
        <Footer yval={y}/>
      </div>
    );
}