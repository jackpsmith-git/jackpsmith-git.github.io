// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Projects } from './pages/Projects.jsx'
import { Contact } from "./pages/Contact.jsx";
import { Skills } from "./pages/Skills.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
      // <Router>
      <div>

        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <body>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Routes> */}
        </body>
        <Footer />
      </div>
      // </Router>
    );
}