import "./Skills.css"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';

import cpp from "../assets/images/cpp.png"
import csharp from "../assets/images/csharp.png"
import java from "../assets/images/java.png"
import python from "../assets/images/python.png"
import javascript from "../assets/images/javascript.png"
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import php from "../assets/images/php.png"
import lua from "../assets/images/lua.png"

import opengl from "../assets/images/opengl.png"
import nodejs from "../assets/images/nodejs.png"
import react from "../assets/images/react.png"
import bootstrap from "../assets/images/bootstrap.png"
import tailwind from "../assets/images/tailwind.png"
import vulkan from "../assets/images/vulkan.png"
import dotnet from "../assets/images/dotnet-logo.png"
import fastapi from "../assets/images/FastAPI.png"
import threejs from "../assets/images/threejs.png"
import qt from "../assets/images/qt.png"

import visualstudio from "../assets/images/visualstudio.png"
import vscode from "../assets/images/vscode.png"
import git from "../assets/images/git.png"
import github from "../assets/images/github.png"
import unity from "../assets/images/unity.png"
import unreal from "../assets/images/unreal.png"
import docker from "../assets/images/docker.png"
import mysql from "../assets/images/mysql.png"
import cmake from "../assets/images/cmake.png"
import claude from "../assets/images/claude-color.png"

import photoshop from "../assets/images/photoshop.png"
import illustrator from "../assets/images/illustrator.png"
import figma from "../assets/images/figma.png"

import windows from "../assets/images/windows.png"
import linux from "../assets/images/linux.png"
import apple from "../assets/images/apple.png"
import android from "../assets/images/android.png"

const PROGRAMMING_LANGUAGES = {
  "C/C++" : cpp,
  "Python" : python,
  "Java" : java,
  "C#" : csharp,
  "JavaScript" : javascript,
  "HTML" : html,
  "CSS" : css,
  "Lua" : lua,
  "PHP" : php,
}

const FRAMEWORKS = {
  "OpenGL" : opengl,
  "Vulkan" : vulkan,
  "React" : react,
  "Bootstrap" : bootstrap,
  "Tailwind" : tailwind,
  ".NET" : dotnet,
  "node.js" : nodejs,
  "Three.js" : threejs,
  "FastAPI" : fastapi,
  "Qt" : qt,
}

const DEVTOOLS = {
  "VS 2022" : visualstudio,
  "VS Code" : vscode,
  "Git" : git,
  "GitHub" : github,
  "Claude" : claude,
  "Unity" : unity,
  "Unreal"  : unreal,
  "Docker" : docker,
  "MySQL" : mysql,
  "CMake" : cmake,
}

const CREATIVE_TOOLS = {
  "Photoshop" : photoshop,
  "Illustrator" : illustrator,
  "Figma" : figma
}

const OPERATING_SYSTEMS = {
  "Windows" : windows,
  "Unix/Linux" : linux,
  "MacOS" : apple,
  "iOS" : apple,
  "Android" : android,
}

const SECTIONS = {
  "Programming Languages" : PROGRAMMING_LANGUAGES,
  "Frameworks/Libraries" : FRAMEWORKS,
  "Development Tools" : DEVTOOLS,
  "Creative Tools" : CREATIVE_TOOLS,
  "Operating Systems" : OPERATING_SYSTEMS,
}

export const Skills = () => { return (
<div id="skills" className="skills">
  <div className="page">
    <h2>Skills</h2>

    {Object.entries(SECTIONS).map(([sectionKey, sectionValue]) => (
      <div key={sectionKey}>
        <Accordion defaultExpanded slotProps={{ heading: { component: 'h2' } }} style={{backgroundColor: "black"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
          <h3>{sectionKey}</h3>
          </AccordionSummary>
          
          <AccordionDetails>
            <div className="skills-grid">
              {Object.entries(sectionValue).map(([key, value]) => (
                <div key={key}><div className="skill-card">
                  <span className='icon-span'><img src={value} height="30" /></span>
                  <span><h4 className='skill-name'>{key}</h4></span>
                </div></div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    ))}
  </div>
</div>
);};