import { Routes, Route } from "react-router-dom";
import { Homepage } from './pages/Homepage.jsx'
import { Terminal } from './pages/Terminal.jsx';

export default function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/terminal' element={<Terminal />} />
        </Routes>
      </>
    );
}