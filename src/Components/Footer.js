import "./Footer.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import github from "../assets/images/github.png"
import nuget from "../assets/images/nuget.png"
import linkedin from "../assets/images/linkedin.png"

export const Footer = () => { return (
<footer>
  <nav className="footer-flex">
    <div className="info-grid">
      <div className="flex-col">

        <div className="title-link">
          <Link to="/"><h2 className="title">Jack P Smith</h2></Link>
        </div>

        <h3 className="subtitle">Software Developer</h3>
        <p className="f-nav-links no-bottom-margin"><Link to="mailto:jackpsmith@jackpsmith.com">jackpsmith@jackpsmith.com</Link></p>
        <p className="f-nav-links no-bottom-margin no-top-margin"><Link to="mailto:js99564p@pace.edu">js99564p@pace.edu</Link></p>
        <p className="f-nav-links" style={{marginTop: 0}}><Link to="mailto:jpsmith8603@gmail.com">jpsmith8603@gmail.com</Link></p>
        
        <div className="emails">
            <div className="shake"><a className="right-gap" href="https://github.com/jackpsmith-git" target="_blank"><img src={github} height={40} style={{backgroundColor: 'white', maskImage: `url(${github})`, maskSize: 'contain', filter: 'brightness(0) invert(1)'}} /></a></div>
            <div className="shake"><a className="right-gap" href="https://www.linkedin.com/in/jackpetersmith" target="_blank"><img src={linkedin} height={40} /></a></div>
            <div className="shake"><a href="https://www.nuget.org/profiles/jackpsmith" target="_blank"><img src={nuget} height={40} style={{backgroundColor: 'white', maskImage: `url(${nuget})`, maskSize: 'contain', filter: 'brightness(0) invert(1)'}} /></a></div>
        </div>

      </div>
    </div>

    <div className="nav-links-grid">
        <div className="f-nav-links"><Link to="/">Home</Link></div>
        <div className="f-nav-links"><Link to="/about">About</Link></div>
        <div className="f-nav-links"><Link to="/skills">Skills</Link></div>
        <div className="f-nav-links"><Link to="/projects">Projects</Link></div>
        <div className="f-nav-links"><Link to="/contact">Contact</Link></div>
    </div>
  </nav>
</footer>
);}