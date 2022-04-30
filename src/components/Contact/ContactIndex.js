import Loader from 'react-loaders'
import './ContactIndex.scss'
import AnimatedLetters from '../AnimatedLetters/ALindex.js'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Map from './map'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_565msza',
        'template_yab4jzt',
        e.target,
        // U have to put your user ID here
        '5s-n7zU51w7AmJpM4'
      )
      .then(
        () => {
          alert('Massege successfuly sent')
          window.location.reload(false)
        },
        () => {
          alert('failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>I am interested in a Full-Time opportunity at your respectful company,<br /> Throughout my internships and tuition I have developed advanced experience<br /> and knowledge in Web Development and Mobile Development.</p>
          
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mahmoud Al-Shawish,
          <br />
          United Arab Emirates,
          <br />
          Dubai
          <br />
          <span>mhmoodsh1996@gmail.com</span>
        </div>
        <div className="map-wrap">
          <Map />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
