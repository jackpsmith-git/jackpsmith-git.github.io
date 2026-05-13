import './Home.css'
import { useMemo, useState, Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion"
import { Button } from '../components/Button.jsx'
import { FeaturedCard } from '../components/FeaturedCard.jsx'

const FEATURED_PROJECTS = [
  {
    "name" : "Cataclysm",
    "languages" : "C/C++, C#, OpenGL, GLSL",
    "description" : "2D rendering & game development engine powered by OpenGL",
    "image" : "assets/images/Cataclysm.png",
    "link" : "https://www.github.com/jackpsmith-git/Cataclysm"
  },
  {
    "name" : "Shader Sandbox",
    "languages" : "C/C++, OpenGL, GLSL",
    "description" : "Portable Windows tool for testing GLSL shaders",
    "image" : "assets/images/ShaderSandbox.png",
    "link" : "https://www.github.com/jackpsmith-git/ShaderSandbox"
  },
  {
    "name" : "Point-Cloud Renderer",
    "languages" : "C/C++, Vulkan, GLSL",
    "description" : "3D, point-cloud, Vulkan renderer",
    "image" : "assets/images/PointCloudRenderer.png",
    "link" : "https://www.github.com/jackpsmith-git/PointCloudRenderer"
  },
]

function Model(props) {
  const { scene } = useGLTF("assets/scenes/scene.gltf");
  return <primitive object={scene} {...props} />;
}

export const Home = () => { 
useGLTF.preload("assets/scenes/scene.gltf")
return (
<section id="home" className="home">
  <div className="page">
    <h2>Featured Projects</h2>

    <div className="card-flex-grid">
      {FEATURED_PROJECTS.map(({ name, languages, description, image, link }) => (
        <div className="flex-col" key={name}>
          <FeaturedCard href={link}>
            <img src={image} alt={name} width="100%" />
            <h3 className="featured-card-header">{name} ({languages})</h3>
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

    <div className="model-canvas" >
      <Canvas camera={{ position: [0, 0, 6], fov: 50, near: 0.1, far: 100 }}>
        <ambientLight intensity={0.5} color="white" />

        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={40} />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
    <p className="attribution"><sup>1</sup>"Three.js Logo — 3D Model" (<a href="https://skfb.ly/pFQEy" target="_blank" rel="noopener noreferrer">https://skfb.ly/pFQEy</a>) by Alex human is licensed under Creative Commons Attribution (<a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">http://creativecommons.org/licenses/by/4.0/</a>).</p>

  </div>
</section>
);};