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
          <p>My name is <b>Lincolin Angaya</b> Information Communication Technology graduate with certification in software engineering and with two-year of experience in the field. I am based in 
          <b>Nairobi, Kenya</b>.<br />I am a dynamic Junior Software Developer with a passion for Full Stack software development.<br />I have learned several languages/libraries and frameworks for experience to work in a fast-growing company where I will use my excellent technical skills such as Javascript, React Js, Ruby,  and ruby on rails to deliver best of its software development and digital solutions satisfaction. I will also apply my communication, critical, and leadership skills which will enhance a conducive working environment and increase returns for the company.</p>
          {/*
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
           <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p> 
         
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p> */}
          <Link to="/contact" className='flat-button'>DOWNLOAD MY CV</Link>
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
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
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
