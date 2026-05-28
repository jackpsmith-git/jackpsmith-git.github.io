import { useEffect, useRef, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const links = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Widgets", href: "#widgets" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div
        className={`
          fixed inset-0 z-900
          bg-black/20
          backdrop-blur-sm
          transition-all duration-700

          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      <header className="fixed top-5 w-full flex justify-center z-1000 px-4">
        <div
          ref={menuRef}
          className={`
            transition-all duration-700 ease-in-out
            bg-[rgba(20,20,20,0.55)]
            backdrop-blur-[14px]
            border border-white/10
            rounded-full
            
            ${
              isVisible
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2.5 pointer-events-none"
            }
          `}
        >
          <div className="hidden md:flex gap-7 px-6 py-3">
            <nav className="flex gap-6 text-white">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    hover:bg-white/10
                    px-3 py-1 rounded-full
                    transition-all duration-700 ease-in-out
                  "
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                p-3 text-white
                flex items-center justify-center
                transition-all duration-700 ease-in-out
              "
            >
              {isOpen ? (
                <CloseIcon fontSize="medium" />
              ) : (
                <MenuIcon fontSize="medium" />
              )}
            </button>

            {/* Dropdown */}
            <div
              className={`
                absolute top-[120%] left-1/2 -translate-x-1/2
                w-55
                rounded-2xl
                bg-[rgba(20,20,20,0.75)]
                backdrop-blur-[18px]
                border border-white/10
                overflow-hidden

                shadow-[0_8px_32px_rgba(0,0,0,0.35)]

                transition-all duration-700 ease-in-out origin-top

                ${
                  isOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }
              `}
            >
              <nav className="flex flex-col p-2 text-white text-center">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      px-4 py-3 rounded-xl
                      hover:bg-white/10
                      transition-all duration-700
                    "
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};