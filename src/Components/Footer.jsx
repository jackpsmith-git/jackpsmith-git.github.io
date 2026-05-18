import "./Footer.css"
import { motion, useScroll, useTransform } from "framer-motion";
import { IconButton } from "./IconButton.jsx";

export const Footer = ({yval}) => { 
  return (
<footer>
  <motion.div style={{yval}}>
    <div className="contact">
      <div className="page">
        <div className="contact-info">
          <img className="round-headshot" src="./assets/images/headshot.jpeg"></img>
          <h3 className="contact-name">Jack P Smith</h3>
          <p className="contact-city">White Plains, NY</p>
          <p className="contact-link"><a href="mailto:jackpsmith@jackpsmith.com" target="_blank">jackpsmith@jackpsmith.com</a></p>
          <p className="contact-link"><a href="mailto:jack.p.smith@pace.edu" target="_blank">jack.p.smith@pace.edu</a></p>
          <p className="contact-link"><a href="mailto:jpsmith8603@gmail.com" target="_blank">jpsmith8603@gmail.com</a></p>
    
          <div className="centered-row">
            <IconButton link="https://github.com/jackpsmith-git" image="./assets/images/github.png" alt="GitHub logo" />
            <IconButton link="https://www.linkedin.com/in/jackpetersmith" image="./assets/images/linkedin.png" alt="LinkedIn logo" />
            <IconButton link="https://www.nuget.org/profiles/jackpsmith" image="./assets/images/nuget.png" alt="NuGet logo" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</footer>
);}