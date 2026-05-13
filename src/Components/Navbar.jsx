import "./Navbar.css"

export const Navbar = () => { return (
  <header className="header">
    <div className="navbar">
        <nav className="navbar-flex">
          <div className="logo-grid">
            <div className="flex-col">
                <div className="h-nav-links">
                  <a href="#home">
                    <h2 className="title">Jack P Smith</h2>
                  </a>
                </div>
                <h3 className="title">Software Developer</h3>
            </div>
          </div>
          <div className="h-nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
    </div>
  </header>
);}