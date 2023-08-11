import React from 'react';
import IconWithModal from './Iconwithmodal';
import '../css/Skills.css';

import pyimg from '../images/pythonimg.png'
import htmlimg from '../images/html5logo.jpg'
import cssimg from '../images/csslogo.png'
import gitimg from '../images/gitlogo.png'
import awsimg from '../images/awslogo.png'
import luaimg from '../images/lualogo.svg'
import reactimg from '../images/reactlogo.svg'
import seleniumimg from '../images/seleniumlogo.png'
import matlabimg from '../images/matlablogo.png'
import bashimg from '../images/bashlogo.png'
import msofficeimg from '../images/msofficelogo.png'
import raspberrypiimg from '../images/raspberrypilogo.png'
import nodeimg from '../images/nodelogo.svg'
import arduinoimg from '../images/arduinologo.png'
import C from '../images/C_Logo.png'
import scrum from '../images/scrumlogo.png'
import ltspice from '../images/ltspicelogo.png'
import oscilloscope from '../images/oscilloscope_logo.png'
import multimeter from '../images/multimeter_logo.png'

const Skills = () => (
  <><h2 id="skills">Skills</h2>
  <section className="content-Skills">
    <IconWithModal icon={pyimg} modalText="Python Modal" />
    <IconWithModal icon={C} modalText="C Modal" />
    <IconWithModal icon={htmlimg} modalText="HTML5 Modal" />
    <IconWithModal icon={cssimg} modalText="CSS Modal" />
    <IconWithModal icon={gitimg} modalText="Git Modal" />
    <IconWithModal icon={awsimg} modalText="AWS Modal" />
    <IconWithModal icon={luaimg} modalText="Lua Modal" />
    <IconWithModal icon={reactimg} modalText="React Modal" />
    <IconWithModal icon={seleniumimg} modalText="Selenium Modal" />
    <IconWithModal icon={matlabimg} modalText="Matlab Modal" />
    <IconWithModal icon={bashimg} modalText="Bash Modal" />
    <IconWithModal icon={msofficeimg} modalText="MS Office Modal" />
    <IconWithModal icon={raspberrypiimg} modalText="Raspberry Pi Modal" />
    <IconWithModal icon={nodeimg} modalText="Node.js Modal" />
    <IconWithModal icon={arduinoimg} modalText="Arduino Modal" />
    <IconWithModal icon={scrum} modalText="Scrum Modal" />
    <IconWithModal icon={ltspice} modalText="LTSpice Modal" />
    <IconWithModal icon={multimeter} modalText="Multimeter Modal" />
    <IconWithModal icon={oscilloscope} modalText="Oscilloscope Modal" />
  </section>
  </>
);

export default Skills;
