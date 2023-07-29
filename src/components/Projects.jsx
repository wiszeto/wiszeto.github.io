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
      tags={['tag1', 'tag2', 'tag3']}
    />
    <Card
      picture={require("../images/singify.png")}
      title="Singify"
      description="Won 1st place at SLO Hacks Fall 2021 Hackathon. A finish the lyrics game that plays a song, stops, & leaves players to finish the lyrics."
      tags={['tag1', 'tag2', 'tag3']}
    />
    <Card
      picture={require("../images/vendingmachine.jpg")}
      title="Basys 3 Vending Machine"
      description="A vending machine built with the Basys-3 FPGA board, utilizing SystemVerilog and modular design."
      tags={['tag1', 'tag2', 'tag3']}
    />
    <Card
      picture={require("../images/portfolio.png")}
      title="React Portfolio Website"
      description="A responsive portfolio website built with React.js. Utilizes functional components and no external UI packages were used."
      tags={['tag1', 'tag2', 'tag3']}
    />
  </section>
);

export default Projects;
