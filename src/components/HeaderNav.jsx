import React, {useState} from 'react'
import '../styles/HeaderNav.scss'
import SchoolLogo from '../assets/school-logo.png'
import MenuLines from '../assets/menu-lines.svg'
import Cancel from '../assets/cancel-close-svgrepo-com.svg'



const HeaderNav = () => {
  
  const [show,setShow]=useState(false)
  const [change,changeIcon]=useState({MenuLines})
    

  return (
      <header>
        <div>
          <img className='schoolLogo' src={SchoolLogo} alt='School logo' />
        </div>
        <div className='button-navbar'>
          <button 
          onClick={()=>{
            setShow(!show)
            changeIcon(!change)
          }}
          className='button'>
            <img className='menuLines' src={MenuLines} alt="Button" />
          </button>
          {show?<div className='nav-Bar'>
            <ul>
              <li>Staff</li>
              <li>Galery</li>
              <li>How to enroll</li>
            </ul>
          </div>:null}
        </div>
      </header>
  );
}

export default HeaderNav;