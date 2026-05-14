// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar.jsx';
import { Home } from './pages/Home.jsx';
import { Hero } from './pages/Hero.jsx';
import { About } from './pages/About.jsx';
import { Projects } from './pages/Projects.jsx'
import { Contact } from "./pages/Contact.jsx";
import { Skills } from "./pages/Skills.jsx";
import { Footer } from "./components/Footer.jsx";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-5, -95]);
  return (
      <div>
          <div className="scroll-area">
          <div ref={container} className="relative">
            <Navbar />
            <Hero />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
          {/* <Footer yval={y}/> */}
        </div>
      </div>
    );
}