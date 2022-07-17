import './index.scss'
import React from 'react'

const Logo = () => {
    const profile = require('../../../assets/images/PASSPORT.jpg');
  return (
    <div className='logo-container'>
     <img src={profile} className='solid-logo' />
    </div>
  )
}

export default Logo;
