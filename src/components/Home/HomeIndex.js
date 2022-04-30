import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LOGOM from '../../assets/images/LOGOM.png'
import './HomeIndex.scss'
import AnimatedLetters from '../AnimatedLetters/ALindex'
// import Logo from './Logo/LogoIndex'
import Loader from 'react-loaders'
import { saveAs } from 'file-saver'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'h', 'm', 'o', 'u', 'd']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, []);

  const saveFile = () => {
    saveAs(
      'https://drive.google.com/file/d/1HLbQPTSaWb7doqOpQVIV_sQDk72YWb22/view?usp=sharing',
      'Mahmoud CV.pdf'
    )
  }

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LOGOM}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / Mobile Developer / Photographer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <div className='button'>
            <button className="CV-button" onClick={saveFile}>
              Display CV
            </button>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
