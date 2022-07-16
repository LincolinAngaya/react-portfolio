import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom';


const Sidebar= () => {
    const logo = require('../../assets/images/mylogo.png');
  return (
    <div className='nav-bar'>
     <Link className ='logo' to='/'>
        <img src={logo}  alt='logo'/>
     </Link>
    </div>
  )
}

export default Sidebar;
