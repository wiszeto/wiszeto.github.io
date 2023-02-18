import React from 'react';
import "../css/frontpage.css";

import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import discord from '../images/discord.png';

function FrontPage() {
  const lastModified = new Date(document.lastModified).toLocaleString();

  return (
    <div id='frontpage'>
      <div id='fronttext'>
        <h1>Wilson Szeto</h1>
        <h2>Electrical Engineer <i className="fa-solid fa-wave-square"></i> Software Dev</h2>

        <div id='icons'>
          <a href='https://www.linkedin.com/in/wilson-szeto-3a4b591aa/' target='_blank' rel='noopener noreferrer' className='icon-link'>
            <img src={linkedin} alt='Linkedin' width='35px' height='35px' />
          </a>
          <a href='https://github.com/wiszeto' target='_blank' rel='noopener noreferrer' className='icon-link'>
            <img src={github} alt='Github' width='35px' height='35px' />
          </a>
          <div id='tooltip' className='icon-link'>
            <img src={discord} alt='Discord' width='35px' height='35px' />
            <span className='tooltiptext'>williepog#8786</span>
          </div>
        </div>
      </div>
      <div id='last-modified'>
          Latest Push: {lastModified}
      </div>
    </div>
  );
}

export default FrontPage;
