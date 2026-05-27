import ReactDOM from 'react-dom/client'
import { TerminalContextProvider } from "react-terminal";
import { StrictMode } from 'react'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App';

gsap.registerPlugin(ScrollTrigger)

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TerminalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </TerminalContextProvider>
  </StrictMode>
)