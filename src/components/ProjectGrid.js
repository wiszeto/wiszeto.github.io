import React, {useState} from 'react';
import "../css/projectgrid.css";
import CardGrid from './CardGrid.js'
import pyimg from '../images/pythonimg.png'


function ProjectGrid(props) {
    return (
      <div>
        <h1 class='sectiontitle'>Projects</h1>
        <div className="wrapper">
              <CardGrid
                img={require("../images/altiumimg.jpg")}
                title="Altium Projects"
                description="Developed a simple PCB that "
                skills="Skills: "
                link1="https://www.youtube.com/"
                link2="https://www.ebay.com/sh/ovw"
                btn1="Source"
                btn2="Github"
              />

              <CardGrid
                img={require("../images/rasppi.jpg")}
                title="Raspberry Pi Server"
                description="Currently hosting docker containers with a Raspberry Pi 4b 8gb using Rasbian OS Lite. Became more familiar with Bash terminal."
                skills="Skills: SSH, Bash, Docker, Raspberry Pi"
                link1=""
                link2=""
                btn1="Source"
                btn2="Github"
              />

              <CardGrid
                img={require("../images/chbot.png")}
                title="Course Hero Bot"
                description='+100 daily users, used by over 30,000+ students, generated over 16 million files, and is currently on 400+ servers.'
                skills="Skills: Python, OOP, Discord.py, Git, Server Hosting, Data/Databases. "
                link1="https://discord.gg/QAeGWrKRK5"
                link2=""
                btn1="Source"
                btn2="Github"
              />

              <CardGrid
                img={require("../images/portfolio.png")}
                title="React Portfolio Website"
                description="A responsive portfolio website built with React.js. Utilizes functional components, props, and npm. "
                skills="Skills: ReactJS, NodeJS, HTML, CSS, Git, Server Hosting"
                link1=""
                link2=""
                btn1="Source"
                btn2="Github"
              />

              <CardGrid
                img={require("../images/ebay.png")}
                title="Ebay Seller"
                description="Ranked as a Top-Rated Seller with over 145+ vouches with a 100% positive reputation score. Over 750+ transactions, with $500+ in monthly sales."
                skills="Skills: Customer Service, Thread Design, Inventory Management"
                link1="https://www.ebay.com/fdbk/feedback_profile/wilsonuwu"
                link2=""
                btn1="Vouches"
                btn2="Listings"
              />

              <CardGrid
                img={require("../images/singify.png")}
                title="Signify"
                description="Won 1st place at SLO Hacks Fall 2021 Hackathon. A finish the lyrics game that plays a song, stops, & leaves players to finish the lyrics."
                skills="Skills: Python, Spotify, Youtube"
                link1="https://devpost.com/software/singify"
                link2="https://github.com/ObjectJosh/Singify"
                btn1="Devpost"
                btn2="Github"
              />
        </div>
      </div>
    );
}

export default ProjectGrid;