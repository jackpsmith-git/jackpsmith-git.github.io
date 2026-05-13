import "./Contact.css"
import { Shake } from '../components/Shake.jsx';
import { IconButton } from '../components/IconButton.jsx';

export const Contact = () => (
<div id="contact" className="contact">
  <div className="page">
    <div className="contact-info">
      <img className="round-headshot" src="assets/images/headshot.jpeg"></img>
      <h3 className="contact-name">Jack P Smith</h3>
      <p className="contact-link"><a href="mailto:jackpsmith@jackpsmith.com" target="_blank">jackpsmith@jackpsmith.com</a></p>
      <p className="contact-link"><a href="mailto:js99564p@pace.edu" target="_blank">js99564p@pace.edu</a></p>
      <p className="contact-link"><a href="mailto:jpsmith8603@gmail.com" target="_blank">jpsmith8603@gmail.com</a></p>

      <div className="centered-row">
        <IconButton link="https://github.com/jackpsmith-git" image="assets/images/github.png" alt="GitHub logo" />
        <IconButton link="https://www.linkedin.com/in/jackpetersmith" image="assets/images/linkedin.png" alt="LinkedIn logo" />
        <IconButton link="https://www.nuget.org/profiles/jackpsmith" image="assets/images/nuget.png" alt="NuGet logo" />
        {/* <Shake><a className="right-gap" href="https://github.com/jackpsmith-git" target="_blank"><img src="assets/images/github.png" height={40} style={{backgroundColor: 'white', maskImage: `url(${"assets/images/github.png"}`, maskSize: 'contain', filter: 'brightness(0) invert(1)'}} /></a></Shake> */}
        {/* <Shake><a className="right-gap" href="https://www.linkedin.com/in/jackpetersmith" target="_blank"><img src="assets/images/linkedin.png" height={40} /></a></Shake>
        <Shake><a href="https://www.nuget.org/profiles/jackpsmith" target="_blank"><img src="assets/images/nuget.png" height={40} style={{backgroundColor: 'white', maskImage: `url(${"assets/images/nuget.png"}`, maskSize: 'contain', filter: 'brightness(0) invert(1)'}} /></a></Shake> */}
      </div>
    </div>
  </div>
</div>
);