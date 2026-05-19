import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-[20px] w-full flex justify-center z-[1000]">
      <div
        className={`
          flex gap-[28px] px-6 py-3 rounded-full

          bg-[rgba(20,20,20,0.55)]
          backdrop-blur-[14px]
          border border-white/10

          transition-all duration-300 ease-in-out

          ${isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-[10px] pointer-events-none"
          }
        `}
      >
        <nav className="flex gap-6 text-white">
          <a className="hover:bg-white/10 px-3 py-1 rounded-full transition" href="#">Home</a>
          <a className="hover:bg-white/10 px-3 py-1 rounded-full transition" href="#about">About</a>
          <a className="hover:bg-white/10 px-3 py-1 rounded-full transition" href="#skills">Skills</a>
          <a className="hover:bg-white/10 px-3 py-1 rounded-full transition" href="#projects">Projects</a>
          <a className="hover:bg-white/10 px-3 py-1 rounded-full transition" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};