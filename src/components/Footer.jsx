import React, { useState, useEffect } from 'react';
import '../css/Footer.css';

import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import discord from '../images/discord.png';
import repl from '../images/repl.png';
import mal from '../images/MAL.png';
import email from '../images/email.png';

const Footer = () => {
  const [lastModified, setLastModified] = useState('');
  const [toolTipTextEmail, setToolTipTextEmail] = useState('Email📋');
  const [toolTipTextDiscord, setToolTipTextDiscord] = useState('Discord📋');

  useEffect(() => {
    setLastModified(new Date(document.lastModified).toLocaleString());
  }, []);

  const copyEmail = (e) => {
    navigator.clipboard.writeText('wilsonszerto99@gmail.com');
    setToolTipTextEmail('Email copied!');
    setTimeout(() => setToolTipTextEmail('Email📋'), 2000);
  };

  const copyDiscord = (e) => {
    navigator.clipboard.writeText('willievibes');
    setToolTipTextDiscord('Discord copied!');
    setTimeout(() => setToolTipTextDiscord('Discord📋'), 2000);
  };

  return (
    <footer className="footer">
      <p>Last modified: {lastModified}</p>
      <p>Created with React.js. Deployed with Github Pages.</p>
      <p>© 2023 by Wilson Szeto.</p>
      <div id='icons'>
        <a href='https://www.linkedin.com/in/wilson-szeto-3a4b591aa/' target='_blank' rel='noopener noreferrer' className='icon-link'>
          <div id='tooltip' className='icon-link'>
            <img src={linkedin} alt='Linkedin' width='35px' height='35px' />
            <span className='tooltiptext'>Linkedin</span>
          </div>
        </a>


        <div
          id='tooltip'
          className='icon-link'
          onClick={copyEmail}
          style={{ cursor: 'pointer' }}
        >
          <img src={email} alt='Email' width='35px' height='35px' />
          <span className='tooltiptext'>{toolTipTextEmail}</span>
        </div>


        <div
          id='tooltip'
          className='icon-link'
          onClick={copyDiscord}
          style={{ cursor: 'pointer' }}
        >
          <img src={discord} alt='Discord' width='35px' height='35px' />
          <span className='tooltiptext'>{toolTipTextDiscord}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
