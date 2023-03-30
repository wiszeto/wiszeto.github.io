import React from 'react';
import "../css/frontpage.css";

import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import discord from '../images/discord.png';
import roblox from '../images/roblox.png';
import repl from '../images/repl.png';

function FrontPage() {
  const lastModified = new Date(document.lastModified).toLocaleString();

  return (
    <div id='frontpage'>
      <div id='fronttext'>
        <h1>Wilson Szeto</h1>
        <h2>Electrical Engineer <i className="fa-solid fa-wave-square"></i> Software Dev</h2>

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
          
          <a href='https://www.roblox.com/users/1333276917/profile' target='_blank' rel='noopener noreferrer' className='icon-link'>
          <div id='tooltip' className='icon-link'>
            <img src={roblox} alt='Roblox' width='35px' height='35px' />
            <span className='tooltiptext'>Roblox</span>
            </div>
          </a>

          <div id='tooltip' className='icon-link'>
            <img src={discord} alt='Discord' width='35px' height='35px' cursor='pointer'/>
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
