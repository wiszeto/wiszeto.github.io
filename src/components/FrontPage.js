import React, {useState} from 'react';
import "../css/frontpage.css";

import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import discord from '../images/discord.png'


function FrontPage() {
    return (
        <div id='frontpage'>
            <div id = 'fronttext'>
                <h1 >Wilson Szeto</h1>
                <h2>Electrical Engineer <i class="fa-solid fa-wave-square"></i> Software Dev</h2>
            
                <div id="icons">
                    <a id="icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wilson-szeto-3a4b591aa/" >
                        <img src={linkedin} alt="Linkedin" width="35px" height="35px" />
                    </a>
                    <a id="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/wiszeto" >
                        <img src={github} alt="Linkedin" width="35px" height="35px" />
                    </a>
                    <a id="icon" href="#" >
                        <div id="tooltip">
                            <img src={discord} alt="Linkedin" width="35px" height="35px" />
                            <span id="tooltiptext">williepog#8786</span>
                        </div>
                    </a>
                </div>
            </div>
            <p id='scrolldown'>scroll down</p>
        </div>
    );
}

export default FrontPage;