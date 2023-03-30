import React, { useState } from 'react';
import "../css/skills.css";

import pyimg from '../images/pythonimg.png';
import htmlimg from '../images/html5logo.jpg';
import cssimg from '../images/csslogo.png';
import awsimg from '../images/awslogo.png';
import luaimg from '../images/lualogo.svg';
import reactimg from '../images/reactlogo.svg';
import seleniumimg from '../images/seleniumlogo.png';
import matlabimg from '../images/matlablogo.png';
import bashimg from '../images/bashlogo.png';
import msofficeimg from '../images/msofficelogo.png';
import raspberrypiimg from '../images/raspberrypilogo.png';
import nodeimg from '../images/nodelogo.svg';
import altiumimg from '../images/altiumlogo.png';
import figmaimg from '../images/figmalogo.png';
import dockerimg from '../images/dockerlogo.jpg';
import arduinoimg from '../images/arduinologo.png';

function BESkills(props) {
  const handleClick = (event) => {
    const flipContainer = event.currentTarget.closest('.flip-container');
    flipContainer.classList.toggle('hover');
  };
  return (
    <section id="skillheader" className="flex-project-container">
      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            <img className="image" src={pyimg} alt="python"/><h3>Python</h3>
          </div>
          <div className="back">
            <p>Python is a powerful programming language used for a wide range of applications.</p>
          </div>
        </div>
      </div>
      <div><img className="image" src={nodeimg}  alt="node"/><h3>Node</h3></div>
      <div><img className="image" src={awsimg} alt="aws"/><h3>AWS</h3></div>
      <div><img className="image" src={seleniumimg} alt="selenium"/><h3>Selenium</h3></div>
      <div><img className="image" src={bashimg} alt="bash"/><h3>Bash</h3></div>
      <div><img className="image" src={dockerimg} alt="docker"/><h3>Docker</h3></div>
      <div><img className="image" src={luaimg} alt="lua"/><h3>Lua</h3></div>
    </section>
  );
}

export default BESkills;
