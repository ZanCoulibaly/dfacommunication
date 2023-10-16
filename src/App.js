import {Routes,Route} from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Agence from './pages/Agence';
import Expertise from './pages/Expertise';
import Portfolio from './pages/Portfolio';
import Actualite from './pages/Actualite';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    {/* <Menu/> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/agence" element={<Agence/>} />
      <Route path="/expertise" element={<Expertise/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/actualite" element={<Actualite/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
