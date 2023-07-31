import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 300;
      const aboutTop = document.querySelector('#about').offsetTop - navbarHeight;
      const skillsTop = document.querySelector('#skills').offsetTop - navbarHeight;
      const projectsTop = document.querySelector('#projects').offsetTop - navbarHeight;
      const experienceTop = document.querySelector('#experience').offsetTop - navbarHeight;
    
      const currentScrollPos = window.pageYOffset;
    
      if (currentScrollPos < skillsTop) {
        setCurrentSection('about');
      } else if (currentScrollPos < projectsTop) {
        setCurrentSection('skills');
      } else if (currentScrollPos < experienceTop) {
        setCurrentSection('projects');
      } else {
        setCurrentSection('experience');
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="nav-links">
      <a href="#about" className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}>About</a>
      <a href="#skills" className={`nav-link ${currentSection === 'skills' ? 'active' : ''}`}>Skills</a>
      <a href="#projects" className={`nav-link ${currentSection === 'projects' ? 'active' : ''}`}>Projects</a>
      <a href="#experience" className={`nav-link ${currentSection === 'experience' ? 'active' : ''}`}>Experience</a>
      <a href='https://docs.google.com/document/d/1eMNcO5TS0PoWnj-yf94OxM6ApjHkIM_d40_Kl5dWGzA/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
        <button className='btn'>
          Resume <i className="fas fa-external-link-alt"></i>
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
