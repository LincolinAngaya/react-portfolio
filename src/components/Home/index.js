import React from 'react'

import './index.scss'
import { Link} from 'react-router-dom';
import Logo from './Logo';


const Home = () => {

  return (
    <>
   
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br /> I'm Lincolin Angaya

            <br />
            A Software Engineer
            </h1>
            <h2>Full Stack Software Developer</h2>
            <h2>Javascript || React JS || Ruby || Ruby on Rails || ICT Officer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    
    </>
  )
}

export default Home;