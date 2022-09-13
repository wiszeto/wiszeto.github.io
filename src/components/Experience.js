import React, {useState} from 'react';
import "../css/experience.css";

import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


function Experience() {
    return (
        <>
        <h1 id='experience' class='sectiontitle'>Experience</h1>
        <div class="experience-container">
          <ul class="ex-ul">
            <li class="ex-section">
                <h2>California Cybersecurity Institute</h2>
                <h3>React Developer </h3>

                <ul class="ex-points">
                  <li>Intergrated various UI and UX changes to Space Granc Challenge website</li>
                  <li>Learned how to work with NodeJS, ReactJS, and Javascript</li>
                  <li>Utilized figma for project design</li>
                </ul>

            </li>
            <li class="ex-section">
                <h2>California Cybersecurity Institute</h2>
                <h3>Discord Developer</h3>
                <ul class="ex-points">
                  <li>Revamped legacy code of previous discord bots into modern, maintainable, and robust code for future development.</li>
                  <li>Fixed internal structure and UI/UX functionality which allowed users to understand the bot intuitively and drastically reduced the number of errors a user can make.</li>
                  <li>Developed three python-based bots that allow users to request help from admins using a support ticket system, allowed users to be assigned roles based on a registered email, and several commands to help moderate and maintain the discord server. </li>
                  <li>Utilized AWS services such as DynamoDB, EC2-Instances, and CodeComit.</li>
                  <ImageSlider slides={SliderData}/>
                </ul>
            </li>
            <li class="ex-section">
                <h2>sdflksdfjsldfj</h2>
                <h3>sdfsdfsd Developer</h3>
                <ul class="ex-points">
                  <li>Jill</li>
                  <li>Eve</li>
                  <li>Adam</li>
                </ul>
            </li>
          </ul>
        </div>
        </>
        );
}

export default Experience;