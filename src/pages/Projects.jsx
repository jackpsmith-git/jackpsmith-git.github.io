import "./Projects.css"

import { Button } from '../components/Button.jsx';
import { ScrollCarousel } from "../components/ScrollCarousel.jsx";

import GitHubButton from 'react-github-btn';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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