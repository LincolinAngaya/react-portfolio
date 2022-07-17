import React from 'react'

import { useEffect, useState } from 'react'
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
            A Web Developer
            </h1>
            <h2>Frontend  & Backend Developer|UX/UI Designer</h2>
            <h2>Graphic Designer |I.T Support |ICT Officer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    
    </>
  )
}

export default Home;