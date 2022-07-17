import React from 'react'
import './index.scss'
import { Link} from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br /> I'm
            <br />
            Web Developer
            </h1>
            <h2>Frontend Developer /Javascript Expert / Youtuber</h2>
            <Link to="/contact" className='flat-button'>CONTACT</Link>
        </div>
    </div>
    
    </>
  )
}

export default Home;