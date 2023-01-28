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
                <h3>Discord Developer - Team Lead | April 2022 - Present</h3>
                <ul class="ex-points">
                  <li>Revamped legacy code from previous discord bots into modern, maintainable, and robust code for future development.</li>
                  <li>Fixed internal structure and UI/UX functionality which allowed users to understand the bot intuitively and drastically reduced the number of errors a user can make.</li>
                  <li>Developed three python-based bots:</li>
                  <ol >
                    <li >Allow users to request help from admins using a advance support ticket system.</li>
                    <li >Allow users to be automatically assigned roles based on a registered email and password.</li>
                    <li >A selection of commands to help moderate and maintain the discord server.</li>
                  </ol>
                  <li>Incorperated AWS services such as DynamoDB for client data organization, EC2-Instances for bot hosting, and CodeComit for version control.</li>
                  <ImageSlider slides={SliderData}/>
                </ul>
            </li>
            <li class="ex-section">
                <h2>California Cybersecurity Institute</h2>
                <h3>React Developer | July 2022 - September 2022</h3>

                <ul class="ex-points">
                  <li>Intergrated various UI and UX changes to Space Grand Challenge website</li>
                  <li>Learned how to work with NodeJS, ReactJS, and Javascript</li>
                  <li>Utilized Figma for project design</li>
                </ul>

            </li>

          </ul>
        </div>
        </>
        );
}

export default Experience;