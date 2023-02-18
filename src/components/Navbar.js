import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <i className="fa-sharp fa-solid fa-fire">WS</i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href='#frontpage' className='nav-links' onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#aboutsection' className='nav-links' onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#projectsection' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a href='#skillsection' className='nav-links' onClick={closeMobileMenu}>
              Skills
            </a>
          </li>
          <li className='nav-item'>
            <a href='#experiencesection' className='nav-links' onClick={closeMobileMenu}>
              Experience
            </a>
          </li>
          <li className='nav-item'>
            <a href='#experiencespace' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
        </ul>
        <a href='https://docs.google.com/document/d/1eMNcO5TS0PoWnj-yf94OxM6ApjHkIM_d40_Kl5dWGzA/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
          <button className='btn'>
            Resume <i className="fas fa-external-link-alt"></i>
          </button>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
