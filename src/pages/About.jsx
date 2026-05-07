import "./About.css"

import { useGitHubUser } from '../hooks/useGitHubUser.js'
import { Shake } from '../components/Shake.jsx'
import CountUp from 'react-countup';

import headshot from "../assets/images/headshot.jpeg"
import github from "../assets/images/github.png"

export const About = () => {
  const user = useGitHubUser();

  return (
  <section id="about" className="about">
    <div className="page">
      <h2>About Me</h2>
      <div className="headshot"><img src={headshot} alt="Headshot" width={200} /></div>
      {user && (<div><p className="bio">{user.bio}</p></div>)}
      <p className="projects">Click on the 'Projects' tab in the upper right to browse my current and past projects, or navigate to the 'Skills' section to learn more about me.</p>

      <div className="card">
        <h3 className="education-heading">Education</h3>
        <p className="school"><strong>Pace University, Seidenberg School of Computer Science and Information Systems</strong> | Pleasantville, NY</p>
        <div className="thin-paragraph">Bachelor of Science (BS) in Computer Science</div>
        <div className="thin-paragraph"><strong>GPA</strong>: 3.89 | <strong>Honors:</strong> Dean's List (First Honors) x2, Outstanding Academic Achievement Award, Tau Sigma National Honor Society</div>
        <p className="school"><strong>SUNY Westchester Community College, School of Business and Professional Careers</strong> | Valhalla, NY</p>
        <div className="thin-paragraph">Associate of Applied Science (AAS) in Interactive Technologies, Concentration in Computer Animation and Game Design</div>
        <div className="thin-paragraph"><strong>GPA</strong>: 3.44</div>
      </div>

      {user && (
        <div className="inset-card">
          <a href="https://www.github.com/jackpsmith-git" target="_blank"><img src={github} className="github-icon"></img></a>
          <p className="github-info" style={{fontSize: '15pt', marginTop: 5, marginBottom: 5}}>{user.username}</p>
          <p className="github-info" style={{fontSize: '30pt', marginTop: 0}}>
              <CountUp 
              start={0} 
              end={user.followersCount} 
              duration={2.75} 
              enableScrollSpy={true}
            /> followers 
            | <CountUp 
              start={0} 
              end={user.starredReposCount} 
              duration={2.75} 
              enableScrollSpy={true}
            /> starred repos
          </p>
        </div>
      )}
    </div>
  </section>
  );
};