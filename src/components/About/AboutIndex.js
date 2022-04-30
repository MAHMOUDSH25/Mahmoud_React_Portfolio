import './AboutIndex.scss'
import AnimatedLetters from '../AnimatedLetters/ALindex.js'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAndroid,
  faJsSquare,
  faCss3,
  faGit,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import LabTabs from './SKILLSandEXP/Skills'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, []);

  return (
    <>
      <div className="container about-page">
        <div className="abouttext-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a Fresh Graduate with a Bachelor’s degree in Software
            Engineering. Eager for an opportunity to utilize my special set of
            skills, who doesn’t shy away from Challenges, experienced in working
            under Pressure, and genuinely interested in an opportunity to work
            with an organization like yours.
          </p>

          

          <div className="stage-cube-count">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAndroid} color="#07fc03" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#f06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#efd81f" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGit} color="#ec4d28" />
              </div>
            </div>
          </div>
        </div>

        <div className="work-exp">


        <LabTabs />
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About;





// old exp code belooooow
{/* <label>
            <h2>Capture Beauty. (Astrolabes project)</h2>
          </label>
          <ul>
            <li>Coordinated and managed team members tasks and activities.</li>
            <li>
              Creatively Designed the Website interface and inner dynamics.
            </li>
            <li>
              Developed the flow of events about how the Website will function.
            </li>
            <li>Implemented the Back-end of the Website.</li>
            <li>
              Tested the Website functional and non-functional requirements.
            </li>
            <li>Fixed the bugs and issues in the Website.</li>
            <li>Uploaded the code work to Github.</li>
            <li>Uploaded both the Front-end and the Back-end to Heroku.</li>
            <li>Maintained the Website for future updates.</li>
            <li>To see the Website, click here</li>
          </ul>

          <br />

          <label>
            <h2>PocketDoc. (Graduation project)</h2>
          </label>
          <ul>
            <li>Gathered the Requirements for the application.</li>
            <li>Coordinated and managed team members tasks and activities.</li>
            <li>
              Creatively Designed the application interface and inner dynamics.
            </li>
            <li>Made the scenarios about how the application will function.</li>
            <li>Designed flow charts for sequence events.</li>
            <li>Designed the logo for the application.</li>
            <li>Implemented the application for the patient's side.</li>
            <li>
              Implemented the chat screen between the patient and the doctor.
            </li>
            <li>
              Tested the application's functional and non-functional
              requirements.
            </li>
            <li>Fixed the bugs and issues in the application.</li>
            <li>Maintained the application for future updates.</li>
          </ul> */}