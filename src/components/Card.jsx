import React from 'react';
import '../css/Card.css';

const Card = ({ picture, title, description, tags, buttons }) => (
  <div className="card-container">
    <div className="card-image-container">
      <img className="card-image" src={picture} alt={title} />
    </div>
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-tags">
        {tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
      </div>
      <div className="card-buttons">
        {buttons && buttons.map((button, index) => 
          <a key={index} href={button.link} target="_blank" rel="noopener noreferrer">
            <button className="card-button">{button.text}</button>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Card;
