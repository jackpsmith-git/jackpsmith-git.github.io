import "./Projects.css"

import { Button } from '../components/Button.jsx';
import { ScrollCarousel } from "../components/ScrollCarousel.jsx";

export const Projects = () => {
  return (
  <div id="projects" className='projects'>
    <div className="max-w-[1000px] mx-auto px-10 py-5 bg-transparent">
      <div>
        <ScrollCarousel />
      </div>
    </div>
  </div>
  );
};