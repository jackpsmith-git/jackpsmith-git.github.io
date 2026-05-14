import './Home.css'
import { useMemo, useState, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion"
import { Button } from '../components/Button.jsx'
import { FeaturedCard } from '../components/FeaturedCard.jsx'

const FEATURED_PROJECTS = [
  {
    "name" : "Cataclysm",
    "languages" : ["C", "C++", "C#", "OpenGL", "GLSL"],
    "description" : "2D rendering & game development engine powered by OpenGL",
    "image" : "assets/images/Cataclysm.png",
    "link" : "https://www.github.com/jackpsmith-git/Cataclysm"
  },
  {
    "name" : "Shader Sandbox",
    "languages" : ["C", "C++", "OpenGL", "GLSL"],
    "description" : "Portable Windows tool for testing GLSL shaders",
    "image" : "assets/images/ShaderSandbox.png",
    "link" : "https://www.github.com/jackpsmith-git/ShaderSandbox"
  },
  {
    "name" : "Point-Cloud Renderer",
    "languages" : ["C", "C++", "Vulkan", "GLSL"],
    "description" : "3D, point-cloud, Vulkan renderer",
    "image" : "assets/images/PointCloudRenderer.png",
    "link" : "https://www.github.com/jackpsmith-git/PointCloudRenderer"
  },
]

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
  "Java" : '#007396',
  "Vulkan" : '#E34C26',
  "OpenGL" : '#0B6623',
  "GLSL" : '#25ad49'
};

export const Home = () => { 
return (
<section id="home" className="home">
  <div className="page">
    <motion.div
      initial={{y: 25, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      viewport={{ amount: .2 }}
      transition={{duration: 1, ease: "easeInOut"}}
    >
      <div className="card-flex-grid">
        {FEATURED_PROJECTS.map(({ name, languages, description, image, link }) => (
          <div className="flex-col" key={name}>
            <FeaturedCard href={link}>
              <img src={image} alt={name} width="100%" />
              <h3 className="featured-card-header">{name}</h3>
              <span className="languages-span" style={{marginBottom: 15}}>
                {languages.slice(0, 12).map((lang) => (
                  <span
                    key={lang}
                    className="language"
                    style={{
                      backgroundColor: LANG_COLS[lang] || "#000000",
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </span>
              <hr />
              <p className="featured-card-description">{description}</p>
            </FeaturedCard>
          </div>
        ))}
      </div>

      <div className='center-button'>
        <div className="shake"><a href="#projects"><Button><h3 className="see-more-text">See More</h3></Button></a></div>
      </div>
    
      <hr className='divider'/>
      <div className='quote'>
        <h1>"You might not think that programmers are artists, but programming is an extremely creative profession."</h1>
        <h3 style={{ margin: 0 }}>- John Romero</h3>
        <p style={{ margin: 0, color: "GrayText", marginTop: 5 }}>Co-Founder, iD Software</p>
      </div>
      <hr className='divider'/>
    </motion.div>
  </div>
</section>
);};