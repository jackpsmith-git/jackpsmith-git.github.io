import "./Footer.css"

import { motion, useScroll, useTransform } from "framer-motion";

import github from "../assets/images/github.png"
import nuget from "../assets/images/nuget.png"
import linkedin from "../assets/images/linkedin.png"
import headshot from "../assets/images/headshot.jpeg"

export const Footer = ({yval}) => { 
  return (
<footer>
  <motion.div style={{yval}}>
    <nav className="nav-links-grid">
        <div className="f-nav-links"><a href="#home">Home</a></div>
        <div className="f-nav-links"><a href="#about">About</a></div>
        <div className="f-nav-links"><a href="#skills">Skills</a></div>
        <div className="f-nav-links"><a href="#projects">Projects</a></div>
        <div className="f-nav-links"><a href="#contact">Contact</a></div>
    </nav>
  </motion.div>
</footer>
);}