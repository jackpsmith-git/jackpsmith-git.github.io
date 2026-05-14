import { useEffect, useRef } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    const nav = navRef.current;

    if (!hero || !nav) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nav.classList.remove("nav-visible");
        } else {
          nav.classList.add("nav-visible");
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <nav ref={navRef} className="h-nav-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};