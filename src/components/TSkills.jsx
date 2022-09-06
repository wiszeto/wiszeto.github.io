import React, { Component } from 'react'
import "../css/skills.css"

import msofficeimg from '../images/msofficelogo.png'
import scrumimg from '../images/scrumlogo.png'
import gitimg from '../images/gitlogo.png'







function TSkills(props) {
    return (
       
            <section id="skillheader" className="flex-project-container">
                <div><img class='image' src={gitimg} alt="git"/><h3>Git</h3></div>
                <div><img class='image' src={scrumimg} alt="scrum"/><h3>Scrum</h3></div>
                <div><img class='image' src={msofficeimg} alt="msoffice"/><h3>MS Office</h3></div>

            </section>
    )
}

export default TSkills;
