import React from 'react';
import '../css/Navbar.css';

const Navbar = () => (
  <nav className="nav-links">
    <a href="#about" className="nav-link">About</a>
    <a href="#skills" className="nav-link">Skills</a>
    <a href="#projects" className="nav-link">Projects</a>
    <a href="#experience" className="nav-link">Experience</a>
    <a href='https://docs.google.com/document/d/1eMNcO5TS0PoWnj-yf94OxM6ApjHkIM_d40_Kl5dWGzA/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
          <button className='btn'>
            Resume <i className="fas fa-external-link-alt"></i>
          </button>
    </a>
  </nav>
);

export default Navbar;
