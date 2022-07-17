import { Link} from 'react-router-dom';
import {
  
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Sidebar from '../Sidebar/Index'

const About = () => {
  

  return (
    <>
    < Sidebar/>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
           About Me
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>My name is <b>Lincolin Angaya</b>.I am a <b>Certified </b> 
          Web Developer from Moringa School of Software Engineering and I'm based in 
          <b>Nairobi Kenya</b>.<br />My Main focus has mainly been on front-end 
          web development with latest technology and frameworks. I provide 
          clean code and perfect design. I also make the website more & more interactive 
          with web animations.A responsive <br />design makes your website accessible 
          to all users, regardless of their device.
            </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
           
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
     
    </>
  )
}

export default About
