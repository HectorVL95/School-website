import React from 'react'
import '../styles/HeaderNav.scss'
import SchoolLogo from '../assets/school-logo.png'
import MenuLines from '../assets/menu-lines.svg'



const HeaderNav = () => {
  
 /*document.querySelector('.button').addEventListener('click', showNavbar)
  function showNavbar(){
    document.querySelector('.nav-Bar').classList.toggle('inactive-Nav');
  };*/

  return (
      <header>
        <div>
          <img className='schoolLogo' src={SchoolLogo} alt='School logo' />
        </div>
        <div className='button-navbar'>
          <button className='button'>
            <img className='menuLines' src={MenuLines} alt="Button" />
          </button>
          <div className='nav-Bar inactive-Nav'>
            <ul>
              <li>Staff</li>
              <li>Galery</li>
              <li>How to enroll</li>
            </ul>
          </div>
        </div>
      </header>
  );
}

export default HeaderNav; 