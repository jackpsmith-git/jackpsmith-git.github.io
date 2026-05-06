import './Home.css'

import { Button } from '../components/Button.js'
import { ShakeCard } from '../components/ShakeCard.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { motion } from "framer-motion"

import cataclysm from "../assets/images/Cataclysm.png"
import shaderSandbox from "../assets/images/ShaderSandbox.png"
import pcr from "../assets/images/PointCloudRenderer.png"

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
<div className="home">
  <div className="page">
    <h2>Featured Projects</h2>
    <div className="card-flex-grid">
      {FEATURED_PROJECTS.map(({ name, languages, description, image, link }) => (
        <div className="flex-col" key={name}>
          <ShakeCard href={link}>
            <img src={image} alt="" width="100%" />
            <h3 className="shake-card-header">{name} ({languages})</h3>
            <p>{description}</p>
          </ShakeCard>
        </div>
      ))}
    </div>

    <div className='center-button'>
      <div className="shake"><Link to="/Projects"><Button><h3 className="see-more-text">See More</h3></Button></Link></div>
    </div>
    <hr className='divider'/>

    <div className='quote'>
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

  </div>
</div>
);};