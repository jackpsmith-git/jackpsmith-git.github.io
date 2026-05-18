import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

import './styles.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import App from './App';

gsap.registerPlugin(ScrollTrigger)

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)