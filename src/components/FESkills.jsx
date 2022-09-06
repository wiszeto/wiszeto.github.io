import React, { Component } from 'react'
import "../css/skills.css"

import htmlimg from '../images/html5logo.jpg'
import cssimg from '../images/csslogo.png'
import reactimg from '../images/reactlogo.svg'
import nodeimg from '../images/nodelogo.svg'
import figmaimg from '../images/figmalogo.png'
import javascriptimg from '../images/javascriptlogo.png'







function FESkills() {
    return (
       
            <section id="skillheader" className="flex-project-container">
                <div><img class='image' src={reactimg} alt="react"/><h3>React</h3></div>
                <div><img class='image' src={htmlimg}  alt="html"/><h3>HTML</h3></div>  
                <div><img class='image' src={cssimg} alt="css"/><h3>CSS</h3></div>
                <div><img class='image' src={javascriptimg}  alt="javascript"/><h3>Javascript</h3></div>
                <div><img class='image' src={figmaimg} alt="figma"/><h3>Figma</h3></div>
            </section>
    )
}

export default FESkills;
