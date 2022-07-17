import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Index';
import Home from './components/Home/index';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Layout />}/>
      </Routes>
      <Routes>
    <Route  path="" element={<Home />}/>
    </Routes>
    <Routes>
    <Route  path="about" element={<About />}/>
    </Routes>
    <Routes>
    <Route  path="contact" element={<Contact />}/>
    </Routes>
   
   
    </>
  );
}

export default App;
