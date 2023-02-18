import React from 'react';
import '../css/skills.css';

import matlabimg from '../images/matlablogo.png';
import raspberrypiimg from '../images/raspberrypilogo.png';
import altiumimg from '../images/altiumlogo.png';
import arduinoimg from '../images/arduinologo.png';
import ltspiceimg from '../images/ltspicelogo.png';

function EESkills({ title, img }) {
  return (
    <section id="skillheader" className="flex-project-container">
      <div>
        <img className="image" src={altiumimg} alt="altium" />
        <h3>Altium</h3>
      </div>
      <div>
        <img className="image" src={matlabimg} alt="matlab" />
        <h3>Matlab</h3>
      </div>
      <div>
        <img className="image" src={ltspiceimg} alt="ltspice" />
        <h3>LTSpice</h3>
      </div>
      <div>
        <img className="image" src={raspberrypiimg} alt="raspberrypi" />
        <h3>Raspberry Pi</h3>
      </div>
      <div>
        <img className="image" src={arduinoimg} alt="arduino" />
        <h3>Arduino</h3>
      </div>
    </section>
  );
}

export default EESkills;
