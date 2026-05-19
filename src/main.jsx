import ReactDOM from 'react-dom/client'
import { TerminalContextProvider } from "react-terminal";
import { StrictMode } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './index.css'

import App from './App';

gsap.registerPlugin(ScrollTrigger)

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TerminalContextProvider>
      <App />
    </TerminalContextProvider>
  </StrictMode>
)