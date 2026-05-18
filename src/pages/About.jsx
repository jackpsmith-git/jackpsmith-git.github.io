import "./About.css"
import { useGitHubUser } from '../hooks/useGitHubUser.js'
import { Shake } from '../components/Shake.jsx'
import CountUp from 'react-countup';
import { motion } from "framer-motion"

export const About = () => {
  const user = useGitHubUser();

  return (
  <section id="about" className="about">
    <div className="page">
      <motion.div
        initial={{y: 25, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{ amount: .2 }}
        transition={{duration: 1, ease: "easeInOut"}}
      ><div className="headshot"><img src="assets/images/headshot.jpeg" alt="Headshot" width={200} /></div></motion.div>
      <motion.div
        initial={{y: 25, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{ amount: .2 }}
        transition={{duration: 1, ease: "easeInOut"}}
      ><div className="plain-card">
        {user && (<div><p className="bio">{user.bio} Click on the 'Projects' tab in the upper right to browse my current and past projects, or navigate to the 'Skills' section to learn more about me.</p></div>)}
      </div></motion.div>

      <motion.div
        initial={{y: 25, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{ amount: .2 }}
        transition={{duration: 1, ease: "easeInOut"}}
      ><div className="plain-card">
        <h3 className="education-heading">Education</h3>
        <p className="school"><strong>Pace University, Seidenberg School of Computer Science and Information Systems</strong> | Pleasantville, NY</p>
        <div className="thin-paragraph">Bachelor of Science (BS) in Computer Science</div>
        <div className="thin-paragraph"><strong>GPA</strong>: 3.91 | <strong>Honors:</strong> Dean's List (First Honors) x2, Outstanding Academic Achievement Award, Tau Sigma National Honor Society</div>
        <p className="school"><strong>SUNY Westchester Community College, School of Business and Professional Careers</strong> | Valhalla, NY</p>
        <div className="thin-paragraph">Associate of Applied Science (AAS) in Interactive Technologies, Concentration in Computer Animation and Game Design</div>
        <div className="thin-paragraph"><strong>GPA</strong>: 3.44</div>
      </div></motion.div>

      {user && (
        <motion.div
        initial={{y: 25, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{ amount: .2 }}
        transition={{duration: 1, ease: "easeInOut"}}
      ><div className="card">
          <div style={{display: 'flex', alignItems: "center", gap: "16px"}}>
            <div>
              <a style={{display: "block"}} href="https://www.github.com/jackpsmith-git" target="_blank"><img style={{backgroundColor: "#34445a", border: "2px solid #34445a"}} src={user.avatar} className="github-icon"></img></a>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <div>
                <p className="github-info" style={{fontSize: '12pt', fontWeight: "semibold", margin: 0, justifyContent: "left"}}>{user.username}</p>
                <p className="github-info" style={{fontSize: '15pt', fontWeight: "bold", margin: 0, justifyContent: "left"}}>
                  <CountUp 
                    start={0}
                    end={user.followingCount ?? 0}
                    duration={2.75}
                    enableScrollSpy={true}
                  />following | <CountUp 
                    start={0} 
                    end={user?.followersCount ?? 0} 
                    duration={2.75} 
                    enableScrollSpy={true}
                  />followers | <CountUp 
                    start={0} 
                    end={user?.starredReposCount ?? 0} 
                    duration={2.75} 
                    enableScrollSpy={true}
                  />starred repos
                </p>
              </div>
            </div>
          </div>
        </div></motion.div>
      )}
    </div>
  </section>
  );
};