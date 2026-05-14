import { useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {

  useEffect(() => {
    const nav = document.querySelector(".h-nav-links");

    const handleScroll = () => {
      if (!nav) return;

      if (window.scrollY > 20) {
        nav.style.transform = "scale(0.96)";
        nav.style.transition = "transform 0.2s ease";
      } else {
        nav.style.transform = "scale(1)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="h-nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};