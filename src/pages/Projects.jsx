import "./Projects.css"

import { Button } from '../components/Button.jsx';
import { ScrollCarousel } from "../components/ScrollCarousel.jsx";

export const Projects = () => {
  return (
  <div id="projects" className='projects'>
    <div className="page">
      <div>
        <ScrollCarousel />
      </div>
    </div>
  </div>
  );
};