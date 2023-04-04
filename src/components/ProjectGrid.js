import React, {useState} from 'react';
import "../css/projectgrid.css";
import CardGrid from './CardGrid.js'



function ProjectGrid(props) {
    return (
      <div>
        <h1 class='sectiontitle'>Projects</h1>
        <div className="wrapper">
            
              <CardGrid
                img={require("../images/chbot.png")}
                title="Course Hero Bot"
                description='A discord bot that unlocks resources from coursehero.com. Over +65,000 unique users, +20 million files generated, +200 daily users.'
                tags={["Python", "OOP", "Discord.py", "Git"]}
                link1="https://discord.gg/Upk84Zx92U"
                link2="https://www.youtube.com/watch?v=0Nf_HmQ5zVM"
                btn1="Source"
                btn2="Demo"
              />
              
              <CardGrid
                img={require("../images/portfolio.png")}
                title="React Portfolio Website"
                description="A responsive portfolio website built with React.js. Utilizes functional components and no external UI packages were used."
                tags={["ReactJS", "NodeJS", "HTML", "CSS", "Git"]}
                link1="https://wiszeto.com/"
                link2="https://github.com/wiszeto/wiszeto.github.io"
                btn1="Source"
                btn2="Github"
              />
              <CardGrid
                img={require("../images/ebay.png")}
                title="Ebay Seller"
                description="Ranked as a Top-Rated Seller with over 150+ vouches with a 100% positive reputation score. Over 800+ transactions, with $500+ in monthly sales."
                tags={["Customer Service", "Thread Design", "Inventory Management"]}
                link1="https://www.ebay.com/usr/wilsonuwu"
                link2="https://www.ebay.com/fdbk/feedback_profile/wilsonuwu"
                btn1="Profile"
                btn2="Vouches"
              />
              <CardGrid
                img={require("../images/singify.png")}
                title="Signify"
                description="Won 1st place at SLO Hacks Fall 2021 Hackathon. A finish the lyrics game that plays a song, stops, & leaves players to finish the lyrics."
                tags={["Python", "Spotify", "Youtube"]}
                link1="https://devpost.com/software/singify"
                link2="https://github.com/ObjectJosh/Singify"
                btn1="Devpost"
                btn2="Github"
              />
              <CardGrid
                img={require("../images/dcfan.png")}
                title="Remote Controlled DC FAN"
                description="A remote controled fan that has the ability to rotate by rotary enocoder, rotate by remote IR sensor, or auto-rotate."
                tags={["React", "JavaScript", "CSS"]}
                link1="https://youtu.be/SRNvu3Tf0jM?t=25"
                link2="https://github.com/wiszeto/RemoteDCFan"
                btn1="Demo"
                btn2="Github"
              />
              <CardGrid
                img={require("../images/vendingmachine.jpg")}
                title="Basys 3 Vending Machine"
                description="A vending machine built with the Basys-3 FPGA board, utilizing SystemVerilog and modular design."
                tags={["React", "JavaScript", "CSS"]}
                link1="https://www.youtube.com/watch?v=hONQs_XhRxM"
                link2="https://github.com/wiszeto/Mock-Vending-Machine"
                btn1="Demo"
                btn2="Github"
              />
              <CardGrid
                img={require("../images/rasppi.jpg")}
                title="Raspberry Pi Server"
                description="[in-progress]Currently hosting docker containers with a Raspberry Pi 4b 8gb using Rasbian OS Lite. Became more familiar with Bash terminal."
                tags={["React", "JavaScript", "CSS"]}
                link1=""
                link2=""
                btn1="Source N/A"
                btn2="Github N/A"
              />
              {/* <CardGrid
                img={require("../images/altiumimg.jpg")}
                title="Altium Projects"
                description="[in-progress]"
                tags={["React", "JavaScript", "CSS"]}
                link1=""
                link2=""
                btn1="Source N/A"
                btn2="Github N/A"
              /> */}
        </div>
      </div>
    );
}

export default ProjectGrid;