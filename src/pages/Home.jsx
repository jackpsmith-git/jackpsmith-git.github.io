import './Home.css';
import { useMemo, useState, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Float } from '../components/Float.jsx';
import { Button } from '../components/Button.jsx';
import { FeaturedCard } from '../components/FeaturedCard.jsx';
import { FEATURED_PROJECTS, LANG_COLS } from '../Constants.js';


export const Home = () => { 
return (
<section id="home" className="home">
  <div className="page">
      <div className="card-flex-grid">
        {FEATURED_PROJECTS.map(({ name, languages, description, image, link }) => (
          <div className="flex-col" key={name}>
            <Float>
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
            </Float>
          </div>
        ))}
      </div>

      <Float>
        <div className='center-button'>
          <div className="shake"><a href="#projects"><Button><h3 className="see-more-text">See More</h3></Button></a></div>
        </div>
      </Float>
    
      <Float>
        <hr className='divider'/>
        <div className='quote'>
          <h1>"You might not think that programmers are artists, but programming is an extremely creative profession."</h1>
          <h3 style={{ margin: 0 }}>- John Romero</h3>
          <p style={{ margin: 0, color: "GrayText", marginTop: 5 }}>Co-Founder, iD Software</p>
        </div>
        <hr id="about" className='divider'/>
      </Float>
  </div>
</section>
);};