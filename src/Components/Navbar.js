import "./Navbar.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Navbar = () => { return (
  <header className="header">
    <div className="navbar">
        <nav className="navbar-flex">
          <div className="logo-grid">
            <div className="flex-col">
                <div className="h-nav-links">
                  <Link to="/">
                    <h2 className="title">Jack P Smith</h2>
                  </Link>
                </div>
                <h3 className="title">Software Developer</h3>
            </div>
          </div>
          <div className="h-nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
    </div>
  </header>
);}