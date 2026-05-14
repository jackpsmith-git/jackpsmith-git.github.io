import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import App from "./App";

gsap.registerPlugin(ScrollTrigger);
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);