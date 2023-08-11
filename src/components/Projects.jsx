import React from 'react';
import '../css/Projects.css';
import Card from './Card';

const Projects = () => (
  <section id="projects" className="content-Projects">
    <h2>Projects</h2>
    <Card
      picture={require("../images/chbot.png")}
      title="Course Hero Bot"
      description="A discord bot that unlocks resources from coursehero.com. Over +65,000 unique users, +20 million files generated, +200 daily users."
      tags={["Python", "Server Hosting", "Discord.py"]}
      buttons={[
        { text: 'Live', link: 'https://discord.gg/Upk84Zx92U' },
        { text: 'Demo', link: 'https://www.youtube.com/watch?v=0Nf_HmQ5zVM' },
      ]}
    />
    <Card
      picture={require("../images/oscilloscope.png")}
      title="Function Generator"
      description="This Function Generator, powered by a NUCLEO-L4A6ZG, can produce square, sawtooth, and sinusoidal waveforms at five selectable frequencies (100Hz-500Hz). "
      tags={["C", "Nucleo Board", "Embedded Systems", "Electrical Engineering"]}
      buttons={[
        { text: 'Github', link: 'https://github.com/wiszeto/EE329/tree/main/P2/Core/Src' },
      ]}
    />
    <Card
      picture={require("../images/singify.png")}
      title="Singify"
      description="Won 1st place at SLO Hacks Fall 2021 Hackathon. A finish the lyrics game that plays a song, stops, & leaves players to finish the lyrics."
      tags={["Python", "Spotify", "Youtube"]}
      buttons={[
        { text: 'Devpost', link: 'https://devpost.com/software/singify' },
        { text: 'Github', link: 'https://github.com/ObjectJosh/Singify' },
      ]}
    />
    <Card
      picture={require("../images/vendingmachine.jpg")}
      title="Basys 3 Vending Machine"
      description="A vending machine built with the Basys-3 FPGA board, utilizing SystemVerilog and modular design."
      tags={["SystemVerilog", "FPGA", "Basys-3"]}
      buttons={[
        { text: 'Demo', link: 'https://www.youtube.com/watch?v=hONQs_XhRxM' },
        { text: 'Github', link: 'https://github.com/wiszeto/Mock-Vending-Machine' },
      ]}
    />
    <Card
      picture={require("../images/portfolio.png")}
      title="React Portfolio Website"
      description="A responsive portfolio website built with React.js. Utilizes functional components and no external UI packages were used."
      tags={["React", "JavaScript", "CSS"]}
      buttons={[
        { text: 'Github', link: 'https://github.com/wiszeto/wiszeto.github.io' },
      ]}
    />
  </section>
);

export default Projects;
