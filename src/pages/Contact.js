import "./Contact.css"

import { Shake } from '../components/Shake.js';

import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin.png"
import nuget from "../assets/images/nuget.png"
import headshot from "../assets/images/headshot.jpeg"

export const Contact = () => (
<div className="contact">
  <div className="page">
    <h2>Contact</h2>
    <div className="floatingtile">
      <img className="round-headshot" src={headshot}></img>
      <h3 className="contact-name">Jack P Smith</h3>
      <p className="contact-link"><a href="mailto:jackpsmith@jackpsmith.com" target="_blank">jackpsmith@jackpsmith.com</a></p>
      <p className="contact-link"><a href="mailto:js99564p@pace.edu" target="_blank">js99564p@pace.edu</a></p>
      <p className="contact-link"><a href="mailto:jpsmith8603@gmail.com" target="_blank">jpsmith8603@gmail.com</a></p>

      <div className="centered-row">
        <Shake><a className="right-gap" href="https://github.com/jackpsmith-git" target="_blank"><img src={github} height={40} /></a></Shake>
        <Shake><a className="right-gap" href="https://www.linkedin.com/in/jackpetersmith" target="_blank"><img src={linkedin} height={40} /></a></Shake>
        <Shake><a href="https://www.nuget.org/profiles/jackpsmith" target="_blank"><img src={nuget} height={40} /></a></Shake>
      </div>
    </div>
  </div>
</div>
);