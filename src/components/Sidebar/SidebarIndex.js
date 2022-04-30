import { Link, NavLink } from 'react-router-dom'
import './SidebarIndex.scss'
import LOGOM from '../../assets/images/LOGOM.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
          <img src={LOGOM} alt="logo" />
          {/* <img className='sub-logo' src={LogoSubtitle} alt="logo" /> */}
      </Link>
      <nav>
          <NavLink exact='true' activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" /> 
          </NavLink>

          <NavLink exact='true' activeclassname="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> 
          </NavLink>

          <NavLink exact='true' activeclassname="active" className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> 
          </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mahmoud-alshawish-917091171/'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.instagram.com/mahmoud_captures/'>
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
