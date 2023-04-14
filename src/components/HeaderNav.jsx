import React, {useState} from 'react'
import '../styles/HeaderNav.scss'
import SchoolLogo from '../assets/school-logo.png'
import MenuLines from '../assets/menu-lines.svg'




const HeaderNav = () => {
  
  const [show,setShow]=useState(false)
    

  return (
      <header>
        <div>
          <img className='schoolLogo' src={SchoolLogo} alt='School logo' />
        </div>
        <div className='button-navbar'>
          <button 
          onClick={()=>{
            setShow(!show)
          }}
          className='button'>
            <img className='menuLines' src={MenuLines} alt="Button" />
          </button>
          {show?<div className='nav-Bar'>
            <ul>
              <li>Staff</li>
              <li>Gallery</li>
              <li>How to enroll</li>
            </ul>
          </div>:null}
        </div>
      </header>
  );
}

export default HeaderNav;