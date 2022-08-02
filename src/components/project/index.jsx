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

const Project = () => {
  

  return (
    <>
    < Sidebar/>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
           My Projects
          </h1>
          
        </div>

      </div>
      
     
    </>
  )
}

export default Project;
