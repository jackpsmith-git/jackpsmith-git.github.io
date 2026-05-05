import { Button } from './Components/Button.js'
import { ShakeCard } from './Components/ShakeCard.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { motion } from "framer-motion"

import cataclysm from "./images/Cataclysm.png"
import shaderSandbox from "./images/ShaderSandbox.png"
import pcr from "./images/PointCloudRenderer.png"

const FEATURED_PROJECTS = [
  {
    "name" : "Cataclysm",
    "languages" : "C/C++, C#, OpenGL, GLSL",
    "description" : "2D rendering & game development engine powered by OpenGL",
    "image" : cataclysm,
    "link" : "https://www.github.com/jackpsmith-git/Cataclysm"
  },
  {
    "name" : "Shader Sandbox",
    "languages" : "C/C++, OpenGL, GLSL",
    "description" : "Portable Windows tool for testing GLSL shaders",
    "image" : shaderSandbox,
    "link" : "https://www.github.com/jackpsmith-git/ShaderSandbox"
  },
  {
    "name" : "Point-Cloud Renderer",
    "languages" : "C/C++, Vulkan, GLSL",
    "description" : "3D, point-cloud, Vulkan renderer",
    "image" : pcr,
    "link" : "https://www.github.com/jackpsmith-git/PointCloudRenderer"
  },
]

export const Home = () => { return (
<div className="p-6 graybackground"><div className="page-container">
  <h2>Featured Projects</h2>
  <div className="card-flex-grid">
    {FEATURED_PROJECTS.map(({ name, languages, description, image, link }) => (
      <div className="col" key={name}>
        <ShakeCard href={link}>
          <img src={image} alt="" width="100%" />
          <h3 style={{ paddingTop: 12, textAlign: 'left' }}>{name} ({languages})</h3>
          <p>{description}</p>
        </ShakeCard>
      </div>
    ))}
  </div>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 15, paddingBottom: 15 }}><div className="shake"><Link to="/Projects"><Button><h3 style={{marginLeft: 12, marginRight: 12, marginTop: 8, marginBottom: 8}}>See More</h3></Button></Link></div></div>
  <hr style={{marginTop: 40, marginBottom: 20}}/>

  <div style={{ textAlign: 'center', padding: '60px 20px' }}>
    <motion.h1
      initial={{y: 25, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1, ease: "easeInOut"}}>"You might not think that programmers are artists, but programming is an extremely creative profession."</motion.h1>
    <motion.h3 initial={{y: 25, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1, ease: "easeInOut"}} style={{ margin: 0 }}>- John Romero</motion.h3>
    <motion.p initial={{y: 25, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1, ease: "easeInOut"}} style={{ margin: 0, color: "GrayText", marginTop: 5 }}>Co-Founder, iD Software</motion.p>
  </div>

</div></div>
);};