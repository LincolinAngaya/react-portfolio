
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import Sidebar from '../Sidebar/Index'

const Contact = () => {
    const position = [51.505, -0.09]
    const form = useRef()
  
    
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm(
          'gmail',
          'licolinangaya5626@gmail.com',
          form.current,
          'your-token'
        )
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

  return (
    <>
    <Sidebar />
    <div className="container contact-page">
        <div className="text-zone">
          <h1>
            
             Contact Me
           
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
               
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
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
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          </div>
        </div>
        <div className="info-map">
          Langata-Nairobi,
          <br />
          Kenya,
          <br />
          Karen CrossRoads 19, 22000 <br />
          
          <span>lincolinangaya5626@gmail.com.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        </div>
        <Loader type="pacman" />
    </>
  )
}

export default Contact;
