import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home.jsx'
import { Terminal } from './pages/Terminal.jsx';

export default function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terminal' element={<Terminal />} />
        </Routes>
      </>
    );
}