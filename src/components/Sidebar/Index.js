import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram,
    faFacebook
  } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'


const Sidebar= () => {
    const logo = require('../../assets/images/mylogo.png');
  return (
    <div className='nav-bar'>
     <Link className ='logo' to='/'>
        <img src={logo}  alt='logo'/>
     </Link>

     <nav>
        <NavLink exact='true' activeclassname="active" to="/">
               <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
               <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
               <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
     </nav>
     <ul>
        <li>
       <a target="_blank" rel="noreferrer" href="">
       <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
       </a>
        </li>
        <li>
       <a target="_blank" rel="noreferrer" href="">
       <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
       </a>
        </li>
        <li>
       <a target="_blank" rel="noreferrer" href="">
       <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
       </a>
        </li>
        <li>
       <a target="_blank" rel="noreferrer" href="">
       <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
       </a>
        </li>
        <li>
       <a target="_blank" rel="noreferrer" href="">
       <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
       </a>
        </li>
     </ul>
    </div>
  )
}

export default Sidebar;
