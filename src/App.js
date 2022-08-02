import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Index';
import Home from './components/Home/index';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/skills'
import Project from './components/project'



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
    <Routes>
    <Route  path="skills" element={<Skills />}/>
    </Routes>
    <Routes>
    <Route  path="project" element={<Project />}/>
    </Routes>
   
   
    </>
  );
}

export default App;
