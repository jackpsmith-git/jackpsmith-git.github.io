import "./Skills.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';

const PROGRAMMING_LANGUAGES = {
  "C/C++" : "assets/images/cpp.png",
  "Python" : "assets/images/python.png",
  "Java" : "assets/images/java.png",
  "C#" : "assets/images/csharp.png",
  "JavaScript" : "assets/images/javascript.png",
  "HTML" : "assets/images/html.png",
  "CSS" : "assets/images/css.png",
  "Lua" : "assets/images/lua.png",
  "PHP" : "assets/images/php.png",
}

const FRAMEWORKS = {
  "OpenGL" : "assets/images/opengl.png",
  "Vulkan" : "assets/images/vulkan.png",
  "React" : "assets/images/react.png",
  "Bootstrap" : "assets/images/bootstrap.png",
  "Tailwind" : "assets/images/tailwind.png",
  ".NET" : "assets/images/dotnet-logo.png",
  "node.js" : "assets/images/nodejs.png",
  "Three.js" : "assets/images/threejs.png",
  "FastAPI" : "assets/images/FastAPI.png",
  "Qt" : "assets/images/qt.png",
}

const DEVTOOLS = {
  "VS 2022" : "assets/images/visualstudio.png",
  "VS Code" : "assets/images/vscode.png",
  "Git" : "assets/images/git.png",
  "GitHub" : "assets/images/github.png",
  "Claude" : "assets/images/claude-color.png",
  "Unity" : "assets/images/unity.png",
  "Unreal"  : "assets/images/unreal.png",
  "Docker" : "assets/images/docker.png",
  "MySQL" : "assets/images/mysql.png",
  "CMake" : "assets/images/cmake.png",
}

const CREATIVE_TOOLS = {
  "Photoshop" : "assets/images/photoshop.png",
  "Illustrator" : "assets/images/illustrator.png",
  "Figma" : "assets/images/figma.png"
}

const OPERATING_SYSTEMS = {
  "Windows" : "assets/images/windows.png",
  "Unix/Linux" : "assets/images/linux.png",
  "MacOS" : "assets/images/apple.png",
  "iOS" : "assets/images/apple.png",
  "Android" : "assets/images/android.png",
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
        <Accordion defaultExpanded slotProps={{ heading: { component: 'h2' } }} style={{backgroundColor: "transparent"}}>
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