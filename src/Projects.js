import { Button } from './Components/Button.js';
import { useLatestRepos } from './Effects/GitHub.js';

import GitHubButton from 'react-github-btn';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import github from "./images/github.png"
import react from "./images/react.png"
import uno from "./images/TermProject.png"

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
  <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ maxWidth: '1000px' }}><div className="p-6" style={{marginBottom: 40}}>
    <h2 className="text-3xl font-bold mb-4">Latest Projects</h2>
    <div style={{ display: 'flex', justifyContent: 'center' }}><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <Accordion key={repo.name}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              }}
            >
              {repo.image ? (repo.image != react && repo.image != uno ? (
                <img
                  src={repo.image}
                  alt={repo.name}
                  style={{
                    width: 100,
                    height: 50,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginRight: 12
                  }}
                />
              ) : (
                <img
                  src={repo.image}
                  alt={repo.name}
                  style={{
                    width: 100,
                    height: 50,
                    objectFit: "contain",
                    borderRadius: 8,
                    marginRight: 12
                  }}
                />
              )) : (
                <img
                  src={github}
                  alt="GitHub Logo"
                  style={{
                    width: 100,
                    height: 50,
                    objectFit: "contain",
                    borderRadius: 8,
                    marginRight: 12
                  }}
                />
              )}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1
                }}
              >
                <h3 style={{ marginLeft: 0, marginRight: 30 }} className="font-semibold">
                  {repo.name}
                </h3>

                <span
                  style={{
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    marginLeft: 'auto',
                    justifyContent: 'flex-end',
                    textAlign: 'right'
                  }}
                >
                  {repo.languages.slice(0, 12).map((lang) => (
                    <span
                      key={lang}
                      style={{
                        backgroundColor: LANG_COLS[lang] || "#000000",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "999px",
                        fontSize: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {lang}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </AccordionSummary>

          <AccordionDetails>
            <hr style={{marginTop: 0, paddingTop: 0}}></hr>
            <p>{repo.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span><GitHubButton href={`${repo.url}`} data-color-scheme="no-preference: light; light: light; dark: dark;" data-show-count="false" data-size="large" aria-label="Source Code">Source Code</GitHubButton></span>
              <span>
                <div className="insetcard" style={{ margin: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 4, paddingLeft: 8, paddingRight: 8, borderRadius: 4, boxShadow: 'inset 0 2px 3px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(247, 247, 247)'}}>
                  <span style={{paddingRight: 10, alignItems: 'center'}}><strong style={{ display: 'inline-block', width: 16, textAlign: 'center' }}>★</strong> {repo.stars}</span>
                  <span style={{paddingRight: 10, alignItems: 'center'}}><strong style={{ display: 'inline-block', width: 16, textAlign: 'center' }}>👁</strong> {repo.watchers}</span>
                  <span style={{alignItems: 'center'}}><strong style={{ display: 'inline-block', width: 16, textAlign: 'center' }}>⚠</strong> {repo.issues}</span>
                </div>
              </span>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div></div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 40, paddingBottom: 15 }}><div className="shake"><a href="https://github.com/jackpsmith-git?tab=repositories" target="_blank"><Button><h3 style={{marginLeft: 12, marginRight: 12, marginTop: 8, marginBottom: 8}}>All Projects</h3></Button></a></div></div>

  </div></div></div>
  );
};