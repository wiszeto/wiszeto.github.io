import React, {useState} from 'react';
import "../css/about.css";



function About() {
    return (        
        <div>
        <h1 class='sectiontitle'>About Me</h1>
        <div class="about-container">
          <div class="about-text">
            <h2>ABOUT ME</h2>
            <h3>Welcome to my website! My name is  Wilson and I'm from San Francisco, CA. I currently studying electrical engineering at Cal Poly SLO. I work in my school's cybersecurity department while also running a ROBLOX buisness on the side. I've been coding for 4+ years and working with electronics for 2+ years.</h3>
            <h3>On the software side, I have lots of experience with python and lua. I love to work with projects that include webscraping, the requests library, discord bots, and any scripts that performs automation. When I was younger, I loved finding vulnerbilities in bad programming within Roblox experiences, and using them to my advantage. This is where the bulk of my programming knowledge comes from and what first got me into programming.</h3>
            <h3>On the hardware side, I have been studying circuit components and building breadboard circuits in school. I also own a Raspberry Pi 4b 8GB where I host various scripts.</h3>
            <h3>Feel free to check out my projects down below!</h3>
          </div>
        </div>
        </div>
    );
}

export default About;