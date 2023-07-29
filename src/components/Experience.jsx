import React from 'react';
import '../css/Experience.css';
import Card from './Card';

const Experience = () => (
  <section id="experience" className="content-Experience">
    <h2>Experience</h2>
    <Card
      picture={require("../images/sgc.png")}
      title="California Cybersecurity Institute - Software developer"
      description="Revamped legacy code of previous discord bots into modern, maintainable, and robust code for future development. Fixed internal structure and UI/UX functionality, allowing users to understand the bot intuitively and drastically reduced the number of errors users could make.
      Developed python-based bots that allow users to request help using a support ticket system (100+ tickets created), allowed users to verify based on an email (200+ students verified), and several commands to help moderate and maintain the discord server. 
      Incorporated AWS services like DynamoDB, EC2-Instances, and CodeCommit for efficient and reliable bot functionality, resulting in a better user experience.
      "
      tags={[]}
    />
    <Card
      picture={require("../images/ebay.png")}
      title="Ebay - Independent Seller"
      description="800+ verified sales, 1.5k+ total sales. Responsible for sales, shipping, inventory management, customer service, & quality control of products. Developed strong customer service skills to retain satisfied clients."
      tags={[]}
    />

  </section>
);

export default Experience;
