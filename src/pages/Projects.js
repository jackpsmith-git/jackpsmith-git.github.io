import "./Projects.css"

import { Button } from '../components/Button.js';
import { useLatestRepos } from '../hooks/useLatestRepos.js'

import GitHubButton from 'react-github-btn';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import github from "../assets/images/github.png"
import react from "../assets/images/react.png"
import uno from "../assets/images/TermProject.png"

const LANG_COLS = {
  "C": '#064090',
  "Objective-C" : '#064090',
  "C++" : '#041e42',
  "Objective-C++" : '#041e42',
  "C#": '#68217A',
  "JavaScript": 'darkorange',
  "Python": '#0B6623',
  "Lua": '#6e6a39',
  "Batchfile" : "#000000",
  "CMake" : 'green',
  "HTML" : '#E34C26',
  "CSS" : '#663399',
  "Java" : '#007396'
};

export const Projects = () => {
  const repos = useLatestRepos();

  return (
  <div className='projects'>
    <div className="page">
      <h2>Latest Projects</h2>
      <div className="latest-projects">
        <div>
          {repos.map((repo) => (
            <Accordion key={repo.name}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className="summary">
                  {repo.image ? (
                    repo.image != react && repo.image != uno ? 
                    (<img src={repo.image} alt={repo.name} className="project-image"/>) : 
                    (<img src={repo.image} alt={repo.name} className="project-image contain"/>)
                  ) : (
                    <img src={github} alt="GitHub Logo" className="project-image contain"/>
                  )}

                  <div className="summary-flex">
                    <h3 className="project-name">{repo.name}</h3>

                    <span className="languages-span">
                      {repo.languages.slice(0, 12).map((lang) => (
                        <span
                          key={lang}
                          className="language"
                          style={{backgroundColor: LANG_COLS[lang] || "#000000"}}>
                          {lang}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <hr className="summary-divider"></hr>
                <p className="project-description">{repo.description}</p>
                <div className="details">
                  <span><GitHubButton href={`${repo.url}`} data-color-scheme="no-preference: light; light: light; dark: dark;" data-show-count="false" data-size="large" aria-label="Source Code">Source Code</GitHubButton></span>
                  <span>
                    <div className="stars-card">
                      <span className="stars-span"><strong className="github-info-icon">★</strong> {repo.stars}</span>
                      <span className="watchers-span"><strong className="github-info-icon">👁</strong> {repo.watchers}</span>
                      <span className="issues-span"><strong className="github-info-icon">⚠</strong> {repo.issues}</span>
                    </div>
                  </span>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="all-projects-button"><div className="shake"><a href="https://github.com/jackpsmith-git?tab=repositories" target="_blank"><Button><h3 className="all-projects-text">All Projects</h3></Button></a></div></div>

    </div>
  </div>
  );
};