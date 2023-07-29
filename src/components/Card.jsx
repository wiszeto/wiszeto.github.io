import React from 'react';
import '../css/Card.css'; // Assuming you have a CSS file named Card.css

const Card = ({ picture, title, description, tags }) => (
  <div className="card-container">
    <img className="card-image" src={picture} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-tags">
        {tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
      </div>
    </div>
  </div>
);

export default Card;
