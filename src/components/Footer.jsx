import React from 'react'
import '../styles/Footer.scss'
import SchoolLogo from '../assets/school-logo.png'
import Facebook from '../assets/facebook-color-svgrepo-com.svg'

const Footer = () => {
  return (
    <footer>
      <div>
        <div >
          <img className='logo' src={SchoolLogo} alt="" />
        </div>
        <div className='service-hours'>
          <p>Hours of Service: Monday - Friday 8:00am - 4:00pm</p>
        </div>
      </div>
      <div className='addr-contact'>
        <div className='phone-contact'>
          <p>Contact Us At: (312) 771 4640</p>
        </div>
        <div className='address'>
          <p>5970 S Camelback Ave, Chicago, Il 60632</p>
        </div>
      </div>
      <div className='social-media'>
        <p>Visit us at our Facebook Page</p>
        <img className='facebook-logo' src={Facebook} alt="Facebook" />
      </div>
    </footer>
  );
}

export default Footer;