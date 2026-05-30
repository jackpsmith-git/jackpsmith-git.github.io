import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home.jsx'
import { Terminal } from './pages/Terminal.jsx';
import { Socials } from "./pages/Socials.jsx";

export default function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terminal' element={<Terminal />} />
          <Route path='/socials' element={<Socials />} />
        </Routes>
      </>
    );
}