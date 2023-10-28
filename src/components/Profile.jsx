import React, { useState } from 'react';
import '../css/Profile.css';

import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import discord from '../images/discord.png';
import repl from '../images/repl.png';
import mal from '../images/MAL.png';
import email from '../images/email.png';

const Profile = () => {

  const [toolTipTextEmail, setToolTipTextEmail] = useState('Email📋');
  const [toolTipTextDiscord, setToolTipTextDiscord] = useState('Discord📋');

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
    <div className="profile-section">
      <h1 className="profile-name">Wilson Szeto </h1>
      <h2 className="profile-occupation">Test Automation Engineer at Boeing</h2>
      <p className="profile-description">I develop innovative solutions that create value and make a positive impact.</p>
      <div id='icons'>
        <a href='https://www.linkedin.com/in/wilson-szeto-3a4b591aa/' target='_blank' rel='noopener noreferrer' className='icon-link'>
          <div id='tooltip' className='icon-link'>
            <img src={linkedin} alt='Linkedin' width='35px' height='35px' />
            <span className='tooltiptext'>Linkedin</span>
          </div>
        </a>

        <a href='https://github.com/wiszeto' target='_blank' rel='noopener noreferrer' className='icon-link'>
          <div id='tooltip' className='icon-link'>
            <img src={github} alt='Github' width='35px' height='35px' />
            <span className='tooltiptext'>Github</span>
          </div>
        </a>

        <a href='https://replit.com/@WilsonSzeto' target='_blank' rel='noopener noreferrer' className='icon-link'>
          <div id='tooltip' className='icon-link'>
            <img src={repl} alt='Repl' width='35px' height='35px' />
            <span className='tooltiptext'>replit</span>
          </div>
        </a>

        <a href='https://myanimelist.net/animelist/willievibes?status=2' target='_blank' rel='noopener noreferrer' className='icon-link'>
          <div id='tooltip' className='icon-link'>
            <img src={mal} alt='Repl' width='35px' height='35px' />
            <span className='tooltiptext'>My Anime List</span>
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
    </div>
  );
};

export default Profile;
