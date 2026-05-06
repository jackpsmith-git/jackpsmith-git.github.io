import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar.js';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Projects } from './pages/Projects.js'
import { Contact } from "./pages/Contact.js";
import { Skills } from "./pages/Skills.js";
import { Footer } from "./components/Footer.js";

export default function App() {
  return (
      <Router>
        <Navbar />
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </body>
        <Footer />
      </Router>
    );
}